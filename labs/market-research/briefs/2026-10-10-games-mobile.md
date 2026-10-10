# Games / Mobile (iOS + Android): can a no-audience, AI-built, $500 operator profit?
Date: 2026-10-10 | Analyst: research-analyst | Lane: mobile only

Tag key: [verified] = read on a page this session (link + retrieval 2026-10-10); [claimed] = secondary/vendor/search-snippet, unchecked; [assumed] = my estimate. Many industry benchmark pages (AppsFlyer, Adjust, Sensor Tower, AppMagic, Mobile Dev Memo) were not directly retrieved: could not verify against those primaries. Search-engine summaries are treated as [claimed].

## 1. Key findings

| # | Finding | Tag | Source |
|---|---|---|---|
| 1 | Apple Developer Program is $99/yr. Commission 30%, or 15% via Small Business Program. | [verified] | developer.apple.com/programs/whats-included |
| 2 | Google Play registration is $25 one-time. | [claimed] (several blogs; official page not fetched) | splitmetrics, appradar |
| 3 | Google service fee is 15% on first $1M for enrolled devs. From 2026-06-30 (US/UK/EEA) new tiers apply: 20% for new installs and 25% for existing installs on non-subscription IAP, plus a 5% billing fee, for standard tier. Reduced rates for Play Games Level Up participants. Page table was hard to parse, so re-check before modelling. | [verified] with parsing caveat | support.google.com/googleplay/android-developer/answer/112622 |
| 4 | New personal Play accounts (created after 2023-11-13) need a closed test with 12+ testers opted in for 14 continuous days before production. A no-audience owner must recruit 12 testers, which cuts against the "no outreach" rule. | [verified] | support.google.com/.../answer/14151465 |
| 5 | Apple says it reviews ~50% of submissions in <24h and 90% in <48h. | [verified] (page undated, © 2026) | developer.apple.com/distribute/app-review |
| 6 | Apple 3.1.1: loot-box-style randomized purchases must disclose odds. 5.3: real-money gaming restricted. Kids Category bans third-party analytics/ads (with narrow exceptions). 4.3(b) rejects apps "indistinguishable from what's widely available". 5.1.2(i): disclose and get consent before sharing personal data with third-party AI. I found no AI-generated-content rule specific to games in the part of the page I read (last ~12k chars unread). | [verified] | developer.apple.com/app-store/review/guidelines |
| 7 | Google's AI-Generated Content policy targets generative-AI apps that produce content for users (chatbots, image apps), with in-app reporting. A game that merely used AI during development is likely out of scope. Not confirmed for games. | [claimed] | support.google.com/googleplay/android-developer/answer/14094294 (search snippet only) |
| 8 | Google developer identity verification rolls out: open to all developers March 2026, enforcement in four countries from Sept 2026, global 2027. Another account must be owner-verified (an owner-only action). | [claimed] | 9to5google 2025-08-25, bleepingcomputer |
| 9 | Retention is brutal. GameAnalytics 2026 report (2025 data, 16,262 games with >=1k MAU): D7 median just under 4%, top 25% 6-7%, top 10% 11-12%. D30 median ~0.7%. D1 top 25% ~30%+. No genre split in the text I read. Sample is biased to small devs, and the report is sponsored. | [verified] (secondary write-up of the report) | gamedevreports.substack.com/p/gameanalytics-mobile-and-pc-game |
| 10 | CPI: Liftoff 2025 casual report (Feb 2024-Feb 2025): avg casual CPI ~$1.41 iOS vs ~$0.14 Android. D30 ROAS 47% iOS and 15% Android, i.e. the average casual cohort has NOT paid back at D30. Simulation/action/racing ~10x higher CPI on iOS. The Liftoff page itself shows only the ROAS figures, not CPI values. | CPI [claimed]; ROAS [verified] | liftoff.ai/?p=35032 (retrieved 2026-10-10); search summaries |
| 11 | IAA vs IAP split for hybrid-casual: sources conflict (~60/40 ads in one vendor guide; puzzle/merge ~45/55 IAP/ads and action/strategy ~82/18 IAP in another uncited blog). | [claimed], conflicting | verve.com, gamegrowthadvisor.com |
| 12 | Hybrid-casual ARPDAU $0.15-0.50 vs hyper-casual $0.03-0.08. Uncited. | [claimed] | gamegrowthadvisor.com |
| 13 | US rewarded-video eCPM quoted $13-30 depending on source. Tier-1 vs tier-3 gap quoted 3x to 10x. Disagreeing vendor blogs, no primary (Unity/AppLovin) data found. | [claimed] | blog.playio.co, layer.ai |
| 14 | Concentration: top 1% of F2P games take ~70% of F2P revenue and 53.9% of F2P games monetize at all (vendor glossary). Older Apptopia: top 50 iOS games took 76% of 2017 revenue. | [claimed] | mwm.ai glossary; gamesbeat |
| 15 | RevenueCat 2026 (subscription-app sample only, so biased toward games that already sell subscriptions): 20.0% of Gaming apps reach $1K MRR and 8.9% reach $10K MRR within 2 years. Median Gaming app revenue one year in ~$56/mo. This is survivor-biased and not representative of all games. | [verified] (as reported; sample caveat) | revenuecat.com/state-of-subscription-apps |
| 16 | Puzzle: >$7B/yr IAP, >half from Match-3. Incumbents dominate Merge and Blast too, so new entrants find it very hard. Idle arcade is described as oversaturated. | [claimed] | deconstructoroffun.com 2025-02-03; moonee.io |
| 17 | Break-even without paid UA: no evidence found of any benchmark showing that organic-only casual games clear costs. Organic-share data for unknown indie games: could not verify. | could not verify | - |

Break-even logic [assumed]: profit per install = LTV - CPI. With a D7 near 4%, rewarded-ad ARPDAU in the cents, and Liftoff's D30 ROAS of 15-47% for the average game, an unknown game loses money on paid UA unless it is far above median. At $500 total capital, with a ~$124 store entry (Apple $99 + Google $25), only ~$375 remains. Even at $0.14 Android CPI that buys ~2,700 installs, i.e. ~100 D7 users [assumed arithmetic]. That is a test, not a business. Profit without paid UA depends entirely on organic discovery, which I could not quantify.

## 2. Case studies

| Game | Genre | Team | Outcome | Discovery | Tag / fit |
|---|---|---|---|---|---|
| The Tower (Tech Tree Games LLC), 2021 | Idle tower defense | Studio; "small team" per directory; solo claim NOT supported | Revenue figure not found. App Store: ~10 IAPs $4.99-$99.99, ~18K ratings (4.3), ranked #71 top-grossing Simulation on 2026-03-12 per a tracker | Organic, word of mouth/community (not verified) | [claimed]; closest to our shape, but 5 years of live-ops |
| Wittle Defender (Habby), 2025-06-09 | Roguelike idle TD | Established publisher with heavy UA | >$10M gross in ~1 month (AppMagic est.) | Paid UA (hundreds of creatives) | [verified] via PocketGamer.biz 2025-07-10; NOT a solo case |
| Balatro mobile (Playstack), 2024-09-26 | Premium roguelike deckbuilder | Port of a hit PC game | ~$937K first week; AppMagic net >$9.3M by early 2026 | Pre-existing PC fame | [claimed]; audience came first, not replicable |
| Tinytouchtales (Arnold Rauers), 2021 | Small casual/puzzle | Solo | $8.6K and 104K downloads across portfolio after going free | One unexplained feature spike | [claimed]; the only solo-scale data point found, and old |
| I Am Monkey (Estoty), 2025 | Casual | Studio | ~390K downloads, $0 revenue | Organic | [claimed]; audience is not payment |

Gap: I found no verified 2023-2026 solo mobile hit with reported revenue. Absence of evidence, not proof of absence.

## 3. AI feasibility
- Agents can write and test game logic in Godot (text scenes/GDScript, readable by agents) or HTML5 wrapped with Capacitor [claimed: vendor blogs, no hands-on proof found]. Unity has a larger SDK ecosystem, since many ad/analytics SDKs lack Godot support [claimed].
- iOS builds need macOS and Xcode (iOS 26 SDK required since April 2026) [claimed]. Agents here run on Linux, so iOS needs a Mac or cloud CI the owner pays for, which is a cost not in my table.
- Ad mediation SDK setup, ATT prompt, consent (GDPR UMP), privacy labels, Data Safety form, store listing, screenshots, and IAP setup all require the owner's accounts and acceptance of agreements (owner-only per policies.md). Android needs the 12-tester/14-day closed test.
- policies.md prohibits targeting under-13s and loot-box gambling; both are compatible with the mobile rules above only if ads are not child-directed.

## 4. Verdict: WEAKENS (for mobile as a primary track at $500)
- Why: payment evidence for ad-funded casual comes from large UA-funded studios. The Liftoff ROAS figure shows the average casual cohort hasn't paid back by D30. Retention medians are tiny. The Android gate needs 12 outside testers (conflicts with the "no outreach" rule). The fixed entry cost (~$124) is ~25% of the capital. I found no verified route to organic discovery for unknown titles.
- Versus alternatives [assumed, not researched here]: Steam, itch.io, and web publish without UA and with lower fixed cost, and their discovery mechanisms are other lanes' questions. Mobile compounding is limited by CPI.
- Plausible shapes, if the owner still wants mobile (ranked):
  1. Idle/incremental game as a Godot or HTML5 build, Android-first, ad-light with a small IAP and one premium upgrade. Idle tower defense has a proven payer base (The Tower), but it is crowded and lives on live-ops.
  2. Paid/premium puzzle or card game with a one-time price, no ad SDK (avoids ATT and ad SDK work). Revenue ceiling is tiny without an audience.
  3. Same web game reused later via a Capacitor wrapper once the web build shows retention (D1 >= 25%, per stage-gates). Mobile is a late distribution add-on, not a first bet.

## 5. What would change my mind
- A verified, dated example of an unknown solo or AI-built game earning >= $1K/mo with zero paid UA, with organic share stated.
- A primary dataset (Sensor Tower or AppMagic) showing organic install share for new indie casual titles >= 50%.
- Evidence that the Google 12-tester requirement can be met without outreach (e.g. owner's own contacts, which the owner may judge acceptable).
- A web build that hits G3 thresholds (200+ players, 25% D1), which would justify a cheap wrapper.

## 6. Next cheapest test ($0)
Do not open store accounts yet. Build the web version of the idle/incremental concept first, to clear the G3 thresholds on itch.io or web. Meanwhile, spend research effort to close the gaps: pull AppMagic/Sensor Tower public pages for The Tower revenue, Liftoff's full 2025 report for CPI and ARPDAU by genre, and Google's official fee page for the $25 figure. If mobile is pursued later, the first paid step is the owner's Play Console ($25), a gated owner action.

## Unresolved
Organic share and ASO conversion for unknown games; verified IAA/IAP split by genre; verified rewarded eCPM by country; The Tower revenue; Google Play AI policy applicability to games; Apple's unread guideline tail; Mac/CI cost for iOS builds.

## Sources
- https://developer.apple.com/programs/whats-included/ (2026-10-10)
- https://developer.apple.com/distribute/app-review/ (2026-10-10)
- https://developer.apple.com/app-store/review/guidelines/ (2026-10-10, first 100k chars)
- https://support.google.com/googleplay/android-developer/answer/112622 (2026-10-10)
- https://support.google.com/googleplay/android-developer/answer/14151465 (2026-10-10)
- https://support.google.com/googleplay/android-developer/answer/14094294 (snippet only)
- https://gamedevreports.substack.com/p/gameanalytics-mobile-and-pc-game (2026-10-10)
- https://gamedevreports.substack.com/p/gameanalytics-mobile-gaming-benchmarks
- https://liftoff.ai/?p=35032 (2026-10-10)
- https://www.revenuecat.com/state-of-subscription-apps/ (2026-10-10)
- http://www.pocketgamer.biz/wittle-defender-hits-10m-in-player-spending/ (2026-10-10)
- https://mobilegamer.biz/balatro-mobile-hits-500k-in-five-days-tops-paid-game-charts/ (snippet)
- https://apps.apple.com/app/1575590830 and https://adapty.io/paywall-library/the-tower/ (snippets)
- https://www.deconstructoroffun.com/blog/2025/2/3/hybridcasual-puzzles-expanding-the-puzzle-market (snippet)
- https://mwm.ai/de/glossary/f2p ; https://gamesbeat.com/apptopia-ios-games-peak-quickly-and-top-50-take-76-of-revenues/ (snippets)
- https://verve.com/blog/ad-revenue-optimization-by-game-genre/ ; https://gamegrowthadvisor.com/blog/2026-04-16-hybrid-casual-game-design-strategy-2026/ (snippets)
- https://blog.playio.co/rewarded-ad-benchmarks-2026 ; https://layer.ai/glossary/ecpm (snippets)
- https://9to5google.com/2025/08/25/android-apps-developer-verification/ (snippet)
- https://ziva.sh/blogs/unity-vs-godot-2026-ai ; https://ziva.sh/blogs/godot-mobile (snippets)
- https://splitmetrics.com/blog/google-play-apple-app-store-fees/ (snippet)
