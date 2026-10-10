# Games strategy (v1, 2026-10-10)

Synthesis of seven research briefs: `labs/market-research/briefs/2026-10-10-games-{steam,roblox,mobile,web-social,ai-capability,genre-economics,monetization}.md`. Tags: [verified] primary page read; [claimed] secondary/tracker/anecdote; [assumed] our estimate.

## 1. Bottom line (honest)
**No game genre or platform has verified, repeatable profit for a no-audience, AI-built, $500 operator.** What the evidence supports is a *staged program of cheap experiments* that starts where cost and risk are lowest (free browser builds on itch.io and one portal), measures real strangers, and only then spends on Steam. Steam hits (Balatro, Vampire Survivors, Brotato, Backpack Battles) are virality-driven survivors and are not a plan.

Two constraints decide most of the plan:
1. **AI cannot certify "fun."** Tests and bots can prove correctness and balance, not that a human enjoys it; that is the binding quality constraint (AI-capability brief). The owner's playtest stays a hard gate.
2. **Distribution is unsolved by building.** Every route to players needs either platform discovery, an audience, or paid acquisition. We start with routes that cost $0 and need no outreach.

## 2. Platform verdicts
| Platform | Verdict now | Key evidence |
|---|---|---|
| **itch.io (browser build + tip jar / $3–8 PWYW)** | **Start here.** $0, easy payout, measurable. Thin discovery | Fees [verified]: 10% default + 2.9% + $0.30. About 25 sales ≈ $100/mo. Browser-game incomes are tips-sized [claimed] |
| **CrazyGames (non-exclusive)** | **Second test.** Try after a build clears itch metrics | QA → Basic → Full Launch, €100 payout minimum, no exclusivity [verified]. Revenue per play unverified (~€1.20/1,000 plays circa 2018 [claimed]; $100/mo ≈ 30–100k plays) |
| Poki | Defer | Hand-picked, 5-year web-exclusive default, 50/50 only on Poki-sourced traffic, originality-gated AI policy [verified] |
| **Steam free-to-play (+ cosmetic DLC)** | **Later, only after web metrics clear.** | $100 app fee, recoupable at $1,000 [verified]. Only evidence: one solo idle F2P, $4,800 in 5 days [claimed]. AI-disclosed games reach 100+ reviews at ~55% the rate of others [claimed] |
| Steam premium | Not now | ~66% of 2025 releases < $1,000; median ≈ $249; top 1% ≈ 94% of revenue [claimed]. Need ~5k+ wishlists |
| Roblox | **Parked** (revisit with data) | Median payout ≈ $1.5k, top-100 avg ≈ $10.8M [claimed]; young audience conflicts with charter; first cash-out ≈ $114 [verified]. Strength: Studio MCP lets Claude Code write/run/playtest Luau [verified]; needs a desktop Studio |
| Mobile (iOS/Android) | **Not now** | Needs paid UA (D30 casual ROAS 15–47% [verified]); ~$124 store fees; Google new-account 12-tester rule conflicts with no-outreach [verified]. Later: Capacitor wrapper of a proven web game |
| Telegram tap-to-earn, crypto-games | **Never** | Trap (web-social brief) |

## 3. Genre ranking for a no-audience AI studio (analyst [assumed] scores /30)
| # | Genre | Score | Why |
|---|---|---:|---|
| 1 | **Idle / incremental** | 23 | Pure numbers: trivially sim-testable, low art. One F2P solo anecdote. Retention hook is the risk |
| 2 | **Daily-seed puzzle / word** | 21 | Highest AI-buildability (solvers, determinism), shareable result loop. Low Steam medians; mobile pool is incumbent-owned. Word-list licensing check needed |
| 3 | **Idle / roguelite tower defense** | 20 | Very sim-testable; real demand signals (Zero Stress King ≈ $160k [claimed], but daily players fell ~84% in 3 months) |
| 4 | Roguelike deckbuilder / card hybrid | 17 | Tag releases 143 (2024) → 224 (2025) → 316 YTD 2026 [verified, tracker]; only ~8% reach 1,000 reviews, mostly $10+ games |
| 5 | io / arcade | 17 | Portal-gated |
| 6 | Survivors-like | 16 | Trend has cooled; art-heavy |
| 7 | Auto-battler | 15 | Balance hard; streamer-driven |
| 8 | Tycoon / cozy, merge / hyper-casual | 14 | No verified small-team revenue; UA-gated |

## 4. Monetization ladder (cheapest first)
1. **Free browser play + tip jar/supporter pack** (itch.io). Learn real conversion. Net per $ is high, volume is the issue.
2. **Portal ad share** (CrazyGames, non-exclusive). Needs 30–100k plays/mo for $100 [assumed range]; only worth it for games that retain.
3. **Low-price premium on itch.io** ($3–8, pay-what-you-want).
4. **Steam F2P + cosmetic DLC** once a web build proves D1 ≥ 25% and a distinct hook.
5. **Premium Steam / mobile wrapper** only for a proven winner.
Hard rules: fictional currency only, no loot-box odds, no real-money gambling, nothing aimed at children, honest AI disclosure on every platform.

## 5. Experiment program (sprint lane; each ≤ 3 days of agent time, $0)
| ID | Game | Genre | Hypothesis | Metric (G3 thresholds) | Kill |
|---|---|---|---|---|---|
| X1 | **Strawberry Empire** (supply-chain idle; the original spark) | idle/incremental | Strangers will return to a decision-rich idle game | ≥ 200 players, D1 ≥ 25%, median session ≥ 4 min, any tip/purchase click | < 25% of thresholds after 30 days |
| X2 | **Last Tower Standing** (already prototyped; needs a differentiator vs the incumbent, polish, audio) | idle TD | Idle TD retains better than plain idle control | same | same |
| X3 | **Daily Seed** (one deterministic puzzle/day, shareable result string) | daily puzzle | Day-2 and day-7 returns happen without marketing | D2 return, D7 return, shares | D7 < 5% |
| X4 | Deckbuilder demo (20 min, one strong hook) | card hybrid | Retention beats the crowded-tag base rate | only after X1–X3 data | — |

Owner effort per experiment: ~15 min (create/own the itch.io account once; upload the zip; answer the 5-question playtest). Agents do the rest. We compare X1–X3 on identical metrics and **fund the winner**; the loser is archived with a post-mortem.

## 6. What must be true before we scale (gates)
- G3 metrics met for ≥ 14 days with real players (see `charter/stage-gates.md`).
- Owner playtest says "I'd play a 4th run" and "I'd pay $3".
- Clearance PASS; AI-disclosure text accurate per platform.
- Steam's $100 fee exceeds the G3 cap ($75): spending it needs owner approval at G4 (or an explicit charter change).

## 7. Known risks
- **AI disclosure may cut organic reach** (~55% of the review rate for AI-flagged Steam games [claimed]). Mitigation: genuine design differentiation; minimal visible AI art (players object to visible AI art more than to backend use).
- **Fun is untestable by bots**: design-critic heuristics + owner playtests only.
- **Evidence is mostly [claimed]**: many tracker pages (VG Insights, Gamalytic) were unreachable; first-hand data from our own experiments will beat all of it.
- **Idle genre saturation** (Idler tag: 940 releases 2025, 1,566 YTD 2026; 97.5% of sub-$5 idlers miss 1,000 reviews [claimed]).
