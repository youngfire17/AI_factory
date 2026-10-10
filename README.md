# AI Factory

An AI-run portfolio of small digital businesses, built from $500 of seed capital and a rule: **prove demand cheaply, stop spending on losers, reinvest in winners.**

```
charter/      mission, strategy, stage gates, policies     (the rules)
portfolio/    ledger.csv, bets/*.md, scoreboard.md         (the money and the bets)
labs/         market research, playtest/QA, compliance     (the evidence)
studios/      games/ (Track A) and, later, products/ tools (the production)
tools/        portfolio.mjs: ledger + spend-gate enforcement
.claude/      agents/ (staff) and skills/ (repeatable workflows)
docs/         source research (ChatGPT strategy transcript)
```

**Start here:** `charter/strategy.md`, then `node tools/portfolio.mjs status`.
**Play the first prototype:** `cd studios/games/last-tower-standing && npm run serve` → http://localhost:8080
**Run the tests:** `npm test` in the game dir; `node --test tools/portfolio.test.mjs`.

Nothing here has earned money yet. The first job is finding out whether strangers will play or pay.
