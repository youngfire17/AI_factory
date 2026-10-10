#!/usr/bin/env node
// Portfolio ledger + gate enforcement.
//   node tools/portfolio.mjs status
//   node tools/portfolio.mjs spend <BET> <usd> "<note>"
//   node tools/portfolio.mjs revenue <BET> <usd> "<note>"
// Money in portfolio/ledger.csv: negative = spend, positive = revenue/capital.
import { readFileSync, appendFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

export const RESERVE_USD = 250;
// Cumulative spend caps per stage (charter/stage-gates.md). G4 is a % of free cash, handled below.
export const STAGE_CAPS = { G0: 0, G1: 0, G2: 25, G3: 75 };
export const G4_SHARE = 0.25;

export function parseLedger(text) {
  const [head, ...rows] = text.trim().split('\n');
  const cols = head.split(',');
  return rows.filter(Boolean).map((line) => {
    const parts = line.split(',');
    const row = {};
    cols.forEach((c, i) => { row[c] = i === cols.length - 1 ? parts.slice(i).join(',') : parts[i]; });
    row.amount_usd = Number(row.amount_usd);
    return row;
  });
}

export function parseBet(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return null;
  const bet = {};
  for (const line of m[1].split('\n')) {
    const i = line.indexOf(':');
    if (i > 0) bet[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  }
  return bet;
}

export function summarize(ledger, bets) {
  const cash = ledger.reduce((s, r) => s + r.amount_usd, 0);
  const per = Object.fromEntries(bets.map((b) => [b.id, { ...b, spent: 0, revenue: 0 }]));
  for (const r of ledger) {
    const p = per[r.bet];
    if (!p) continue;
    if (r.amount_usd < 0) p.spent += -r.amount_usd;
    else p.revenue += r.amount_usd;
  }
  return { cash, per };
}

// Returns null if the spend is allowed, otherwise a human-readable reason.
export function checkSpend({ cash, per }, betId, usd) {
  const bet = per[betId];
  if (!bet) return `unknown bet ${betId}`;
  if (!(usd > 0)) return 'amount must be positive';
  if (bet.stage === 'RETIRED') return `${betId} is retired`;
  if (cash - usd < RESERVE_USD) return `would breach the $${RESERVE_USD} reserve (cash $${cash.toFixed(2)} → $${(cash - usd).toFixed(2)})`;
  const cap = bet.stage === 'G4' ? Math.max(0, (cash - RESERVE_USD) * G4_SHARE) : STAGE_CAPS[bet.stage];
  if (cap === undefined) return `unknown stage ${bet.stage}`;
  if (bet.spent + usd > cap) return `${betId} at ${bet.stage}: cumulative spend $${(bet.spent + usd).toFixed(2)} exceeds cap $${cap.toFixed(2)}`;
  return null;
}

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const ledgerPath = join(root, 'portfolio', 'ledger.csv');
const betsDir = join(root, 'portfolio', 'bets');

function load() {
  const ledger = parseLedger(readFileSync(ledgerPath, 'utf8'));
  const bets = readdirSync(betsDir).filter((f) => f.endsWith('.md')).map((f) => parseBet(readFileSync(join(betsDir, f), 'utf8'))).filter(Boolean);
  return summarize(ledger, bets);
}

function status() {
  const sum = load();
  const free = sum.cash - RESERVE_USD;
  console.log(`Cash: $${sum.cash.toFixed(2)}   Reserve: $${RESERVE_USD}   Deployable: $${Math.max(0, free).toFixed(2)}\n`);
  console.log('Bet    Stage  Track  Spent    Revenue  Net      Name');
  for (const b of Object.values(sum.per)) {
    console.log(`${b.id.padEnd(6)} ${b.stage.padEnd(6)} ${String(b.track).padEnd(6)} $${b.spent.toFixed(2).padStart(6)}  $${b.revenue.toFixed(2).padStart(6)}  ${(b.revenue - b.spent >= 0 ? '+' : '-') + '$' + Math.abs(b.revenue - b.spent).toFixed(2).padStart(6)}  ${b.name}`);
  }
}

function record(kind, betId, usd, note) {
  const sum = load();
  const amount = Number(usd);
  if (kind === 'spend') {
    const why = checkSpend(sum, betId, amount);
    if (why) { console.error(`REFUSED: ${why}`); process.exit(1); }
  } else if (!sum.per[betId] || !(amount > 0)) {
    console.error('REFUSED: unknown bet or bad amount');
    process.exit(1);
  }
  const date = new Date().toISOString().slice(0, 10);
  const signed = kind === 'spend' ? -amount : amount;
  appendFileSync(ledgerPath, `${date},${betId},${kind},${signed.toFixed(2)},${String(note ?? '').replace(/[\n,]/g, ' ')}\n`);
  console.log(`recorded ${kind} $${amount.toFixed(2)} on ${betId}`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const [cmd, a, b, c] = process.argv.slice(2);
  if (cmd === 'status' || !cmd) status();
  else if (cmd === 'spend' || cmd === 'revenue') record(cmd, a, b, c);
  else { console.error('usage: status | spend <BET> <usd> "<note>" | revenue <BET> <usd> "<note>"'); process.exit(2); }
}
