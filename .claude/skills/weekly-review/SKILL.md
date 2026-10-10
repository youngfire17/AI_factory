---
name: weekly-review
description: Weekly operating review — update the scoreboard from the ledger, compare metrics to gate thresholds, and decide the next action per active bet.
---
1. `node tools/portfolio.mjs status`; read active bet files and any new metrics the owner supplied.
2. Delegate to `analytics-cfo` to rewrite `portfolio/scoreboard.md` (cash, reserve, per-bet net, metric vs threshold, recommendation).
3. Delegate to `portfolio-strategist` for the ranked next actions (≤ 2 active bets per track).
4. Check kill criteria for every active bet; say explicitly which bets you would stop and why.
5. End with: what the owner needs to do this week (≤ 5 items, each with an estimated time).
