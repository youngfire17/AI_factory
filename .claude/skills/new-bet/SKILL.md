---
name: new-bet
description: Add a new opportunity to the portfolio as a G0 bet with a scorecard, evidence status, risks, and a first cheap test.
---
Create a bet from the idea `$ARGUMENTS`.

1. Pick the next id (`ls portfolio/bets`). Create `portfolio/bets/<id>-<slug>.md` with frontmatter (`id`, `name`, `track` A|B, `stage: G0`, `score`, `owner_approval: n/a`) matching existing bets.
2. Body: hook, buyer, channel, evidence status with tags, risks, gate-to-G1, draft acceptance criteria.
3. Score with the scorecard (cap Evidence at 3 unless [verified]); add a row to `labs/market-research/backlog.md`.
4. Add the specific claims to check to `labs/market-research/verification-queue.md`.
5. Run `node tools/portfolio.mjs status` to confirm it parses.
