# Games monetization benchmarks and playbook (2026-10-10)

Analyst: research-analyst. Retrieval date for all links: 2026-10-10. Question: which monetization model gives a no-audience, AI-built game portfolio the best expected value on $500 seed, with no cold outreach and no paid UA?

**Headline:** Public benchmarks are mostly secondary blogs and vendor reports. Primary platform fee/policy pages are strong; performance benchmarks (conversion, RPM, ARPDAU) are weak. Nothing here clears a spend gate on its own ([claimed] numbers cannot, per stage-gates). Could not verify: portal rev-share terms (Poki, CrazyGames), any web-game RPM, idle-game payer %, Patreon fees, Steam tier text on Valve's own page, Google Play/Apple developer account fees.

## 1. Benchmarks

| Item | Figure | Tag | Source / note |
|---|---|---|---|
| Rewarded video eCPM, N. America (Q4 2024) | iOS ~$13.6, Android ~$9.0; Europe iOS ~$8.9, Android ~$5.1; LatAm ~$1.8-3.4 | [claimed] | Appodeal report via Playio blog; read off charts, all apps incl. long tail |
| Rewarded eCPM, US games (Q2 2024) | iOS $24.39, Android $30.25 | [claimed] | Tenjin x CAS via GameDevReports/Playio; games only. Seasonal swing 20-40% |
| Interstitial eCPM US | $9.6-$23 depending on source/OS | [claimed] | same; sources disagree ~2x |
| Banner eCPM US | ~$0.45-$1.30 | [claimed] | same; negligible vs rewarded |
| Hypercasual ARPDAU | $0.02-0.05; midcore $0.30-0.40+ | [claimed] | Pushwoosh citing Miri Growth/ThinkingData. No idle-specific figure found |
| F2P payer conversion | ~1% used as a typical example; no 2025-26 measured benchmark found | [claimed]/[assumed] | Playio. Treat 1% as an assumption |
| Steam demo -> wishlist (players who wishlist) | median ~16%, 70th pct 20% | [claimed] | Zukowski survey, n=182, Feb 2026, via Ziva blog |
| Steam wishlist -> buyer, week 1 | ~10-15% (blogs); 2.7-3.8% within a week for two Oct 2025 Next Fest titles | [claimed] | Stray Spark, Steam Page Analyzer, Alinea Analytics. Wide, inconsistent |
| Median Steam game lifetime gross | ~$1,000; ~half of 2025 releases under 10 reviews | [claimed] | Secondary recaps of VG Insights/GameDiscoverCo; underlying report not reached |
| Price points | $4.99 is most crowded tier; $9.99-$19.99 often earns more total; short games viable at $7.99-9.99 | [claimed] | Steam Page Analyzer, Game Developer; vendor blogs, partly 2019 data |
| Refund rate | Not found. Policy: 14 days AND under 2 h playtime | policy [verified] / rate could not verify | https://store.steampowered.com/steam_refunds/ |
| Kickstarter games | ~32% success; avg ~$68K per campaign (skewed by large ones) | [claimed] | Third-party analysis via GameDevReports; Kickstarter did not publish game success rate |
| Web portal developer share | Poki ~50% (100% own traffic); CrazyGames 50-70% | [claimed] | Cinevva/Playgama (Playgama competes). CrazyGames docs do not state split |
| Web portal earnings | "$200-$2,000/mo for successful casual games" | [claimed] | Commercial guide; no RPM per 1,000 sessions found. Do not use |
| CrazyGames onboarding | Basic Launch: 7-21 days, needs 500 plays, monetization off; Full Launch gated by playtime/retention vs other games | [verified] | https://docs.crazygames.com/ |

Discounting, bundles, DLC conversion: could not find usable benchmarks. Not claiming any.

## 2. Platform fees and payouts

| Platform | Cut / fee | Payout mechanics | Tag |
|---|---|---|---|
| Steam | $100 fee per app, recoupable after $1,000 adjusted gross revenue | Paid ~30 days after month-end; only if balance over $100; ACH/wire; tax questionnaire (W-9/W-8BEN) | [verified] steamgames partner pages (appfee, steamdirect, payments_salesreporting) |
| Steam rev share | 30% to $10M, 25% to $50M, 20% above | Not on the Valve pages I could fetch | [claimed] (2018 press: Neowin, TechCrunch). Check Steamworks agreement |
| itch.io | Default 10%, seller can set 0-100% | Plus PayPal/Stripe 2.9% + $0.30 (itch suggests $2+ prices); $10 sale nets $8.41. Min payout $5, 7-30 day hold, ~10-14 day review, one-time $3 identity fee, PayPal/Payoneer transfer fees | [verified] https://itch.io/docs/creators/payments |
| Apple | 15% for Small Business Program (<= $1M proceeds), else standard (30%, not fetched) | Enrollment effective ~15 days after fiscal month end | [verified] https://developer.apple.com/app-store/small-business-program/ |
| Google Play | 15% on first $1M/yr (remaining markets); 30% above; subs 15% flat; newer US/UK/EEA/JP/AU structure has lower rates with extra billing fees | Monthly | [verified] https://support.google.com/googleplay/android-developer/answer/112622 |
| Roblox DevEx | $0.0038 per Earned Robux (30,000 = $114); $0.0054 for some purchases by US 18+ verified players | Min 30,000 Earned Robux; 13+, W-9/W-8; reviewed each request. Roblox's cut of spend not on page; effective developer take is low | [verified] DevEx page. Marketplace cut: could not verify |
| Web portals | See above, 50-70% | CrazyGames: Tipalti, EUR 100 min | [claimed] |

## 3. Policy limits (all consistent with charter: fictional currency, no gambling, no children)
- Apple 3.1.1: randomized paid items must disclose odds before purchase. [verified] https://developer.apple.com/app-store/review/guidelines/
- Google Play: loot-box odds disclosure before purchase; Play billing cannot be used for gambling. [verified] https://support.google.com/googleplay/android-developer/answer/9858738
- Kids: Apple Kids Category bars third-party ads/analytics (narrow exceptions) [verified]; Google Families needs self-certified ad SDKs [claimed, search snippet]. Charter already excludes under-13 targeting, so ad-supported kids games are out.
- Our rule is stricter: no paid randomized items at all. Skip loot boxes and gacha.

## 4. Minimum audience for $100 / $1,000 / $5,000 per month (net to us)
All inputs are **[assumed]** derived from the [claimed] benchmarks above; swap in real data after soft launch.

| Model | Assumptions | $100 | $1,000 | $5,000 |
|---|---|---|---|---|
| Web portal ads | Net $3 per 1,000 plays (no verified RPM; range could be $1-$10) | 33k plays | 333k plays | 1.7M plays |
| Mobile ads (idle/casual) | $0.03 ad ARPDAU, 30 days, DAU steady | ~110 DAU | ~1,100 DAU | ~5,600 DAU |
| Mobile IAP | 1% payers x $20/mo = $0.20 per MAU gross, 15% store cut | ~600 MAU | ~5,900 MAU | ~29,000 MAU |
| Steam premium $9.99 | ~$7 net/copy (30% cut), refunds ignored | 14 copies/mo | 143 copies/mo | 714 copies/mo (about 7k wishlists at 10% conversion) |
| itch.io $5 | ~$4.05 net after 10% + processing | 25 sales | 247 sales | 1,235 sales |
| Tips / supporter pack | 0.5% of players pay $3 = $0.015 per player | ~6.7k players | ~67k | ~333k |

Note: "plays" and "DAU" still must be earned without paid UA. Mobile ads/IAP DAU figures assume organic discovery, which is the hard part on app stores; portals and itch supply some traffic, Steam supplies wishlists only after a page and community exist.

LTV vs CAC [assumed]: with CAC = $0 (no paid UA), cost is owner time plus fixed fees. Example: a $0.03 ad ARPDAU with 3 days average lifetime yields ~$0.09 LTV per install, below any realistic paid CAC ($0.50-$2 assumed), so paid UA is not viable for ad-only casual games. Free-game-to-email/Discord/wishlist funnel only pays if it converts ~1-5% [assumed] of players into a list worth later launches.

## 5. Hybrid playbook (sequence)
1. Free web games on portals and itch.io (browser). Gate metrics from stage-gates (200 players, 25% D1). Add a tip jar/pay-what-you-want and an in-game wishlist/email link; these are the "monetization signal".
2. Winners: portal ads layer (rewarded video only, opt-in; owner opens accounts) plus a $2-5 itch "supporter/ad-free" version.
3. Only a top performer with proven retention graduates to Steam ($100 fee, page, demo, Next Fest; Oct 12-19 2026 is too soon). Cross-promote sibling games inside each game and on the itch profile (organic, no outreach).
4. Mobile only after web data shows retention; store accounts and fees are owner-only and unverified here.

## 6. Ranking (expected value for a no-audience portfolio)
1. **Free web games on portals (ad rev-share) feeding itch tips**: portals supply traffic; zero cash cost; most testable. Low ceiling and RPM unknown; CrazyGames/Poki acceptance is not guaranteed.
2. **Low-price premium on itch.io** ($3-8, pay-what-you-want): cheap, easy payout, but itch discovery for unknown devs is thin.
3. **Steam premium**: highest ceiling per sale, but wishlists need audience; median lifetime ~$1,000 [claimed]; $100 fee tied up. Candidate for a later winner only.
4. **Mobile F2P with rewarded ads**: ad ARPDAU is plausible, but store discovery without UA is near zero and kid/ads policy is heavy.
5. **Mobile IAP F2P (idle/card)**: needs tens of thousands of MAU; no organic source.
6. **Kickstarter/Patreon/charity bundles**: need an existing audience; bundles are exposure, not income.

## Verdict
**Weakens** the idea that any monetization model alone earns meaningful money from a cold start; **supports** staged free-web-first with ads and tips as the least bad EV. Most realistic first-year outcome per game is $0-$100.

**What would change my mind:** a verified RPM above ~$10 per 1,000 sessions from a portal dashboard; portal terms confirming no exclusivity and acceptance of AI-built games; a verified payer/ARPDAU benchmark for idle games; one of our games hitting 2,000+ organic plays/week with D1 over 25%.

**Next cheapest test ($0):** have the owner submit one finished browser game to CrazyGames Basic Launch and itch.io with a tip link; measure plays, D1, tips and the portal's RPM at 500 plays. Separately, owner to read the live Poki/CrazyGames terms and the Steamworks agreement to replace [claimed] share figures.

## Sources
- https://itch.io/docs/creators/payments
- https://partner.steamgames.com/doc/gettingstarted/appfee
- https://partner.steamgames.com/steamdirect
- https://partner.steamgames.com/doc/finance/payments_salesreporting
- https://store.steampowered.com/steam_refunds/
- https://developer.apple.com/app-store/small-business-program/
- https://developer.apple.com/app-store/review/guidelines/
- https://support.google.com/googleplay/android-developer/answer/112622
- https://support.google.com/googleplay/android-developer/answer/9858738
- https://create.roblox.com/docs/production/monetization/developer-exchange
- https://docs.crazygames.com/
- Secondary: https://blog.playio.co/mobile-game-ecpm-benchmarks-2026 ; https://appodeal.com/the-mobile-ecpm-report-updated-q4-2024-view ; https://www.pushwoosh.com/blog/optimize-ad-monetization-mobile-game/ ; https://ziva.sh/blogs/steam-next-fest-2026 ; https://alineaanalytics.substack.com/p/wishlist-to-buyer-conversions-for ; https://www.steampageanalyzer.com/blog/steam-pricing-strategy ; https://www.steampageanalyzer.com/blog/median-steam-game-2026 ; https://gamedevreports.substack.com/p/kickstarter-in-2025-and-before ; https://www.neowin.net/news/valve-introduces-new-revenue-share-tiers-for-steam-promising-bigger-cuts-for-studios/ ; https://app.cinevva.com/guides/web-game-monetization ; https://app.cinevva.com/guides/publish-game-crazygames
