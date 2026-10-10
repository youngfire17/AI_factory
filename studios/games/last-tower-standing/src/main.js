import {
  createRun, step, buy, stats, upgradeCost, endRun, buyMeta, metaCost,
  UPGRADES, META, emptyMeta, TICK, ARENA_RADIUS, TOWER_RADIUS,
} from './sim.js';

const SAVE_KEY = 'lts.save.v1';
const $ = (id) => document.getElementById(id);
const canvas = $('view');
const ctx = canvas.getContext('2d');

function load() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (raw) return { ...emptyMeta(), ...JSON.parse(raw) };
  } catch { /* storage unavailable: play without saving */ }
  return emptyMeta();
}
function save() {
  try { localStorage.setItem(SAVE_KEY, JSON.stringify(meta)); } catch { /* ignore */ }
}

let meta = load();
let run = null;
let speed = 1;
let acc = 0;
let last = performance.now();
let seedCounter = (Date.now() & 0xffff) | 1;

// ---- UI ----
const fmt = (n) => (n >= 1e6 ? n.toExponential(2) : n >= 1e4 ? (n / 1e3).toFixed(1) + 'k' : Math.floor(n).toString());

function renderSpeeds() {
  const el = $('speeds');
  el.innerHTML = '';
  for (const x of [1, 2, 4]) {
    const b = document.createElement('button');
    b.textContent = `${x}x`;
    b.style.borderColor = x === speed ? 'var(--accent)' : '';
    b.onclick = () => { speed = x; renderSpeeds(); };
    el.appendChild(b);
  }
}

const shopButtons = {};
function buildShop() {
  const shop = $('shop');
  shop.innerHTML = '';
  for (const [key, u] of Object.entries(UPGRADES)) {
    const b = document.createElement('button');
    b.onclick = () => { if (run && !run.over) buy(run, key); };
    shop.appendChild(b);
    shopButtons[key] = b;
    b.dataset.label = u.label;
  }
}
function refreshShop() {
  for (const [key, u] of Object.entries(UPGRADES)) {
    const lvl = run.levels[key];
    const maxed = u.max !== undefined && lvl >= u.max;
    const cost = upgradeCost(key, lvl);
    const b = shopButtons[key];
    b.disabled = maxed || run.coins < cost;
    b.innerHTML = `<span>${u.label} <small>Lv ${lvl}</small></span><span>${maxed ? 'MAX' : fmt(cost)}</span>`;
  }
}

function startRun() {
  run = createRun(meta, seedCounter++);
  $('overlay').classList.remove('show');
}

function showTitle() {
  $('card').innerHTML = `
    <h2>Last Tower Standing</h2>
    <p class="muted">Hold the line. Spend coins on upgrades during a run. When your tower falls, convert the wave you reached into permanent research.</p>
    <p class="muted">Best wave: <b>${meta.bestWave}</b> &middot; Runs: <b>${meta.runs}</b></p>
    <button class="primary" id="go">${meta.runs ? 'Deploy tower' : 'Start'}</button>`;
  $('overlay').classList.add('show');
  $('go').onclick = startRun;
}

function showResearch(gained) {
  const rows = Object.entries(META).map(([key, m]) => {
    const cost = metaCost(key, meta[key]);
    return `<button data-k="${key}" ${meta.points < cost ? 'disabled' : ''}>
      <span>${m.label} <small>Lv ${meta[key]} &middot; ${m.desc}</small></span><span>${cost} RP</span></button>`;
  }).join('');
  $('card').innerHTML = `
    <h2>Tower destroyed — wave ${run.wave}</h2>
    <p class="muted">+${gained} research points &middot; ${meta.points} available &middot; best wave ${meta.bestWave}</p>
    ${rows}
    <button class="primary" id="again">Deploy again</button>`;
  $('overlay').classList.add('show');
  $('again').onclick = startRun;
  for (const b of $('card').querySelectorAll('button[data-k]')) {
    b.onclick = () => {
      const next = buyMeta(meta, b.dataset.k);
      if (next) { meta = next; save(); showResearch(gained); }
    };
  }
}

// ---- rendering ----
function draw() {
  const W = canvas.width;
  const c = W / 2;
  const k = (W / 2 - 10) / ARENA_RADIUS;
  ctx.clearRect(0, 0, W, W);
  if (!run) return;
  const st = stats(run);

  ctx.strokeStyle = '#1d2a55';
  ctx.lineWidth = 1;
  ctx.beginPath(); ctx.arc(c, c, ARENA_RADIUS * k, 0, Math.PI * 2); ctx.stroke();
  ctx.setLineDash([4, 6]);
  ctx.strokeStyle = '#2f6f5b';
  ctx.beginPath(); ctx.arc(c, c, st.range * k, 0, Math.PI * 2); ctx.stroke();
  ctx.setLineDash([]);

  for (const e of run.enemies) {
    ctx.fillStyle = e.boss ? '#f59e0b' : '#f87171';
    ctx.beginPath(); ctx.arc(c + e.x * k, c + e.y * k, (e.boss ? 11 : 5) * (W / 560), 0, Math.PI * 2); ctx.fill();
    if (e.boss) {
      ctx.fillStyle = '#0006'; ctx.fillRect(c + e.x * k - 12, c + e.y * k - 18, 24, 3);
      ctx.fillStyle = '#fbbf24'; ctx.fillRect(c + e.x * k - 12, c + e.y * k - 18, 24 * Math.max(0, e.hp / e.maxHp), 3);
    }
  }
  for (const s of run.shots) {
    ctx.strokeStyle = s.crit ? '#fde047' : '#a7f3d0';
    ctx.lineWidth = s.crit ? 2 : 1;
    ctx.beginPath(); ctx.moveTo(c, c); ctx.lineTo(c + s.x * k, c + s.y * k); ctx.stroke();
  }
  run.shots.length = 0;

  ctx.fillStyle = '#6ee7b7';
  ctx.beginPath(); ctx.arc(c, c, TOWER_RADIUS * k * 1.3, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#06281b';
  ctx.beginPath(); ctx.arc(c, c, TOWER_RADIUS * k * 0.6, 0, Math.PI * 2); ctx.fill();

  $('wave').textContent = run.wave;
  $('coins').textContent = fmt(run.coins);
  $('best').textContent = Math.max(meta.bestWave, run.wave);
  $('points').textContent = meta.points;
  $('hp').style.width = `${Math.max(0, (run.hp / st.maxHp) * 100)}%`;
  $('hp').style.background = run.hp / st.maxHp < 0.3 ? 'var(--bad)' : 'var(--accent)';
  refreshShop();
}

function frame(now) {
  const dt = Math.min(0.25, (now - last) / 1000);
  last = now;
  if (run && !run.over) {
    acc += dt * speed;
    while (acc >= TICK && !run.over) { step(run); acc -= TICK; }
  }
  // Settle a finished run exactly once, however it ended.
  if (run && run.over && !run.settled) {
    run.settled = true;
    const { meta: after, gained } = endRun(run);
    meta = after;
    save();
    showResearch(gained);
  }
  draw();
  requestAnimationFrame(frame);
}

// Test hook: lets automated browser checks drive the game deterministically.
window.__lts = { get run() { return run; }, get meta() { return meta; }, step: (n = 1) => { for (let i = 0; i < n; i++) step(run); } };

buildShop();
renderSpeeds();
showTitle();
requestAnimationFrame(frame);
