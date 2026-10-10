// Deterministic simulation core. No DOM, no Date, no Math.random:
// the same (meta, seed, policy) always yields the same run, so balance can be tested headlessly.

export const TICK = 1 / 30;
export const WAVE_SECONDS = 12;
export const ARENA_RADIUS = 260;
export const TOWER_RADIUS = 16;
export const CRIT_MULT = 3;

export function mulberry32(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// In-run upgrades: bought with coins, reset every run.
export const UPGRADES = {
  damage: { label: 'Damage', base: 10, growth: 1.32 },
  speed: { label: 'Attack speed', base: 12, growth: 1.34 },
  range: { label: 'Range', base: 14, growth: 1.30, max: 20 },
  health: { label: 'Armor', base: 10, growth: 1.30 },
  regen: { label: 'Repair', base: 16, growth: 1.34 },
  crit: { label: 'Crit chance', base: 18, growth: 1.36, max: 14 },
  economy: { label: 'Salvage', base: 20, growth: 1.40 },
};

// Permanent upgrades: bought with research points earned when a run ends.
export const META = {
  power: { label: 'Power', desc: 'x1.22 damage per level', base: 3, growth: 1.55 },
  vigor: { label: 'Vigor', desc: 'x1.22 hull and repair per level', base: 3, growth: 1.55 },
  fortune: { label: 'Fortune', desc: 'x1.22 coins per level', base: 4, growth: 1.6 },
};

export const emptyMeta = () => ({ power: 0, vigor: 0, fortune: 0, points: 0, bestWave: 0, runs: 0 });

export const upgradeCost = (key, level) => Math.ceil(UPGRADES[key].base * UPGRADES[key].growth ** level);
export const metaCost = (key, level) => Math.ceil(META[key].base * META[key].growth ** level);
export const pointsForWave = (wave) => Math.floor(0.6 * wave ** 1.35);

export function stats(s) {
  const L = s.levels;
  const m = s.meta;
  return {
    damage: 16 * (1 + 0.28 * L.damage) * 1.22 ** m.power,
    shotsPerSec: 1.6 * (1 + 0.16 * L.speed),
    range: 110 + 9 * L.range,
    maxHp: 100 * (1 + 0.5 * L.health) * 1.22 ** m.vigor,
    regen: 2 * L.regen * 1.22 ** m.vigor,
    crit: Math.min(0.8, 0.05 + 0.06 * L.crit),
    armor: 0.92 ** L.health,
    coinMult: (1 + 0.3 * L.economy) * 1.22 ** m.fortune,
  };
}

export function createRun(meta, seed = 1) {
  const s = {
    meta,
    rng: mulberry32(seed),
    t: 0,
    wave: 1,
    waveClock: 0,
    spawnLeft: 0,
    spawnClock: 0,
    enemies: [],
    shots: [], // visual only, cleared by renderer
    coins: 0,
    kills: 0,
    cooldown: 0,
    levels: Object.fromEntries(Object.keys(UPGRADES).map((k) => [k, 0])),
    hp: 0,
    over: false,
    nextId: 1,
  };
  s.hp = stats(s).maxHp;
  startWave(s);
  return s;
}

function startWave(s) {
  s.spawnLeft = 4 + Math.floor(s.wave * 1.6);
  s.spawnClock = 0;
}

const enemyHp = (w) => 14 * 1.13 ** (w - 1);
const enemySpeed = (w) => Math.min(70, 26 + 1.4 * w);
const enemyDamage = (w) => 2 * 1.075 ** (w - 1);
const waveBonus = (w) => 14 * 1.10 ** (w - 1);
const coinValue = (w) => 1.6 * 1.10 ** (w - 1);

function spawn(s) {
  const boss = s.wave % 10 === 0 && s.spawnLeft === 1;
  const angle = s.rng() * Math.PI * 2;
  s.enemies.push({
    id: s.nextId++,
    x: Math.cos(angle) * ARENA_RADIUS,
    y: Math.sin(angle) * ARENA_RADIUS,
    hp: enemyHp(s.wave) * (boss ? 8 : 1),
    maxHp: enemyHp(s.wave) * (boss ? 8 : 1),
    speed: enemySpeed(s.wave) * (boss ? 0.6 : 1),
    dmg: enemyDamage(s.wave) * (boss ? 3 : 1),
    boss,
    value: coinValue(s.wave) * (boss ? 10 : 1),
  });
}

export function buy(s, key) {
  const cap = UPGRADES[key].max;
  if (cap !== undefined && s.levels[key] >= cap) return false;
  const cost = upgradeCost(key, s.levels[key]);
  if (s.coins < cost) return false;
  s.coins -= cost;
  s.levels[key] += 1;
  if (key === 'health') s.hp += 30 * 1.22 ** s.meta.vigor;
  return true;
}

export function step(s) {
  if (s.over) return;
  const st = stats(s);
  s.t += TICK;

  // waves advance on a fixed clock so a stalled tower cannot idle forever.
  s.waveClock += TICK;
  if (s.waveClock >= WAVE_SECONDS) {
    s.waveClock -= WAVE_SECONDS;
    s.wave += 1;
    s.coins += waveBonus(s.wave) * st.coinMult;
    startWave(s);
  }
  if (s.spawnLeft > 0) {
    s.spawnClock -= TICK;
    if (s.spawnClock <= 0) {
      spawn(s);
      s.spawnLeft -= 1;
      s.spawnClock = (WAVE_SECONDS * 0.7) / (4 + Math.floor(s.wave * 1.6));
    }
  }

  // enemies advance and hit the tower on contact (1 hit per second each).
  let incoming = 0;
  for (const e of s.enemies) {
    const d = Math.hypot(e.x, e.y);
    if (d > TOWER_RADIUS + 4) {
      const k = Math.min(e.speed * TICK, d - TOWER_RADIUS) / d;
      e.x -= e.x * k;
      e.y -= e.y * k;
    } else {
      incoming += e.dmg * TICK;
    }
  }
  s.hp = Math.min(st.maxHp, s.hp + st.regen * TICK) - incoming * st.armor;
  if (s.hp <= 0) {
    s.hp = 0;
    s.over = true;
    return;
  }

  // tower fires at the nearest enemy in range.
  s.cooldown -= TICK;
  while (s.cooldown <= 0) {
    let target = null;
    let best = st.range;
    for (const e of s.enemies) {
      const d = Math.hypot(e.x, e.y);
      if (d <= best) {
        best = d;
        target = e;
      }
    }
    if (!target) {
      s.cooldown = 0;
      break;
    }
    const crit = s.rng() < st.crit;
    target.hp -= st.damage * (crit ? CRIT_MULT : 1);
    s.shots.push({ x: target.x, y: target.y, crit });
    s.cooldown += 1 / st.shotsPerSec;
  }

  const alive = [];
  for (const e of s.enemies) {
    if (e.hp <= 0) {
      s.coins += e.value * st.coinMult;
      s.kills += 1;
    } else alive.push(e);
  }
  s.enemies = alive;
}

// Finish a run: bank research points and update the meta record.
export function endRun(s) {
  const gained = pointsForWave(s.wave);
  const meta = { ...s.meta };
  meta.points += gained;
  meta.bestWave = Math.max(meta.bestWave, s.wave);
  meta.runs += 1;
  return { meta, gained };
}

export function buyMeta(meta, key) {
  const cost = metaCost(key, meta[key]);
  if (meta.points < cost) return null;
  return { ...meta, points: meta.points - cost, [key]: meta[key] + 1 };
}

// ---- headless bots, used for balance tests and tuning ----

// weights: relative share of spend. Picks the affordable-or-saving-for upgrade that is most behind its weight.
export function botPick(s, weights) {
  let pick = null;
  let score = Infinity;
  for (const [k, w] of Object.entries(weights)) {
    if (w <= 0) continue;
    const cap = UPGRADES[k].max;
    if (cap !== undefined && s.levels[k] >= cap) continue;
    const sc = (s.levels[k] + 1) / w;
    if (sc < score) {
      score = sc;
      pick = k;
    }
  }
  return pick;
}

export const STRATEGIES = {
  balanced: { damage: 3, speed: 3, range: 1, health: 3, regen: 1, crit: 1, economy: 2 },
  glassCannon: { damage: 5, speed: 5, range: 1, health: 1, regen: 0.5, crit: 2, economy: 1 },
  tank: { damage: 3, speed: 2.5, range: 0.5, health: 5, regen: 3, crit: 0.5, economy: 1 },
  economy: { damage: 3, speed: 3, range: 0.5, health: 2, regen: 0.5, crit: 0.5, economy: 5 },
  crit: { damage: 3, speed: 2.5, range: 0.5, health: 2, regen: 0.5, crit: 5, economy: 1 },
};

export function simulateRun(meta, strategy, seed = 1, maxSeconds = 3600) {
  const s = createRun(meta, seed);
  const weights = STRATEGIES[strategy] ?? strategy;
  while (!s.over && s.t < maxSeconds) {
    for (let guard = 0; guard < 50; guard++) {
      const k = botPick(s, weights);
      if (!k || !buy(s, k)) break;
    }
    step(s);
  }
  return s;
}

// Spend points on the cheapest permanent upgrade until nothing is affordable.
export function spendMeta(meta) {
  let m = meta;
  for (;;) {
    const keys = Object.keys(META).sort((a, b) => metaCost(a, m[a]) - metaCost(b, m[b]));
    const next = buyMeta(m, keys[0]);
    if (!next) return m;
    m = next;
  }
}
