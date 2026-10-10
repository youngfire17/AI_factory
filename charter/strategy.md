# Strategy

## Thesis
Run **two tracks** that fund and inform each other, plus a lab that feeds both.

| Track | What | Why | Speed of signal | Ceiling |
|---|---|---|---|---|
| **A. Games studio** | Small, systems-driven games (idle/incremental, tower defense, card hybrids) published to browser + itch.io first, Steam for proven winners | Matches the owner's interest; AI is unusually strong at rules/economy/UI/test code; reusable engine lowers cost per game | Slow (weeks–months) | High if one game finds an audience |
| **B. Digital products & tools** | Marketplace-distributed products (e.g. custom escape-room kits on Etsy, seller tools) | Distribution already exists (marketplace search), buyers pay real money, fast "will a stranger pay?" signal | Fast (days–weeks) | Medium, can graduate to micro-SaaS |
| **Lab** | Market research, playtest/QA, compliance, analytics | Prevents building things nobody wants; keeps us inside platform rules | n/a | n/a |

Track B is the **cash-signal engine**; Track A is the **long-term asset engine**. We do not wait on A to learn about demand.

## Where I disagree with, or want to tighten, the source chat
1. **Free browser idle games rarely make money by themselves.** Ad revenue needs large traffic; itch.io browser games mostly earn via donations/sales from a small audience. Treat Track A browser releases as *distribution experiments and engine proofs*, and aim real revenue at: paid itch.io releases, Steam ($100 fee, small premium price), or a portal/ads deal only for a proven title.
2. **"Fully hands-off" is a direction, not a day-one state.** The owner's final testing is a deliberate gate, not a failure of automation.
3. **A portfolio of games does not diversify attention risk.** Ten undiscovered games earn about what one does. Depth of one good game beats breadth until a winner emerges.
4. **Mass-producing near-identical AI games is risky.** Steam's AI disclosure is [verified]; itch.io's AI tagging is [claimed] (news); the source chat's claim that itch.io restricts mass AI releases was **not found** on itch.io's creator FAQ. Our rule: each release must be distinct, curated, and owner-approved.
5. **Roblox** is a strong long-term channel (built-in discovery) but needs Roblox Studio/Lua tooling and a different QA pipeline. It is a Phase 3 option, not a first move.
6. **Clone risk:** the single-tower idle-defense format is dominated by an established title. Ours must differ in mechanics and presentation, and must not use its name, art, or trade dress.

## Sequencing (first 30 days; see `portfolio/bets/` for each)
| Week | Track A (games) | Track B (products) | Lab |
|---|---|---|---|
| 1 | B001 Last Tower Standing prototype **(done: playable, 8 sim tests)**; owner playtests | Verify escape-room demand claims (B002) before building | Verification queue #1–#6; policy check |
| 2 | Polish loop from owner feedback; itch.io page draft | Build B002 MVP generator + 3 sample kits (if verified) | Competitor teardown for B001 |
| 3 | Publish B001 (browser, free, optional tip); instrument | List B002 on Etsy (≤10 listings, ≤$5 fees) | Read first real metrics |
| 4 | Gate review: continue / pivot / kill | Gate review | Retro; update backlog scores |

## Capital policy
- Hard reserve: **never let cash fall below $250** until a bet has cleared Gate 4.
- Spend only through `node tools/portfolio.mjs spend` so the ledger and gates are enforced.
- Per-stage spend caps are in `stage-gates.md`.
