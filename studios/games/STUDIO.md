# AI Game Studio — how a game gets made

Headcount is not the point; **the handoff contracts are.** Every stage produces named artifacts, a named role signs them off, and a game cannot advance without them. The owner approves only at the marked gates.

## Two lanes
| Lane | Purpose | Cap | Output |
|---|---|---|---|
| **Sprint lane** | Cheap experiments to test demand/format: ≤ 3 calendar days, ≤ ~40 agent runs, $0 spend | many | a playable web build + one hypothesis + one metric |
| **Production lane** | A game we intend to ship and support | few (≤ 2 concurrent) | full pipeline below |

Sprint-lane games that clear their metric are promoted to the production lane; the rest are archived with a short post-mortem. **Never promote because the team likes it.**

## Production stages (map to `charter/stage-gates.md`)
| Stage | Gate | Lead role(s) | Required artifacts (in `studios/games/<game>/`) | Exit test |
|---|---|---|---|---|
| S0 Concept | G0 | genre-analyst, game-designer | one-sentence hook, target player, target platform | named closest incumbent + differentiator |
| S1 **Greenlight** | G1 (+owner sees summary) | research-analyst, genre-analyst, monetization-designer, growth-lead, red-team-skeptic, ip-privacy-reviewer | teardown brief, `MONETIZATION.md`, distribution plan (no cold outreach), clearance memo, budget | greenlight checklist below passes; red team ≠ KILL |
| S2 Pre-production | G2 | game-designer, systems-economy-designer, ux-onboarding-designer, art-audio-director, producer | `DESIGN.md`, `ECONOMY.md` (+ model script), `ONBOARDING.md`, `ART_BIBLE.md`, `TEST_PLAN.md`, acceptance criteria | economy model proves the curve; criteria are measurable |
| S3 Vertical slice | G2 | game-engineer, 2d-artist-animator, sound-designer, content-level-designer | 5 minutes of the real game at final quality | design-critic scores ≥ 3.5/5 on every rubric axis; bot report clean |
| S4 Production | G2 | all engineering, art, content roles | feature-complete build, `ASSETS.md`, `TELEMETRY.md`, `PLATFORM.md` | all tests green; no P0/P1 bugs |
| S5 Beta | **G3 ask** | balance-qa-engineer, playtest-bot-engineer, compatibility-accessibility-qa, producer | QA report, screenshots, balance report, owner playtest checklist answered | **owner playtest** ("would you play a 4th run / pay $3?") |
| S6 Soft launch | **G3** | release-manager, store-copywriter, clip-producer, community-drafter, telemetry-engineer | store page, disclosure text, clips, release checklist; **owner publishes** | metrics collected ≥ 14 days |
| S7 Live ops / scale | **G4** | live-ops-designer, analytics-cfo, growth-lead | weekly scoreboard, update plan | thresholds in stage-gates; otherwise → S8 |
| S8 Retire / post-mortem | — | post-mortem-analyst | `POSTMORTEM.md` + entry in `LESSONS.md` | lessons applied to the next greenlight |

## Greenlight checklist (all required for S1 → S2)
1. **Paid-demand evidence on the target platform**: named comparable titles with estimated revenue [verified/claimed], not just plays/followers.
2. **Differentiator** versus the 5 closest competitors, validated by reading their reviews.
3. **Distribution plan with no cold outreach**: where players find it (platform discovery, portal, search, shareable loop), with a first-test metric.
4. **Monetization plan** with minimum audience for $100 / $1,000 / month under stated assumptions.
5. **AI-buildability**: every system is simulation-testable; art need is within the pipeline's proven quality.
6. **Policy/IP clearance** and AI-disclosure plan per platform.
7. **Budget and kill metric** set in writing; red team memo attached.

## Definition of done (any game)
Deterministic sim tests · bot report with archetype spread · real-browser smoke + screenshots at 3 viewports · asset provenance complete · telemetry disclosed · clearance PASS · owner playtest answered. A game missing any item is not "done".

## Rules
- Reuse before build: new games start from the shared engine (`studios/engine/`, extracted only after a second game needs it).
- Distinct games only. No near-identical reskins; each release must differ in core mechanic or loop.
- Fictional currency only; no loot-box odds, no real-money gambling, nothing targeted at children.
- Scope is cut before dates move. The producer owns that call.
- Owner-only actions: accounts, agreements, publishing, payouts, payments (see `charter/policies.md`).
- `LESSONS.md` is read at every greenlight.
