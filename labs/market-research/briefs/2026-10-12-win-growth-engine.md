# Brief: The studio growth engine and the 2027 calendar
Date: 2026-10-12. Analyst: research-analyst. Scope: $500 start, reinvest everything, 1-2 h/day owner, public launch Jan 2027, Etsy party-games catalogue built through 2027 for holiday 2027.
Tags: **[verified]** = read on a primary/named page 2026-10-12 (URL in Sources); **[claimed]** = secondary, or seen only in a search summary; **[assumed]** = my estimate. Not verified: anything marked "could not verify". Hand-computed arithmetic (no code tool); check in a spreadsheet.

## 1. How small studios and portfolios compounded (trajectory cases)
| Case | What happened, with timing | Compounding mechanism | Tag |
|---|---|---|---|
| Pieter Levels (solo portfolio) | 2014 "12 startups in 12 months"; Nomad List launched 2014, about his 7th attempt. His own page: 2019 revenue about $20-40k/mo; a post title says 4 years to $1M/yr across Nomad List + Remote OK. Peak $420k/mo (Sep 2024), $202k in 2015, $52.8k/mo Feb 2018 | One dev, one shared stack, no hires; one community/audience reused by the next product; many cheap shots, keep the one that sticks | [verified] 2014 launch, 2019 range, "4 years to $1M"; [claimed] 2015, 2018, 2024 figures (compiled timelines) |
| Voodoo (publisher) | Founded 2013; two failed games (2014 quiz, 2015 arcade); pivot to hyper-casual 2015; Paper.io 2016 hit; 80 staff 2017; Goldman $200M May 2018; revenue $674M (2024), $778M (2025) | Weekly prototypes, hundreds scrapped per hit; cheap CPI tests decide what gets UA money; from 2017 publishes other studios | [verified] funding/revenue (Sacra page); [claimed] staff counts, download totals |
| Poncle (Vampire Survivors) | Solo dev nearly quit; sold over 1M copies in 2-3 months; 27M players. By Apr 2026: studios in Japan and Italy, goal 40 parallel projects in 5 years, engine licensed for "Survivors" games, DLC deals; third-party publishing paused | One hit funds many small teams (5-15 people), reuses engine, licenses IP and DLC | [verified] (thegamebusiness, 2026-04-22); company has not disclosed revenue |
| Blobfish (Brotato) | One-person studio, $5 game, over 2M Steam copies (press release); mobile port by Erabit (Mar 2023); post-launch dev moved to Evil Empire (Sep 2025). Third-party revenue estimates for the same game differ 3x ($12.6M vs $42.6M) | Low price, outsourced ports and live support instead of hiring | [claimed] all; estimators disagree, so use no revenue number |
| Habby (Archero, Survivor.io) | Archero about $200M lifetime; Survivor.io $75M and 37M downloads in 2 months (Aug 2022), half of UA on TikTok micro-influencers | Shared studio and know-how across titles; UA funded by the prior hit | [claimed] (AppMagic-based press) |
| Indie app-factory headlines | "30-app portfolio at $22k MRR in under a year"; "$185k/mo portfolio"; "$10k/mo portfolio in a year" | Volume of small apps, one template | [claimed] headlines only; interviews not read (Indie Hackers blocked fetch). Survivorship bias |
| Base rate (Steam) | 2025 median revenue per game $318; 65.9% earned under $1,000; 2.99% reached 1,000 reviews | The hit rate is the reason to run a portfolio | [claimed] (Gamalytic/Zukowski via secondary sites) |

**What the cases say.** (1) Every case that scaled ran many cheap shots first and let the market pick the winner; none went straight to a big bet. (2) The big step came from one outlier (Paper.io, Vampire Survivors, Brotato, Nomad List), then reinvested in more small teams, a shared engine and outsourcing. (3) Time to the first $1k/mo and to the first hire: **could not verify** for any case with a primary source. (4) Nobody on this list documents a $500 start; treat them as ceilings and mechanisms, not forecasts.

## 2. The reinvestment loops (each with a model; all inputs [assumed] unless tagged)
| Loop | Model | Turns on when | Status |
|---|---|---|---|
| (a) Back catalogue | Income = titles x net per title/mo. Etsy $3/SKU/mo base (repo working figure is about $4 [assumed]); games $8/title/mo. Cost per Etsy SKU: tokens $1.60-3 (repo [assumed]) + $0.20 listing + owner 15 min (about $3.75 at $15/h) = about $6, so payback about 2 months at base, 8 months worst ($0.75/SKU) | Day 1. The first loop to run | Core engine |
| (b) UA ($1 in, $1.2 out by D90) | Needs CPI <= LTV90/1.2. Example: ARPDAU $0.05, retention D1 25%/D7 10%/D30 4%/D90 1.5% gives about 5 active days in 90, LTV90 about $0.26, so CPI must be <= about $0.21. Benchmarks: casual D30 ROAS 47% iOS, 15% Android (2024) [claimed, Rocketship citing Liftoff/Singular]. Etsy Ads: a $15 bundle with $0.35 CPC needs about 3.3-3.6% conversion for 1.2x | Only after a title shows ARPDAU >= $0.10 and D7 >= 10%, or an Etsy bundle converts >= 3.6%. Test with $25-50 caps | Off until proven. Tiny tests only |
| (c) Audience (email/Discord) | Free sample kit on every listing and pin; assume 3% of visitors opt in, $0 cash cost, value $0.30/subscriber/mo (vendor rule of thumb is $1 for ecommerce [claimed]). 1,000 subscribers = about $300/mo | Day 1; owned asset that outlives marketplace rules. Free MailerLite tier is small (repo: 250 subs) | Core, cheap |
| (d) Cross-promotion | Every game and PDF links to siblings. 12 titles x 1,000 plays x 2% click = 240 clicks/mo. Worth little below about 10k plays/title/mo | Month 6+, once any title has traffic | Cheap add-on |
| (e) Engine reuse | One template for puzzle solver, PDF layout, listing pack, game shell. Agent hours per title fall from about 40 (#1) to about 10 (#6); owner hours from about 10 to about 3 | Each title after the first | Core. Track it |
| (f) Hiring/outsourcing | VA: $5-11/h Philippines (HireTalent.ph 2026 guide [claimed]). Hire when the VA's tasks (publishing, pins, bookkeeping) are blocking >= $300/mo of listings, i.e. 10 h/wk x $6.50 = about $280/mo | Month 5-8 (see section 6) | Unlocks owner hours |
| (g) Acquisition | Flippa H1 2026 average multiples 1.55-2.62x (annual profit, ecommerce 1.55x, app 2.62x) [verified, per repo brief]. $10k buys about $350/mo of profit at 2.4x. Only observed from about $10k | After $1k/mo net for 3 months (stage-gates R4), not before 2028 in base | Later |

## 3. Twenty-four month model (Nov 2026 = M1; Oct 2028 = M24). All figures [assumed]
Streams: **Etsy/digital SKUs** (net $/SKU/mo), **games** (titles x net $/title/mo; best case adds one breakout), **service engine** (optional playbook cash engine; best/base/worst reflect weak evidence).
| | Worst | Base | Best |
|---|---|---|---|
| Net $/Etsy SKU/mo; SKUs at M8 / M14 / M24 | $0.75; 25 / 40 / 60 | $3; 40 / 90 / 150 | $6; 60 / 120 / 250 |
| Games: titles at M14 / M24; net $/title/mo | 8 / 12; $2 | 12 / 24; $8 | 20 / 30; $25, plus a breakout title $3,000/mo from M14 |
| Service engine run-rate M8 / M14 / M24 | $0 | $300 / $600 / $1,000 | $700 / $1,500 / $2,500 |
| **Monthly net run-rate M8 (Jun 2027)** | about $20 | about $470 | about $1,500 |
| **M14 (Dec 2027, holiday month)** | about $50 | about $1,150 (Q4 uplift on party SKUs) | about $5,000 |
| **M24 (Oct 2028)** | about $70 | about $1,640 | about $7,750 |
| Cumulative net 24 months | about $0.8k | about $19k | about $85k |
Loop switch-on (base): (a) catalogue and (c) email from M2; (e) engine reuse visible by M5; (f) first VA about M6-8 when run-rate >= $500; (d) cross-promo M8+; (b) UA tests only if a title qualifies (about M10, $25-50); (g) first acquisition looked at about M22+ only if $1k/mo net held 3 months. Reinvestment split: 60% back into production/tools/VA, 40% reserve and tax (repo capital-math policy).
**Realistic ceiling.** Base is about $1.6k/mo by M24: a good side income, not a company. Best ($7-8k/mo) needs both a breakout and a cash engine. If P(breakout) is 0.5-1% per title [assumed], 24 titles give an 11-21% chance of at least one. Anything beyond that comes from the upside paths in section 7. The model is the owner's multiplier on volume; the repo's own caution applies that no lane has verified compounding from $500.

## 4. Calendar, Oct 2026 - Dec 2027
Official dates (Steamworks pages read 2026-10-12): Next Fest **Oct 19-26 2026**, **Feb 22-Mar 1 2027** (registration closes Jan 10; demo+store page to review by Jan 25 for press preview Feb 11, final Feb 8), **Jun 14-21 2027** (register by Apr 25; submit demo by May 17/31); Oct 2027 edition and Autumn Sale 2027 **not yet announced**. Sales: Winter **Dec 17 2026-Jan 4 2027**, Spring **Mar 18-25**, Summer **Jun 24-Jul 8** [all verified]. A game can only appear in one Next Fest and must be unreleased; demo cannot be an early chapter.
| Month | Learn / build | Release / test | Windows and notes |
|---|---|---|---|
| Oct 2026 | Studio engine: templates, solver, listing-pack pipeline; policy pages saved | Optional light Etsy Christmas test (Wave 1); first 1-2 games to itch.io | Scream Jam Oct 16 and AI Jam 5 Oct 17-31 on itch (AI-welcome) [verified listing]. Next Fest Oct 19-26 (watch only) |
| Nov 2026 | Read first sales/traffic data; finish 3 games | Valentine's/date-night kits drafted | Game Off (Nov 1, 29 days), GDevelop BIG Jam (Nov 6) [verified listing]. Black Friday Nov 27, Cyber Mon Nov 30 [calendar arithmetic] |
| Dec 2026 | Dec 20 gate review per bet; ship the Valentine's list (45-60 days of pin lead) | List Valentine's SKUs by Dec 1-15 | Steam Winter Sale Dec 17-Jan 4. Mobile CPMs peak early Dec, then fall through Jan [claimed, Liftoff]; Apple review may be slower Nov 24-28 and Dec 23-27 [claimed, year unclear] |
| Jan 2027 | **Public launch.** 4-6 games live; Easter + spring birthday kits | Email sample live on all listings | Q5 (Christmas-New Year) download peak and cheap acquisition [claimed, Moloco]. Steam: Next Fest registration closes **Jan 10** (only if a Steam game exists; Steam parked in strategy) |
| Feb 2027 | First VA hire if run-rate qualifies; summer/camp kit design | Brackeys Jam 2027.1 (Feb 14, 7 days) [verified listing] as a cheap game launch | Next Fest Feb 22-Mar 1. Valentine's Feb 14 sells through |
| Mar 2027 | Mid-quarter gate: kill bottom 30% of SKUs | Camp/summer kits list (Mar-Apr) | IGF Awards Mar 3 [claimed]; Steam Spring Sale Mar 18-25. Easter Mar 28 |
| Apr-May 2027 | Add 20-30 SKUs/mo through the proven niche | Halloween planning; Ludum Dare in April (dates unverified) | Next Fest June registration closes Apr 25 |
| Jun 2027 | Back-to-school/Halloween lists | **List Halloween murder mysteries by mid-Jul** (8-12 weeks before) [claimed] | Next Fest Jun 14-21; Steam Summer Sale Jun 24-Jul 8 |
| Jul-Aug 2027 | **Christmas catalogue live by Aug 15**; Halloween pins from Aug | GMTK Jam Aug 11, 4 days [verified listing; AI rules unverified] | Pinterest: Halloween content in Aug, Christmas in Oct per a community post, but 90+ days lead per Brandghost [claimed] |
| Sep 2027 | Christmas pins at full volume (1-5/day); IGF 2028 deadline is likely Aug-Sep [assumed] | New-year/NYE kits; UA tests on best bundle, $25-50 | Etsy ranking delay of 3-6 weeks [claimed, single vendor] |
| Oct 2027 | Ludum Dare (Oct); Next Fest Oct 2027 not announced | Stock Q4 buyer-intent queries | Peak Christmas buying Nov-early Dec [claimed] |
| Nov-Dec 2027 | Holiday ops: custom 24-hour orders, support | No new core listings after Nov 15 (ranking delay) | Thanksgiving Nov 25, Black Friday Nov 26 [calendar arithmetic]; Q4 CPMs highest |
Could not verify: official CrazyGames/Poki events or contests, Apple Design Awards 2027 entry dates (WWDC26 was June 8; winners announced before it), Ludum Dare 2027 exact dates (LD64 in Oct 2028 reportedly the last scheduled event [claimed]), Etsy monthly demand curve for printables (Etsy blocked; owner can read Etsy Stats). AI rules differ by jam: some ban AI (Indie Jam 2026, 20 Games Challenge), some allow with disclosure (Insert Game Here 2026), Ludum Dare allows it with opt-out categories [claimed]. Read each page before entering.

## 5. Studio scoreboard and decision rules
| KPI | Per-title definition | Rule |
|---|---|---|
| Funnel | Views > clicks > sales (Etsy: conversion >= 1%, stage-gate); games: plays > D1 (25%) > median session (4 min) > monetization event | Below 25% of thresholds after 30 days = kill (existing stage gates) |
| Net $ per SKU/title per month | Trailing 60 days, after fees | Double down if in the top 20%; kill if $0 after 60 days |
| Catalogue MRR | Sum of trailing-90-day net / 3 | Hire gate: >= $500; acquisition gate: $1,000 for 3 months |
| Hours per $ and agent cost per asset | Owner hours logged; tokens per asset | Hold owner time <= $15/h-equivalent; agent cost <= 20% of first-year net |
| LTV/CAC and payback | Only on paid tests | Scale only if payback <= 90 days and ROAS >= 1.2 at D30-D90 |
| Subscribers, cost, revenue per subscriber | Email list | Keep the list if >= $0.30/sub/mo |
| Engine reuse index | Agent hours for title N / title 1 | Should be <= 0.5 by title 6, otherwise fix the template |
Decision rules: **double down** on the niche where >= 3 SKUs sell to strangers (then 5x SKUs, bundles, seasonal variants); **kill** at the stage cap or 60 days with no stranger sale; **spin off** a sub-brand when one line is >= 50% of net for 3 months or needs a different audience (e.g. a game with 5k+ players/mo gets its own page, Discord and Steam test).

## 6. Staffing over time
| Order | Role | Trigger | Cost | AI cannot replace |
|---|---|---|---|---|
| 1 | VA (publish, pins, bookkeeping) | Catalogue MRR >= $500 | $5-11/h, 10 h/wk = $200-440/mo [claimed, HireTalent.ph] | Account ownership, identity checks, owner-only actions |
| 2 | QA / playtester | Before first paid test or Steam demo | $10-20/h in South/Southeast Asia, $35-75/h in the US [claimed, vendor guide] | Human feel, fun, print legibility |
| 3 | Contract artist for hero art/key art | Winning niche needs brand look | Illustrators mid about $58/h [claimed, goLance]; project quote | Distinctive style that clears platform AI rules |
| 4 | Composer (only for a hit) | Game with traction | $200-500/min for small indie, $25-$2,500 range [claimed, composer blogs]; royalty-free first | Taste and licensable originality |
| 5 | Community manager | Discord >= 500 active or email >= 2,000 | Part-time VA-level | Authentic voice; trust |
Hire only against a measured bottleneck, never ahead of revenue.

## 7. "As big as possible": upside paths
| Path | Example | Conditions |
|---|---|---|
| Breakout title | Brotato, Vampire Survivors | Many cheap shots (24+ games); one with D1 >= 35% and organic sharing; budget to support it |
| Catalogue of 30+ then 300+ products | Levels-style portfolio, app factories [claimed] | Engine reuse; stranger-sale proof per niche; hours per $ falling |
| Label/publisher brand | Voodoo (publishing from 2017), Poncle Presents | Own distribution plus proof. Later; Poncle paused publishing itself |
| Engine/tool licensing | Poncle licensing "Survivors" engine; itch/Unity asset packs | A proven engine and someone else's IP or audience |
| SaaS spin-off | Levels' products | A pain the studio itself lives with (listing-pack generator, solver tools) |
| Acquisitions | Flippa 1.55-2.62x profit [verified, repo] | $1k/mo net for 3 months, escrow only |
Order of likelihood: catalogue > tool/SaaS spin-off > acquisitions > breakout > label.

## 8. Risks and mitigations
| Risk | Mitigation |
|---|---|
| Stranger demand never shows (most listings earn $0) | 60-day kill; weekly funnel review; volume in the proven niche |
| Owner hours cap (1-2 h/day) | VA at $200-440/mo once MRR >= $500; batch publishing |
| Platform AI rules/policy changes | Disclose per platform; code-made art; never depend on one marketplace; own email list |
| Seasonality and late holiday listings | Calendar above: Christmas live by Aug 15 2027 |
| Slop/quality and trademark risk | Solver-verified puzzles, human QA, original themes |
| Reinvestment into UA too early | UA only after the threshold test; $25-50 caps; reserve $250 untouched until Gate 4 |

## Verdict
**Weakens/unclear.** Supports the *design* (catalogue loops pay back in about 2 months of cash, and every scaled case ran many cheap shots first), but weakens the idea that $500 compounds quickly: base is about $1.6k/mo at month 24. No case verified from $500, and none gave a primary time to first $1k/mo.
**What would change my mind:** Wave 1 data (>= 3 stranger sales per niche, conversion >= 1% by Dec 20); a verified portal RPM >= $10 per 1,000 plays; a primary source with a time-to-$1k/mo for a no-audience solo operator.
**Next cheapest test ($0):** Owner reads Etsy Stats and shop pages for 5 party-game shops (dated reviews by month) to build the real monthly demand curve, and registers a calendar reminder for Jan 10 (Steam Next Fest) only if a Steam game exists.

## Sources (retrieved 2026-10-12)
partner.steamgames.com/doc/marketing/upcoming_events (and /nextfest/feb_2027, /nextfest/june_2027) [verified] · itch.io/jams/upcoming [verified] · levels.io/nomad-list-founder [verified] · sacra.com/c/voodoo/ [verified] · thegamebusiness.com/p/the-vampire-survivors-developer-is [verified] · igf.com submission pages (search summary) · ludumdare.com/resources/questions/can-i-use-ai/ and 80.lv Ludum Dare end-2028 article (search summaries) · gamedevreports.substack.com Gamalytic · steampageanalyzer.com · rocketshiphq.com/?p=5331, segwise.ai ROAS benchmarks, liftoff.ai/?p=35325, moloco.com/blog/unwrapping-seasonal-strategies, globalgamesforum.com Singular Q4 2025 · hiretalent.ph salary guide, snoopgame.com QA cost guide, ninichimusic.com composer rates, golance.com illustrator rates · listifyai.net Etsy holiday calendar, themodernetsysellerpodcast ep. 34, help.erank.com, blog.brandghost.ai Pinterest calendar, community.pinterest.biz seasonal thread · raijin.gg and vaporlens.app Brotato, gematsu.com Brotato Evil Empire · mobilegamer.biz Survivor.io · indiehackers.com case study listings · playgama.com blog and cinevva.com guides (portal splits, unverified) · repo briefs: 2026-10-10-assets-capital-math, studio-games-distribution, games-monetization, games-web-social.
