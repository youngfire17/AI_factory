import test from 'node:test';
import assert from 'node:assert/strict';
import { parseLedger, parseBet, summarize, checkSpend, RESERVE_USD } from './portfolio.mjs';

const ledger = parseLedger('date,bet,kind,amount_usd,note\n2026-10-10,CAPITAL,capital,500.00,opening\n2026-10-11,B001,spend,-10.00,domain\n');
const bets = [
  { id: 'B001', stage: 'G2', track: 'A', name: 'x' },
  { id: 'B002', stage: 'G1', track: 'B', name: 'y' },
  { id: 'B003', stage: 'G4', track: 'B', name: 'z' },
];

test('parses ledger and bet frontmatter', () => {
  assert.equal(ledger.length, 2);
  assert.equal(parseBet('---\nid: B9\nstage: G2\n---\nbody').stage, 'G2');
  assert.equal(parseBet('no frontmatter'), null);
});

test('summarizes cash and per-bet spend', () => {
  const s = summarize(ledger, bets);
  assert.equal(s.cash, 490);
  assert.equal(s.per.B001.spent, 10);
});

test('enforces stage caps', () => {
  const s = summarize(ledger, bets);
  assert.equal(checkSpend(s, 'B001', 15), null); // 10 + 15 = 25 = cap
  assert.match(checkSpend(s, 'B001', 15.01), /exceeds cap/);
  assert.match(checkSpend(s, 'B002', 1), /exceeds cap/); // G1 may not spend
});

test('enforces the cash reserve and rejects bad input', () => {
  const rich = summarize(parseLedger('date,bet,kind,amount_usd,note\n2026-10-10,CAPITAL,capital,260.00,x\n'), bets);
  assert.match(checkSpend(rich, 'B003', 20), /reserve/);
  assert.match(checkSpend(rich, 'NOPE', 1), /unknown bet/);
  assert.match(checkSpend(rich, 'B001', -5), /positive/);
  assert.equal(RESERVE_USD, 250);
});

test('G4 spending is a share of cash above the reserve', () => {
  const s = summarize(parseLedger('date,bet,kind,amount_usd,note\n2026-10-10,CAPITAL,capital,1250.00,x\n'), bets);
  assert.equal(checkSpend(s, 'B003', 250), null); // 25% of 1000
  assert.match(checkSpend(s, 'B003', 251), /exceeds cap/);
});
