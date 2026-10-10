# AI Studio: Wave 1 launch plan ("Opening Day")
2026-10-10. Built from the five studio briefs (`labs/market-research/briefs/2026-10-10-studio-*.md`) plus the asset and games research. Mindset: every obstacle gets an answer. Tags: [verified] primary page read · [claimed] secondary · [assumed] ours.

## The idea in one paragraph
Run the studio like a tycoon opening: open several cheap "buildings" at once, each in a marketplace that already has buyers, let real strangers tell us which ones earn, and pour all profit into the winners. AI agents produce and QA; the owner publishes (~45 min/day, ~5 h/week [claimed by ops brief]). Expect $0–$300/month early; the value of Wave 1 is *knowing which buildings earn*.

## Wave 1 portfolio (≈ 40+ assets, ≈ $10–20 cash [assumed])
| # | Building | What ships | Where | Price | Why it can work | Kill rule |
|---|---|---|---|---|---|---|
| 1 | **Party-games shop** (Etsy) | 12 SKUs + 1 custom: kids' Christmas + evergreen escape rooms in 3 difficulty tiers ($9.50 each / $24 3-pack); a Christmas/NYE murder mystery for 8–12 players ($24.99); **"custom escape room with your child's name" in 24 h ($19–25)** | Etsy + Pinterest + free sample for email | $9.50–$25 | Shops in this niche show 2.4k–6.8k lifetime sales (murder mystery) and 772 (escape room) [claimed, undated]; the only custom competitor takes 7–10 days; AI makes 24-hour personalization possible | < 3 stranger sales and < 1% conversion on 500+ views by **2026-12-20** |
| 2 | **Niche formula workbooks** (Etsy + Payhip) | 20–24 workbooks across 3 niches, built only where listings < 12 months old show 20+ reviews | Etsy, Payhip | $12–19 | Cheap to produce, no IP risk, solver/formula-testable | no stranger sale in a niche by day 60 |
| 3 | **Games portfolio** (sprint lane) | 6 small web games: idle, idle tower defense (the existing prototype becomes game #1), daily-seed puzzle, CrazyGames-style arcade, one AI-friendly jam game, a GM tool | itch.io (scripted uploads), CrazyGames non-exclusive, Playgama | free + tips / supporter pack | Cost is agent time; portfolio gives conversion data and one winner; procedural art/audio sidesteps AI-jam bans | per-game gates: 200 players, 25% D1, 4 min median, a monetization signal |
| 4 | **Game-dev asset packs** (code-first) | editor tools, shaders, procedural tilesets | itch.io, then Unity/Fab | $5–25 | free to list; AI allowed with disclosure (itch.io, Unity [verified]) | no stranger sale by day 60 |
| 5 | **Optional cash engine** | Trades missed-call recovery (`charter/playbook.md`) | local | $99–199/mo | recurring revenue; runs in parallel if hours allow | per playbook |

Deferred / excluded: TpT (from 2027-01-01 its Exclusive tier blocks selling educational digital items elsewhere; Basic is 55% payout) · Canva, Shutterstock, Envato, DriveThruRPG text (restrict AI) · KDP book mills, Merch · Steam (last; AI-flagged games reportedly get ~half the reviews [claimed]) · mobile, Roblox.

## How each obstacle is answered
| Obstacle | Answer |
|---|---|
| No audience | Marketplace search (Etsy, itch.io) + **Pinterest 1–5 fresh pins/day** + a **free sample kit → email list** (MailerLite free: 250 subs [verified]) — the list is the owned asset that compounds |
| Low prices ($5–12) | Bundles ($24 3-pack), custom orders ($19–25), higher-ticket murder mystery; ads only on $15+ bundles (a $5 item needs ~8% conversion to break even on a $0.35 CPC [assumed calc]) |
| AI slop / AI-disclosure reach penalty | Genuine design: solver-verified puzzles, original themes, human-curated; disclose per platform; code-made art and procedural audio; no mass near-duplicates |
| Etsy API/automation uncertain | Agents prepare complete **listing packs**; owner pastes and publishes. Scriptable where allowed: itch.io `butler`, Chrome Web Store [verified] |
| Image licensing | Free plans of several generators give no commercial rights (Recraft [verified]) → sell designed systems with **code-made art**, or buy one paid private plan if needed |
| Seasonality | Calendar: Christmas/NYE **now**; Valentine's/date-night late Nov–Dec; Easter mid-Jan; spring birthdays Feb–Mar; summer/camp Apr–May; back-to-school/Halloween 2027 Jun–Jul [claimed] |
| Most listings earn $0 | Volume + fast kill: ship ~40 assets, measure, drop losers at 60 days, double the winning niche (more SKUs, bundles, seasonal variants) |
| Etsy AI rule (disclosure + seller as creative force) | Original prompts and our own puzzle design; label per Etsy's rule; owner saves the primary policy text into the repo (pages blocked to us) |

## Economics (all [assumed] unless noted)
Net per $12 Etsy sale ≈ $10.45 → **10 sales = $100/mo; 48 = $500; 96 = $1,000.** Many-asset math at ~$4 net per asset per month: 25 assets = $100, 125 = $500, 250 = $1,000. Realistic year-one for the party-games shop: $100–$300/mo. Token cost ≈ $1.60–3 per asset.

## The assembly line (agents → owner)
research → product design (puzzle + solver validation) → code-made art + PDF layout → QA (solvability, proofread, print check Letter/A4) → listing pack (title/tags/description/AI-disclosure/mockups) → pins + email sample → **owner publishes** → analytics-cfo logs results. Existing staff cover it: content-level-designer, game-designer, 2d-artist-animator, compatibility-accessibility-qa, store-copywriter, release-manager, growth-lead, analytics-cfo, compliance-officer.

## Owner-only steps and time
Open the Etsy shop (identity, bank, tax) · create itch.io account + payout · Pinterest and MailerLite accounts · paste the Etsy / TpT / Adobe / Canva AI-policy pages into `labs/compliance/` (pages block automated access) · print one sample kit at home · publish listings (~45 min/day) · post to communities after reading each sidebar. About 1–1.5 h/day.

## Calendar (proposed, needs owner go-ahead)
- **Oct 10–14:** accounts opened; policy pages pasted; 20 Etsy searches logged; agents build kit #1 end to end and time the publish step.
- **By ~Oct 24:** Christmas/NYE kits live (12 SKUs + 1 custom). Late versus seller advice of early September, but buying peaks Nov–early Dec [claimed]; expect a thin first season.
- **Week 2–4:** workbooks; first 3 games to itch.io; CrazyGames Basic Launch (needs ~500 plays); jam game only if an AI-permitted jam is open.
- **Dec 20:** first gate review: continue/kill/double per bet.

## Spend and gates
Planned cash ≈ $10–20 (Etsy listing fees ≈ $0.20 each). The charter caps unverified (G1) bets at $0, so **Wave 1 needs an explicit owner exception: a $50 total cap for the batch**, because the demand test *is* the missing evidence. Any ad test ($25–50) is a separate exception. Reserve $250 stays locked. Reinvest 100%: first upgrades are a paid private image plan only if needed, more SKUs in the winning niche, Etsy Ads on $15+ bundles once conversion ≥ ~3.6%, and a part-time VA (~$6–12/h [claimed]) to publish and schedule pins, which lifts the owner-time cap.

## Honest risks (and the fix attached to each)
Demand evidence is snippets, not sales data → Wave 1 is the test. Etsy blocks our fetches → owner supplies the pages. Late Christmas → seasonal calendar plus evergreen SKUs. New Etsy shops may face identity/payout holds [unverified] → open the shop immediately. AI backlash → quality bar, disclosure, human curation.
