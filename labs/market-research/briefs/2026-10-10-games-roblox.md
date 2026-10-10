# Roblox: can an AI-built, no-audience operator earn? (2026-10-10)

Retrieval date for all links: 2026-10-10. Tags: [verified] = read on a primary page; [claimed] = secondary or search-snippet only; [assumed] = my estimate. Page reads were done through a summarising fetch tool, so "verified" means the summary of the primary page, not a manual read.

## 1. Key findings

| # | Finding | Tag | Source |
|---|---|---|---|
| 1 | DevEx standard rate: $0.0038 per Earned Robux (30,000 R$ = $114). Higher rate $0.0054 only for purchases by US players verified 18+ in eligible games (launched June 2026). Minimum 30,000 Earned Robux; one cash-out per month. Owner needs age 13+, verified email, W-9/W-8. | [verified] | create.roblox.com/docs/production/monetization/developer-exchange; Q2-26 shareholder letter (higher-rate launch) |
| 2 | Roblox's cut on in-experience purchases (commonly stated as 30%, so creator ~70% gross before the DevEx conversion) could not be verified. The fees page I read covered only avatar-item commissions (creator 30%, game owner 40%). | Could not verify; 30% is [claimed] | marketplace-fees-and-commissions page |
| 3 | Payout types that exist: Robux sales (passes, products), subscriptions, private servers, Roblox Plus/Premium-linked earnings, immersive ads. No percentages on the page I read. | [verified] existence, no rates | create.roblox.com/docs/production/monetization |
| 4 | Total creator earnings: $1,503.1M in 2025 (up from $922.8M in 2024); 35,500+ DevEx-registered creators at end 2025. | [verified] (SEC ARS, via search summary) | sec.gov ARS FY2025 |
| 5 | Q2-26 DevEx fees $363M (+15% YoY), 23% of bookings. Bookings $1,557M (+8%), DAU 123M. Q3-26 bookings guided DOWN 14-18% YoY; management cites younger users shifting to lower-monetizing games and a retention-favouring recommendation change. | [verified] | sec.gov Q2-26 8-K ex99.1 |
| 6 | Earnings concentration, 12 months to 30 Jun 2026: total ~$1.7B; median DevEx developer ~$1,500; top 1,000 average $1.4M; top 100 average $10.8M; top 10 average $65.7M; 42,000+ DevEx creators. One report of the Sept 2026 RDC. | [claimed] (single secondary report) | says.com article, 14 Sep 2026 |
| 7 | Prior year (Jun 2024-Jul 2025): median $1,440; top 1,000 avg $980K; top 100 avg ~$7M; top 10 avg $38.5M. | [claimed] | gamedevreports.substack.com |
| 8 | Caveat on the median: it covers DevEx-enrolled creators only. The share of all published experiences earning anything is not published in anything I found. Could not verify. | Could not verify | n/a |
| 9 | Discovery: ranking uses play-through rate, first-play bounce, play days, playtime per user (capped 60 min/day), co-play, spend days, Robux spent. Signals are per-user averages, so small engaged games are not penalised. Evaluated on D1, D2-7, D8-28. Retention first, monetization second. Roblox moved to a 28-day retention view. | [verified] | create.roblox.com/docs/discovery-faq; about.roblox.com newsroom 2026/06 |
| 10 | Cold start: retrieval needs only "a very low minimum number of plays from any source" (no number given); new games are tested with small cohorts daily and are not penalised for a weak start. Ad-acquired users are excluded from recommendation signals (ads buy plays, not ranking). | [verified] (stated policy, not independently measured) | discovery-faq |
| 11 | Roblox Ads: sponsor a game on Home and search. Objectives are Plays, Earnings (limited), Engagement. Auto-bidding with daily or lifetime budget. Reports cost per play. First card charge is $5; card billing needs age 18+. Docs give no CPM/CPP rates and no minimum budget. Near-clone games may get no ad spend or lower rank. | [verified] mechanics; price **could not verify** | create.roblox.com/docs/production/promotion/ads-manager |
| 12 | AI tooling: Studio has a built-in MCP server. Claude Code, Codex, Cursor and Gemini CLI connect. Tools: script read/edit, execute_luau (Edit/Client/Server), start/stop play, console output, screenshot, simulated keyboard/mouse/character navigation, generate_mesh, generate_material, procedural models, asset search/insert, and a `playtest` subagent. The server runs locally over stdio and needs a running desktop Studio session (no headless mode documented). | [verified] | create.roblox.com/docs/studio/mcp |
| 13 | Roblox Studio "going agentic" (Apr 2026): Planning Mode, playtest subagent, mesh generation in beta. Cube is open-source 3D; full "4D" scripted objects are not shipped. | [claimed] (search summary of newsroom/TechCrunch) | about.roblox.com/newsroom/2026/04/roblox-studio-going-agentic |
| 14 | Paid random items (capsules, luck boosts, pity systems) must show every outcome with numeric odds summing to 100%. Applies if priced in Robux or Robux-bought currency. | [verified] (search summary of policy page) | create.roblox.com/docs/production/monetization/paid-random-items |
| 15 | Age/ID: chat requires an age check worldwide (Jan 2026; six age bands). Roblox Kids (5-8) and Select (9-15) accounts exist (Apr-Jun 2026). To reach Kids/Select a creator must be age/ID verified, use 2-step verification, hold Plus/Premium for 2 months or pay a refundable fee, and pass a trial (250 unique plays by highly engaged age-checked players in 60 days). 16+ experiences need verification plus the Maturity & Compliance Questionnaire. | [verified] (Kids/Select page); [claimed] (chat rule, press summary) | create.roblox.com/docs/production/publishing/kids-and-select; nasdaq.com press release 2026-01-07 |

## 2. Case studies (all are survivorship-biased; hits only)

| Game | Genre | Team / build time | Scale | Traction mechanism | Tag |
|---|---|---|---|---|---|
| Grow a Garden (Mar 2025) | Idle farming, persistent offline growth | Original by one 16-year-old, "a few days". Taken over by Splitting Point Studios, ~12 of its 19 devs on it (per games.gg). | ~500 CCU to ~100K in 2 weeks, ~1M in a month. Peak ~22M (Aug 2025). No revenue figure found. | Weekly live updates, a big studio's marketing, TikTok presence of the lead (12M followers). Not a cold start. | [claimed] (gamesbeat interview, Wikipedia, games.gg); peak figures differ by source |
| Steal a Brainrot (May 2025) | Steal/collect, meme theme | Developer "SpyderSammy"; DoBig Studios owns it. Team size and build time not found. | Peak ~25M CCU (Oct 2025). One secondary source says ~215K now (a 99% fall). No revenue figure. | Organic TikTok/YouTube clips, event and "admin war" cross-promotion with Grow a Garden. | [claimed] (Wikipedia, rowatcher) |
| Solo/teen small hits (tycoon, obby, tower defense) | n/a | I found **no verifiable postmortem** with team size, time and revenue. | n/a | n/a | Could not verify |

Reading: the two famous 2025 hits share a meme-friendly theme, social-video virality and (for Grow a Garden) an established studio taking over a game that had already started to catch on. Neither shows that an unknown operator's AI-built game gets discovered. The thin evidence on small-team economics is the finding.

## 3. Verdict: **WEAKENS** (for a $500, no-audience, AI-only Roblox bet; not a kill)

- **Payout structure:** the headline pool is large ($1.5B in 2025) and growing, but the pool is extremely top-heavy. The reported median DevEx developer made ~$1.5K a year, and that median excludes the many creators who never reach DevEx. [claimed] for the 2026 figures. Top 100 average ~$10.8M against a median ~$1.5K is a ~7,000x ratio. [assumed] our expected outcome is near the median or below it, with a long tail of $0.
- **Time to first dollar:** Robux must reach 30,000 Earned Robux (~$114) before the first DevEx, which also needs W-9/W-8 and an owner account. Cash is slow. [verified] for the threshold. [assumed] it is plausible a typical game never reaches it.
- **Discovery:** the stated algorithm is fair to small games on paper (per-user averages, daily tests). But it ranks on retention, play days and playtime. These are the things AI cannot guarantee ("is it fun"). Ads buy plays but excluded from ranking signals, and ad prices are unpublished, so we cannot budget. A $500 total is tiny against unknown CPP. [assumed]
- **Platform headwinds:** Roblox's own guidance shows bookings falling in Q3-26 and monetization softening among younger users. [verified] Safety and age-gating changes add creator friction: Kids/Select reach needs ID verification, a subscription or fee, and a 250 engaged-play trial.
- **AI feasibility is the genuine strength:** Studio's MCP lets a coding agent write Luau, run it on client or server, enter play mode, read logs, take screenshots and simulate input, and generate meshes and materials. [verified] That is a better agent-test loop than most engines. Limits: it requires a desktop Studio instance running on the owner's machine (the owner or a VM is in the loop), and there is no documented headless CI. [verified] stdio-local; headless status not found. Rojo or other external tooling was not researched. Marked unresolved.
- **Policy fit with our charter:** `policies.md` says do not target children under 13 and no ads targeted at children. Roblox's audience skews young. A default Roblox game is a game children will play. Compliance review needed before any G1; this alone may conflict with the charter. Loot/gacha mechanics common to hits require odds disclosure and clash with the "no dark patterns / no gambling-like mechanics" policy. [verified] policy text. Copy-style games risk lower ranking or ad refusal (Ads Manager text).
- **Versus Steam/web/mobile:** [assumed], not researched here: Roblox has built-in distribution and no store fee to list, but a spiky, winner-take-most market. Others are covered in separate lane briefs.

**Plausible shapes, if tested at all:** low-art, systems-heavy loops that AI can iterate weekly (idle/incremental, farm/collect, simple tycoon, tower defence), launched with frequent updates. Weak shapes: anything needing social virality, licensed memes (trademark/IP risk), or heavy 3D polish.

## 4. What would change my mind
- A verified postmortem (or DevForum thread with analytics screenshots) of 3+ games by solo/unknown creators that reached 30,000 Earned Robux within 90 days with no existing audience.
- Published Roblox Ads CPP for a Plays campaign that, with a 5-10% D1-retained cohort, implies acquisition cost below expected per-player Robux earnings.
- Roblox data on the share of all published experiences, not just DevEx creators, that earn anything.
- Compliance confirming a policy-compatible design (no gacha, 13+ and ID-verified audience route) is possible under `policies.md`.

## 5. Next cheapest test ($0, ~1-2 weeks of agent time)
Pick one tiny design (e.g. idle/collect loop with no random-paid items). Agent builds it through Studio MCP with scripted playtests. Owner (account, 2FA, age verification and Maturity Questionnaire are owner-only) publishes it as 16+/unpaid with no ads. Measure over 14 days from Creator Analytics: Home-recommendation impressions, D1/D7 retention, average playtime. Gate: do impressions appear without ads, and is D1 above ~20-25%? [assumed] threshold; the charter's 25% D1 is for browser games. Spend $0; add an ad test (owner pays by Robux-credit or card) only if organic retention clears.

## 6. Unresolved
- Platform's cut on passes/products and subscriptions (not verified from a primary page). Engagement-payout (Premium) formula.
- Share of experiences earning anything; the 2026 distribution beyond one secondary report.
- Roblox Ads price per play; any minimum budget.
- Team size and build time of Steal a Brainrot; revenue of either hit.
- Rojo/headless/TestService workflow, mesh-generation quality, and whether AI-generated assets carry disclosure rules.
- Whether 16+ only distribution (needed to avoid child targeting) leaves enough audience.

## Sources
- https://create.roblox.com/docs/production/monetization/developer-exchange
- https://create.roblox.com/docs/production/monetization
- https://create.roblox.com/docs/production/monetization/marketplace-fees-and-commissions
- https://create.roblox.com/docs/production/monetization/paid-random-items
- https://create.roblox.com/docs/discovery-faq
- https://create.roblox.com/docs/production/promotion/ads-manager
- https://create.roblox.com/docs/studio/mcp
- https://create.roblox.com/docs/production/publishing/kids-and-select
- https://www.sec.gov/Archives/edgar/data/0001315098/000162828026051059/ex991-robloxq22026earnin.htm
- https://www.sec.gov/Archives/edgar/data/1315098/000110465926044380/rblx-20251231xars.pdf
- https://about.roblox.com/newsroom/2026/04/roblox-studio-going-agentic
- https://about.roblox.com/newsroom/2026/06/optimizing-discovery-great-games-reach-millions-players-roblox
- https://www.nasdaq.com/press-release/roblox-requires-users-worldwide-age-check-access-chat-2026-01-07
- https://says.com/my/tech/roblox-creators-earn-1-7-billion-developer-payouts
- https://gamedevreports.substack.com/p/roblox-top-100-roblox-developers
- https://gamesbeat.com/janzen-madsen-interview/
- https://en.wikipedia.org/wiki/Grow_a_Garden
- https://en.wikipedia.org/wiki/Steal_a_Brainrot
- https://rowatcher.com/news/is-the-brainrot-trend-dying-what-ccu-data-from-three-top-games-reveals
