import test from 'node:test';
import assert from 'node:assert/strict';
import {
  emptyMeta, createRun, step, buy, upgradeCost, simulateRun, endRun, buyMeta, spendMeta,
  STRATEGIES, UPGRADES, metaCost, pointsForWave,
} from '../src/sim.js';

const median = (a) => [...a].sort((x, y) => x - y)[Math.floor(a.length / 2)];
const medianWave = (name, meta = emptyMeta()) =>
  median([1, 2, 3, 4, 5, 6, 7].map((seed) => simulateRun(meta, name, seed).wave));

test('simulation is deterministic for a given seed and strategy', () => {
  const a = simulateRun(emptyMeta(), 'balanced', 42);
  const b = simulateRun(emptyMeta(), 'balanced', 42);
  assert.equal(a.wave, b.wave);
  assert.equal(a.kills, b.kills);
  assert.equal(a.t, b.t);
});

test('a run always terminates and never produces NaN state', () => {
  for (const name of Object.keys(STRATEGIES)) {
    const s = simulateRun(emptyMeta(), name, 3);
    assert.ok(s.over, `${name} should end within the time cap`);
    for (const v of [s.coins, s.hp, s.t, s.kills]) assert.ok(Number.isFinite(v));
  }
});

test('buying spends exactly the cost, refuses when broke, and respects caps', () => {
  const s = createRun(emptyMeta(), 1);
  assert.equal(buy(s, 'damage'), false);
  s.coins = 1000;
  const cost = upgradeCost('damage', 0);
  assert.equal(buy(s, 'damage'), true);
  assert.equal(s.coins, 1000 - cost);
  assert.equal(s.levels.damage, 1);
  s.levels.range = UPGRADES.range.max;
  assert.equal(buy(s, 'range'), false);
});

test('an idle tower with no upgrades eventually dies (no infinite stalling)', () => {
  const s = createRun(emptyMeta(), 1);
  for (let i = 0; i < 30 * 60 * 10 && !s.over; i++) step(s);
  assert.ok(s.over);
});

test('first run lasts long enough to be a game but not so long it is a chore', () => {
  const s = simulateRun(emptyMeta(), 'balanced', 1);
  assert.ok(s.t / 60 >= 1.5, `too short: ${(s.t / 60).toFixed(1)} min`);
  assert.ok(s.t / 60 <= 8, `too long: ${(s.t / 60).toFixed(1)} min`);
});

test('every build archetype is viable (reaches at least 40% of the best build)', () => {
  const waves = Object.fromEntries(Object.keys(STRATEGIES).map((n) => [n, medianWave(n)]));
  const best = Math.max(...Object.values(waves));
  for (const [name, w] of Object.entries(waves)) {
    assert.ok(w >= 8, `${name} dies too early (wave ${w})`);
    assert.ok(w >= 0.4 * best, `${name} (${w}) is below 40% of best (${best}): ${JSON.stringify(waves)}`);
  }
});

test('meta progression: each prestige cycle should carry the player further', () => {
  let meta = emptyMeta();
  const waves = [];
  for (let run = 1; run <= 8; run++) {
    const s = simulateRun(meta, 'balanced', 100 + run);
    waves.push(s.wave);
    meta = spendMeta(endRun(s).meta);
  }
  assert.ok(waves[3] > waves[0] + 5, `run 4 should clearly beat run 1: ${waves}`);
  assert.ok(waves[7] > waves[3], `run 8 should beat run 4: ${waves}`);
});

test('meta purchases are validated and costed consistently', () => {
  const meta = { ...emptyMeta(), points: metaCost('power', 0) - 1 };
  assert.equal(buyMeta(meta, 'power'), null);
  const rich = { ...emptyMeta(), points: 100 };
  const after = buyMeta(rich, 'power');
  assert.equal(after.power, 1);
  assert.equal(after.points, 100 - metaCost('power', 0));
  assert.ok(pointsForWave(20) > pointsForWave(10));
});
