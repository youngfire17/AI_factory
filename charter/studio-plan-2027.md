# AI Studio Plan 2027: how we win
2026-10-12. Replaces the holiday-2026 push in `studio-launch-plan.md` (owner chose: no holiday rush; learn first, launch January 2027, build the Etsy catalogue toward holiday 2027). Built from ten briefs (`labs/market-research/briefs/2026-10-12-win-*.md` plus the studio, games and asset research). Tags: [verified] primary page read · [claimed] secondary/tracker/dev-reported · [assumed] ours.

## The thesis (how this becomes big)
Solo and tiny teams do turn games and apps into businesses. What the winners share is replicable: **a hook that clips well, a free or cheap way to try it, borrowed distribution (portals, creators, festivals, publishers), and many shots on goal.** An AI studio's structural edges are (1) **cost per shot** (agent cost ≈ $1.60–3 per asset [assumed]) so we can take far more shots, (2) **content depth no solo human can build**, validated by simulation (1,200-card decks, 2,000-item synergy pools, infinite verified puzzles), and (3) **tireless iteration and localization to 20+ languages**. The owner supplies the scarce thing AI lacks: **taste, accounts, outreach, and the final playtest.**
**Our growth formula:** (titles shipped per year) × (hit rate from quality gates) × (distribution leverage) × (reinvestment speed). Every lever below raises one factor.

## Engine A: Game studio (lead)
Pick plays that real tiny teams ran, adapted to AI-native strengths.
| Playbook (real precedent) | Our first concept (hooks are placeholders, chosen after owner playtests) | Path |
|---|---|---|
| **P1 free browser build → paid Steam only for a winner** (Roottrees: free itch build + personalised journalist pitches, passed $1M on Steam [verified on Zukowski]; Buckshot Roulette; Webfishing) | **Hexcraft Deck:** a roguelike deckbuilder with ~1,200 cards each balanced by 100k-run simulation. Strongest paid evidence: Balatro 5M+ copies; only ~8% of recent deckbuilders reach 1,000 reviews, mostly at $10+ [claimed] → we must be distinct and polished | itch browser demo → portals → Steam page for the winner |
| **P3 clip-able hook seeded to 10–20 small creators ~2 months pre-launch** (Lethal Company [verified], Buckshot, Webfishing) | A tense, short, clip-able game built around one 15-second moment; **agents capture clips automatically; the owner DMs creators (outreach is OK)** | itch/Steam |
| **P2 low-price twist on a proven genre + demo + festival** (Brotato: 40k wishlists from two festival demos [verified]; Vampire Survivors) | **Mutation Survivors:** survivors-like with 2,000 items, synergies checked by a nightly sim; price $3–5 | demo months before a festival |
| **P4 daily-seed shareable result** (Wordle, Quordle) | **Daily Cut:** solver-verified daily puzzle, share grid, 20+ languages; cheapest to ship in January | web, free + tips; weakest revenue evidence |
| P6 portfolio of small web games on portals (CrazyGames non-exclusive; Playgama) | 4–6 two-week arcade games with a shared hub | portals + HTML5 licensing |
| P5 idle with prestige layers | **Demoted:** 4,314 idle-tagged Steam games and a flood of near-identical AI ones [claimed]; keep one as a cheap test | free web |
**Stack:** TypeScript pure-sim core + Phaser (MIT, 40.5k stars [verified]) + Playwright headless tests; web via itch `butler`; Steam via Electron + steamworks.js; mobile via Capacitor later; Godot 4 as secondary for 3D/Steam-first. Art: code-made SVG/canvas + WebAudio synth ($0, no license risk), Kenney CC0 packs, paid private AI art only after a style test. Quality: a juice checklist with automated checks, bot/RL playtesters for balance and exploits, and a 6-question 5-minute owner playtest ("would you play a second run?") as the kill signal.

## Engine B: App factory (web/extension first, no store fees)
One monorepo, distinct apps (never template clones). Proven plays: ASO niche apps with AI localization (steady but small: $26–340/mo each verified; best claimed ~$1.5k) · **creator-led hard-paywall app timed to a platform event (the only $20k+ evidence: GoTall $58K MRR, Project A $63.6K MRR, both TrustMRR-verified, both used paid ads or creators)** · niche professional tool sold by outreach (web/Chrome/Mac, no store review). First 8 concepts are in `briefs/2026-10-12-win-simple-apps.md` (e.g. listing writer from a photo in 20 languages as a Chrome extension; one-document-type web checker; Mac niche-vocabulary dictation). Start with concepts that need no $99 account: web, extension, waitlist pages. Cap creator tests at $100 per concept; scale only when D14 revenue per install ≳ $2.3 (RevenueCat hard-paywall median [claimed]).

## Engine C: Etsy and digital products (built for holiday 2027)
Use 2027 as the learning-and-catalogue year. **Halloween mysteries listed by mid-July; Christmas by Aug 15; Christmas pins at full volume in September; stop adding core listings after Nov 15** [claimed seller timing]. Build the party-games line (escape rooms, murder mysteries, custom "child's-name" kits in 24 h), niche workbooks, and the Pinterest + email-sample machine (`studio-launch-plan.md`) during Feb–Jul. Open the Etsy shop in spring to learn fees, reviews and AI-disclosure in a low-pressure window.

## Engine D: Optional cash engine
Trades missed-call recovery (`charter/playbook.md`) runs in parallel if the owner wants faster cash and has hours.

## Borrowed distribution (the part that lifts the ceiling)
Ordered by cost and fit:
1. **Free portals** (CrazyGames non-exclusive, €100 payout minimum [verified]; Poki fit test ~3–5 days [verified]; Playgama 70–90% share [claimed]): $0, and they produce the retention data every pitch needs.
2. **HTML5 licensing marketplaces:** fastest cash; flat fees a few hundred to ~$5,000; one seller listed $550 non-exclusive / $1,400 exclusive [claimed]. **A single license could pay the Steam fee.**
3. **Publisher-funded tests:** Supersonic gives "promising" submissions a $300, 6-day test on their money (Android CPI under $0.25 good, $0.25–0.35 maybe [verified]); Kwalee's portal takes a video or prototype [verified]. Terms for Voodoo/Homa/Azur not verified.
4. **Creators and journalists (owner outreach):** 10–20 small creators per launch, personalised.
5. **Festivals:** Next Fest **Jun 14–21, 2027** (register by Apr 25) is our realistic first; Feb 22–Mar 1 (register by Jan 10) is a stretch [verified Steamworks, per growth brief].
6. **Own ads are a measurement tool, not a loop** (casual D30 ROAS 47% iOS / 15% Android [verified]; a Steam wishlist ≈ $1.10 in one solo case [verified]). Use publisher money to scale.

## Calendar (owner-paced)
| When | What |
|---|---|
| **Oct 12–Dec 20: runway** | Weeks 1–3: shared TS engine, test harness, clip capture, itch page templates. Then prototypes: Daily Cut, Hexcraft Deck, a third; app-factory scaffold; pitch kits. Owner opens itch.io account; plays prototypes (5-min checklist). Optional AI-permitted jam (Bound Jam / Spoopy Jam close Nov 1 [claimed]) |
| **Jan 2027: launch** | 3 browser games to itch + CrazyGames Basic + Playgama; Supersonic and Kwalee submissions with a 30–60 s gameplay video; HTML5 licensing outreach; first web/extension app. Decide on Feb Next Fest by Jan 10 (likely skip) |
| **Feb–Mar** | 30-day gates (200 players, 25% D1, 4-min median, a monetization signal); kill/rotate; weekly scoreboard |
| **Apr–Jun** | Winner gets a demo + Steam page (after fee decision); creator seeding ~2 months pre-festival; **Next Fest Jun 14–21**; Steam Summer Sale Jun 24–Jul 8 |
| **Feb–Jul** | Build the Etsy catalogue; open shop in spring |
| **Jul 15 / Aug 15** | List Halloween / Christmas Etsy items; **Sep** Pinterest full volume |
| **Aug 11** | GMTK jam starts (bans AI art/audio [verified]; only with code-made art) |

## Money: the tycoon shop (spend via `node tools/portfolio.mjs spend`)
Start: $500; **$250 reserve locked**; $250 deployable. Platform fees: Steam $100 [verified], Apple $99, Google $25 = $224, **nearly all deployable seed money**. So **fees are paid from early earnings** (licensing, portal share, tips, publisher tests, Etsy, optional service) or only when a title clears its gate. **Proposed rule (needs owner approval):** a platform entry fee ≤ $100 may be paid once a specific title clears G3 metrics, regardless of the per-bet cap; the reserve stays untouched. Upgrade order: licensing income → Steam fee for the winner → paid private art plan if needed → part-time VA ($5–11/h [claimed]) at ≥ $500/mo run-rate → contract artist/composer/QA → Apple/Google → UA tests with publisher money.

## How big (honest model, [assumed])
24-month run-rate: ~$70 worst · ~$1.6k base · ~$7.75k best (best needs a breakout plus the service engine); cumulative net ≈ $0.8k / $19k / $85k. At 0.5–1% breakout per title, 24 titles give ~11–21% chance of at least one. **To push above base: raise titles shipped, raise the quality-gate hit rate (sim-verified depth, clip-able hooks, owner taste gate), lean on publishers/portals/creators, reuse audience (email/Discord) across titles, port and localise winners, then reinvest into helpers and sequels.** Upside paths: a breakout title; a 30+ product catalogue; a small publishing/label brand; engine/tools licensing; SaaS spin-offs.

## What the owner does (1–2 h/day)
Play prototypes and answer the checklist · open/own accounts (itch.io now; Steam/Apple/Google later) · DM creators and pitch publishers (agents draft) · post to communities after reading rules · final playtest and publish. Agents do everything else.

## Staff (existing roster, grouped into squads)
Game squad (designer, systems-economy, content-level, engineer, engine-tools, artist, sound, QA/bots) · App squad (engineer, platform, store-copywriter, ASO via research) · Product squad (Etsy/pins: content-level, copywriter, release) · Growth/pitch squad (growth-lead, clip-producer, community-drafter, publisher kit) · Ops/Finance (producer, analytics-cfo, compliance, ip-privacy, asset-pipeline, post-mortem) · Red team before every gate.

## Evidence gaps (each has a way to close)
Revenue figures are mostly tracker/dev-reported; no verified AI-built Steam earner found → our first data beats all of it. Apple/Google/Voodoo/Homa terms unverified → submit and log responses. Etsy/Indie Hackers/Starter Story blocked to us → owner pastes or we find alternates.
