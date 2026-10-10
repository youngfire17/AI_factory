---
name: venture-review
description: Run a gate review on a bet — gather evidence, get a red-team memo, check policy, and produce a PROMOTE / CONTINUE / PIVOT / KILL recommendation with the exact owner ask.
---
Review bet `$ARGUMENTS` (an id like B002).

1. Read `charter/stage-gates.md`, `portfolio/bets/<id>-*.md`, relevant `labs/market-research/briefs/*`, and `node tools/portfolio.mjs status`.
2. List the evidence required for the *next* gate and mark each item met / unmet with its tag ([verified]/[claimed]/[assumed]).
3. Spawn `red-team-skeptic` on the bet; spawn `compliance-officer` if the next stage involves publishing or listing.
4. Re-score with the scorecard; update `labs/market-research/backlog.md`.
5. Output: recommendation, the 3 facts that decided it, the cheapest next test, and — if promotion needs owner approval — the exact approval being requested. Update the bet file's `stage`/`score` only after the owner approves a G3/G4 move.
