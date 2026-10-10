---
id: B001
name: Last Tower Standing
track: A
stage: G2
score: 60
owner_approval: pending-playtest
---
# B001 — Last Tower Standing (idle tower defense)

**Hook:** one tower, endless waves, spend coins mid-run, bank research points on death, prestige loop with build variety.
**Buyer / player:** idle/incremental players; fans of single-tower idle defense who want a desktop-friendly browser version.
**Channel:** itch.io (browser build, free + optional tip/paid "supporter" pack), Reddit idle-game communities, short gameplay clips.
**Stage note:** Score 63 is below the G1 threshold (65). It is **fast-tracked to G2 at $0** as the *engine proof* for Track A: the cost of being wrong is only AI time. Spend stays capped at G2 ($25) and publishing requires owner approval at G3.

## Status
- Built: deterministic sim (`studios/games/last-tower-standing/src/sim.js`), canvas UI, save/load, 3x speed, meta-progression.
- Tests: `npm test` in the game dir (8 sim tests: determinism, termination, purchase rules, run-length bounds, build viability, prestige progression). Browser smoke test passes (play → die → research → redeploy → saved).
- Balance (bots, median wave, run 1): balanced 27, glass cannon 22, tank 13, economy 13, crit 12. First run ≈ 5 min for an optimal bot; humans will be slower.

## Acceptance criteria (G2 → G3)
1. Owner plays 3 runs and can state what makes a build *feel* different. If not, redesign upgrade choices before anything else.
2. No build archetype below 40% of the best (currently met; target ≥ 60% after tuning).
3. Distinct from the incumbent idle-defense title: own name, art, enemy designs, upgrade names, and at least one core mechanic not in it (**open: pick the differentiator**).
4. Visual polish pass (hit feedback, enemy variety, boss telegraph, sound).
5. Compliance pass on itch.io AI-content and tagging rules.

## Known weaknesses (honest list)
- Builds still ~2x apart; offense compounds faster than defense/economy.
- Only one enemy type, one tower, no sound, placeholder art.
- No evidence yet that anyone will play it. Metrics needed: D1 return, session length, wave reached.

## Kill criteria
Owner finds it unfun after tuning round 2, or soft-launch metrics < 25% of thresholds after 30 days.

## Research update (2026-10-10)
Score revised 63 → 60. Steam median ≈ $249–$1.7k; itch.io browser games mostly earn tips [claimed]. Genre has money only at the top. Keep as **engine proof**, do not lead the portfolio with it. See `labs/market-research/briefs/2026-10-10-landscape-research.md`.
