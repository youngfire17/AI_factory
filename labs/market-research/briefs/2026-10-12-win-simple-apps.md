# How simple apps win, and how our AI studio runs the playbook
Date: 2026-10-12 | Analyst: research-analyst | Lane: simple apps (mobile, web, Mac, extensions) | Launch window: Jan 2027

Tags: [verified] = read on a primary or API-synced page this session (retrieved 2026-10-12 unless noted). "TrustMRR" pages are synced from the founder's RevenueCat/Superwall/Stripe/Polar read-only key; we did not audit them. [claimed] = founder interview, search snippet, listing text, secondary write-up. [assumed] = my arithmetic or estimate. Blocked or unreadable: Indie Hackers posts (HTTP 403), the Acquire listing, the Flippa SleepMaster financials, Starter Story's own pages. Prior briefs (assets-digital, landscape, games-mobile) are not repeated.

## 1. The finding in four lines
1. Simple apps do make real money, but the money is heavily skewed. RevenueCat's 2026 sample (subscription apps only) shows median monthly revenue one year in about $72, top quartile about $429, top 10% about $2,574 [verified: revenuecat.com/state-of-subscription-apps, page has internal inconsistencies].
2. The big verified winners (rows 1-8) pair a *wide-TAM hook* with a *paid or creator distribution loop*, a *hard or early paywall* and *fast iteration*. Pure-ASO niche apps are real but small: verified faith/utility apps run $26-$340/mo (rows 11-14).
3. The winning edge for an AI studio is *volume of shots on goal at near-zero build cost*, plus localization and maintenance. It is not any single app.
4. Money-for-attention is the binding constraint. The reserve ($250) is inviolable before Gate 4, and the Apple fee ($99) exceeds the G3 per-bet cap ($75) in `charter/stage-gates.md`. So Phase 0 must be web/extension-first and demand-tested before any store fee.

## 2. Case table (40 cases)
| # | App (type) | Model | Revenue | Unlock / why it wins |
|---|---|---|---|---|
| 1 | Project A, AI astrology/fortune (Flutter) | Sub | MRR $63.6K, 30d $90.7K, all-time $9.54M, 9,163 subs, 50M downloads [verified, TrustMRR] | Meta+Google+TikTok ads loop; huge TAM. Apple has called astrology crowded [claimed] |
| 2 | GoTall, height tracker (Superwall) | Sub | MRR $58.1K, 17,680 subs, all-time $898K, founded Jul 2025 [verified] | ASO + TikTok/IG content + Meta/TikTok ads; very specific teen/parent worry |
| 3 | IPTV player + VPN bundle (RN) | Sub | MRR $12.2K, 4,116 subs, all-time $1.15M [verified]; "$238K TTM profit" is seller text [claimed] | ASO, SEO blog, Google Ads; since 2022; utilities with recurring need |
| 4 | Nutria, AI calorie tracker | Sub | MRR $46.1K, for sale [verified] | AI photo logging; Health & Fitness converts best (D35 2.9%) [verified RC] |
| 5 | Boothie, AI photo editor | Sub | MRR $50.4K, for sale [verified] | AI effect with shareable output |
| 6 | Composer.AI / SongMaker, AI songs | Sub | MRR $23K, for sale [verified] | AI novelty with shareable output |
| 7 | AI selfie/grooming analysis | Sub+IAP | MRR $36K; "$600K+" revenue is title text [verified/claimed], for sale | "Viral creator growth" per listing |
| 8 | No Contact, breakup recovery | Sub | MRR $8.6K, for sale [verified] | Emotional niche; daily-use ritual |
| 9 | Stealth iOS health & fitness | Sub | MRR $100K, for sale [verified, category page] | Not disclosed |
| 10 | PropGPT, AI sports-prop analysis | Sub | MRR $83K [verified] | Betting-adjacent; policy-sensitive, avoid |
| 11 | Quran Daily (lock-screen widget, SwiftUI) | $1.99/wk, $29.99/yr | MRR $60, 24 subs, all-time $1,877 [verified] | Organic ASO; founder says Islam niche "untapped" [claimed] |
| 12 | Sadece Islam prayer tracker | $6.99/mo, $39.99/yr | MRR $26, all-time $306 [verified] | ASO; no traction in 7 months |
| 13 | Tap To Pray (Christian prayer) | $39.99/yr | ~$340/mo gross, $174/mo profit, ~350 downloads/mo, 100% organic, $17/mo infra; asked $5,000 then $4,000, unsold [claimed, Flippa] | ASO. Implies ~$1 revenue per monthly download [assumed] |
| 14 | iOS anime app | Sub | MRR $90, all-time $5.8K [verified] | None stated |
| 15 | Bible Prayers (RN, 50 languages) | Free+ads+sub | $0 MRR, 0 ratings [verified] | Shows localization alone does not create demand |
| 16 | Early/"Erly", push-up alarm | $29.99/yr, $9.99/mo + trial | ~$50K per 28 days, 200K+ downloads, solo [claimed, founder interview] | Paid TikTok/IG creators (~$2-3 CPM guaranteed views), launched weeks after iOS 26 AlarmKit; MVP in 19 days with Claude Code [claimed, superframeworks] |
| 17 | HabitKit (habit widget) | Sub | $10K MRR across the founder's apps in 2024 [verified, founder post] | Organic ASO from 2023; MKBHD feature spiked December; Times Square billboard gave no meaningful lift [verified] |
| 18 | Photo AI (web) | Sub | $100K+/mo revenue (not MRR) [claimed, founder on X] | Solo; builds in public |
| 19 | Interior AI | Sub | $30K+ MRR [claimed] | Solo; same operator |
| 20 | Cal AI | Sub | $600K+ MRR estimate [claimed, conflicting] | Creator-led growth |
| 21 | Plug AI/RizzGPT + UMax | Sub | $200K+ MRR; ">$5M in a year" combined [claimed] | Teen-trend hooks (dating, "lookmaxxing") |
| 22 | PDF.ai | Sub | $50K+ MRR, 1 person [claimed] | Clear workflow |
| 23 | BoldVoice (accent coach) | Sub | $500K+ MRR, <15 staff [claimed] | Niche professional learners |
| 24 | "Max", 28-app portfolio | Mixed | ~$10K/mo; top 4 apps ~$1.5K each [claimed, podcast summary] | Astro keywords (>=20% popularity, 60-70% difficulty), Sensor Tower for competitor revenue, 90% code reuse, built while employed |
| 25 | Viktor Seraleev portfolio | Mixed | $60K/mo [claimed, IH title; page blocked] | Portfolio after Apple froze his account |
| 26 | 30-app portfolio | Mixed | $22K/mo in <1 yr [claimed, IH title; paywalled] | Portfolio scale |
| 27 | Bedtime Fan (Slumber Studios) | Sub | ~$50K/mo [claimed, IH] | High-volume keyword ASO, cross-promo, one concept cloned into many sound niches |
| 28 | Bus/train tracker (J. Makavoy) | Sub | ~$30K MRR, 5M downloads [claimed] | ASO with city keywords, Mexican-Spanish localization to rank in US, timed rating prompts; could not corroborate |
| 29 | GainFrame, gym progress photos | Sub | $2,209 MRR, 391 subs, last 28 days +$287 vs +$851 prior [verified, RevenueCat per founder] | Free web tools, TikTok; growth stalling |
| 30 | Superpower ChatGPT (extension) | Free then paid | $20-30K MRR, solo [claimed] | Built in 3 days; free 9 months; newsletter |
| 31 | Easy Folders (extension) | Sub | $3.7K MRR, $42K total in 6 months [claimed, IH snippet] | Fills a missing ChatGPT feature |
| 32 | Older extension roundup | Mixed | Closet Tools ~$42K/mo at $30/mo; CSS Scan $69 one-time, $100K+; GoFullPage ~$10K/mo, 4M users, $1/mo premium [claimed, ExtensionPay, 2019-2021] | Product Hunt (CSS Scan 754 and 1,917 votes), niche seller community |
| 33 | 112 revenue-verified extensions | n/a | 57.1% earn $0, 6.3% clear $1K/mo, mean $295/mo [claimed, BigIdeasDB] | Base rate |
| 34 | Chonky (tab manager) and Marvin (Stripe test-card autofill) | $9/mo; free | Chonky $0 MRR; Marvin $1,704 all-time [verified] | Tiny. Dev-tool extensions are low-ceiling |
| 35 | Minilabs (4 Mac apps, $5.99 one-time) | One-time | $317 all-time, $51 in 30d since Jun 2026 [verified] | Weak result; no audience |
| 36 | MacWhisper | Free + one-time license | ~$100K revenue, 57.6K downloads [claimed, undated newsletter] | Local AI transcription; word of mouth |
| 37 | menuBUS (Mac menu bar) | $40 one-time | $12K first year [claimed, 2018] | Niche commuter utility; raised price from $5 |
| 38 | Plantrip (AI itinerary web) | $2.50/mo, $30/yr | MRR $74, 22 subs, ~86K users [verified, Stripe] | Audience is not payment: ~0.03% paying [assumed arithmetic] |
| 39 | fly.pieter.com (AI-built web game) | Ads/IAP | >$50K/mo, creator claim; reported to fall to zero later [claimed] | Founder's own audience |
| 40 | Reels maker app (Acquire listing) | Sub | $61K ARR title only; page unreadable [claimed] | Resale value exists for small subscription apps |

Pattern: every $20K+/mo case either (a) pays for distribution (creators or ads), (b) rides the founder's audience, or (c) owns a keyword-rich category with a recurring need. I found no verified case of a no-audience, no-ad app passing about $2K MRR on ASO alone; the best ASO-only evidence is claimed (rows 17, 24, 27, 28).

## 3. Repeatable playbooks (A-G)
Common costs: Apple Developer $99/yr [verified, prior brief]; Google Play $25 once [claimed]; Chrome Web Store one-time fee ~$5 [assumed, not checked]; Apple/Google fee 15% via small-business tiers [verified, prior brief]. Median prices: weekly $5.99, monthly $10, yearly $34.80 [verified, RC]. Download-to-paid median 2.0%; hard paywall 10.7% vs freemium 2.1%; trial-to-paid 25.5% (<=4-day trial), 37.4% (5-9 day), 42.5% (17-32 day); AI apps churn ~30% faster [verified, RC; sample is subscription apps only].

| Playbook | Steps and time | Budget | Kill / scale (thresholds are [assumed]) |
|---|---|---|---|
| A. ASO niche portfolio (rows 11-13, 24, 27) | Score 20 keyword niches; build one narrow app per niche in 3-5 days from the shared codebase; weekly price/paywall test; localize into 10-20 languages | $99 + ASO tool ~$9-19/mo | Kill at <100 installs/mo by day 60. Scale at >1,000 installs/mo (Tap To Pray ~350/mo made ~$340/mo). Expect $100-$1.5K/app |
| B. Creator-led single-hook app (rows 2, 16, 20, 21) | Clone-proof hook; hard or early paywall; 3-5 micro-creators on guaranteed views; ship in under 3 weeks | $100-300 test | Kill if <$0.50 revenue per install at D14 or CAC above that. Scale if D14 revenue per install >$2.3 (hard-paywall median $2.32 [verified, RC]) |
| C. Platform-event first mover (row 16) | Watch new OS APIs (AlarmKit shipped in iOS 26, Sept 2025); ship within 30 days while competitors are thin | as B | Window is about 60 days |
| D. Niche professional tool, annual plan (rows 23, 30, 32) | Extension or web tool for one workflow (resellers, recruiters, teachers); $9-30/mo or $69 one-time; sell via community and outreach | $0-$30 | Kill at 0 paying users after 100 targeted installs. Scale at $1K MRR |
| E. AI-native workflow wrapper (rows 4-6, 18, 22) | Image/voice/doc job with a distinct output; per-use credits to cap inference cost | inference cost per user [assumed to need modeling] | Kill if gross margin per payer <60% [assumed] |
| F. Web tool to mobile / Mac (rows 29, 36, 37) | Validate on web with Stripe/Polar; wrap or port only after paying users appear | $0 then $99 | Port only after >=10 web payers |
| G. Seasonal / event apps | Ship 4-6 weeks before an event (Ramadan 2027 begins around Feb 8 [assumed, verify]; Lent; back-to-school; tax season); ASO ranking needs lead time | as A | Kill after season if installs <100 |

## 4. How to find winning niches
Method (3 hours per niche, agent-run): (1) Pull candidate keywords from App Store autocomplete and a keyword tool; target Max's reported band (popularity >=20%, difficulty 60-70%, estimated $100-200/mo revenue) [claimed], noting a vendor guide recommends stricter difficulty <35 [claimed]. (2) Check competitors' revenue on TrustMRR's Mobile Apps category [verified, it lists 25+ apps with MRR and growth channel], RevenueCat-verified listings, Flippa/Acquire listings. (3) Mine 1-2 star reviews of the top 5 apps for missing features, ads, paywall anger. (4) Reject niches where the top 5 are all >50K ratings or where Apple has called the category crowded (astrology [claimed]). Tools [claimed, vendor comparison blogs]: Astro ~$9/mo; Sonar $19/mo; Appfigures ~$8-69/mo; AppTweak ~$69-166/mo (sources conflict); Sensor Tower is enterprise (~$74K/yr median buyer), not usable. Free: App Store search, TrustMRR, Google Trends, review text (could not verify free-tier limits).

## 5. Distribution without an audience
| Channel | Evidence | Cost / numbers |
|---|---|---|
| ASO (keywords, ratings prompt, localized listing) | Rows 13, 17, 24, 28 | $9-19/mo tool. Localization lifts: Distimo (2012) +128% downloads/week after native-language launch [claimed, old]; a 2026 blog says +25-40% for 6 languages [claimed, unverified] |
| TikTok/IG micro-creators | Erly (row 16), Cal AI | ~$2-3 CPM guaranteed views [claimed]; UGC rates quoted $20-$1,500/video, vendors disagree [claimed]; $100 ~ 40K views [assumed arithmetic] |
| Apple Search Ads | Vendor benchmarks | US CPT ~$1.9; CPA Productivity $3.20, Health & Fitness $2.38, Utilities $2.82 (Apr-Jun 2026); conversion rate 66% [claimed, SplitMetrics]. Implied CPI ~$2.9 [assumed]: only pays back with a hard paywall |
| Reddit / niche communities | Fairshare ~1,000 users in 3 weeks [claimed]; a 250-tool site got 41% of its traffic from Reddit, ~2% from Google [claimed] | Free; needs value-first posts, follow rules; owner can do this |
| Free web tools / SEO | GainFrame credits it for growth, unquantified [verified, founder]; one tool site ~$0.05 per visitor [claimed] | Slow. Use as support, not the main channel |
| Product Hunt | CSS Scan, Spider (old) [claimed] | Good for tools/extensions; installs-per-vote unknown. Could not verify any 2026 data |
| Press/influencer luck | MKBHD feature spiked HabitKit; billboard did not [verified, founder] | Not plannable |
| Direct outreach (allowed) | Closet Tools sold to a seller community [claimed] | Best fit for playbook D |

## 6. What AI changes
Verified or well-sourced: MVP in 19 days with Claude Code (row 16, claimed); 90% code reuse across 28 apps (row 24, claimed); marginal cost of translating a listing is near zero, but demand is not (Bible Prayers, 50 languages, $0, row 15, verified). Apple's own page does not mention AI-built apps; reports say Apple is enforcing existing rule 2.5.2 and review queues stretched to 7-30+ days during the 84% submission surge [claimed, secondary]. Apple's published norm is ~50% in 24h and 90% in 48h [verified, prior brief]. So the AI edge is cheaper shots on goal and maintenance, but also more competitors: store supply is rising, so *hook and distribution* decide.

AI-native apps are strongest where output is shareable or the job is clear (photo, voice, calorie logging, document work; rows 4-6, 18, 22), but they churn ~30% faster and bear inference cost [verified/assumed].

## 7. Store rules relevant to our factory
- Apple 4.3(a): no multiple Bundle IDs of the same app. 4.3(b): no apps indistinguishable from what is widely available; repeated submissions risk removal from the Developer Program [verified, developer.apple.com guidelines]. 4.1(a): don't copy popular apps. 4.2: must exceed a repackaged website, which limits plain Capacitor wraps [verified]. 3.1.2(a): subscriptions need ongoing value, at least 7 days [verified]. 5.1.1(v): in-app account deletion if accounts exist [verified]. 5.1.2(i): disclose and get consent before sharing personal data with third-party AI [verified]. 1.3 Kids Category: no third-party analytics/ads, so avoid kids [verified]. I read the first 100K of 112K characters.
- Google: AI-Generated Content policy covers chatbots, text-to-image/voice/video apps, with named prohibited content (non-consensual deepfakes, scams, etc.) [verified]; summarization and productivity features are excluded [verified]. Repetitive Content bars multiple apps with highly similar functionality and automated-wizard mass uploads [claimed, search summary; page not read]. Personal accounts need 12 testers for 14 days [verified, prior brief]; owner says outreach is OK, so that is manageable.
- How operators stay compliant [assumed, from forum evidence]: genuinely different features per app, separate assets/metadata, accurate metadata (2.3), no cloned UI, and few apps per niche. Developers report 4.3 rejections from shared binary/metadata [claimed, Apple forums].

## 8. Our AI studio: execution design
**Stack.** One monorepo, Expo/React Native + TypeScript, shared packages: paywall (RevenueCat or Superwall; pricing not verified), analytics, onboarding, localization pipeline, store-listing generator, test kit. EAS cloud builds avoid needing a Mac: free tier lists 15 iOS + 15 Android builds/month [claimed; trackers conflict]. Widget/AlarmKit-style apps need native Swift targets, so plan 2 of 8 as native or use Expo config plugins [assumed]. Web-first apps use Next.js + Stripe/Polar. Apps stay *distinct* (per 4.3), sharing libraries but not templates.
**Cadence (per week).** Mon: agent scores 5 niches and picks 1. Tue-Thu: agents build, run tests, generate 3 screenshot sets and localized listings. Fri: red-team + compliance review. Owner: ~1h/day: QA on device (30 min), submit/answer review (15 min), community posts or creator DMs (15 min). Review lag means a build cycle is 2-3 weeks per app, so parallelize 3 apps in flight [assumed].
**Budget under the reserve.** Spendable $250 before Gate 4. Phase 0 (Oct-Dec): $0-30 (web, extension). Apple $99 only after a G3 signal (needs explicit owner decision, as it exceeds the $75 G3 cap). Google $25 later. Creator tests $100 cap per concept.

**First 8 concepts** (all [assumed] hooks; each needs G1 evidence before spend)
| # | Hook | Niche / platform | Price | Unlock | Test budget |
|---|---|---|---|---|---|
| 1 | Ramadan/Lent prayer-time and verse lock-screen widget in 12 languages | Faith, seasonal; iOS | $1.99/wk, $29.99/yr | ASO + localization, ship by Jan | $0 (+$99 account) |
| 2 | Sleep sounds for dogs/babies/ADHD "brown noise" (one app per distinct experience) | Sleep; iOS+Android | $29.99/yr | Keyword ASO (Bedtime Fan pattern) | $0 |
| 3 | GLP-1 protein and meal photo logger | Health; iOS, hard paywall | $9.99/mo, $39.99/yr | TikTok creators + ASO | $100 creators |
| 4 | Study blocker: unlock apps by finishing flashcards | Students; iOS (Screen Time API entitlement unverified) | $4.99/wk | Campus TikTok micro-creators | $100 creators |
| 5 | Etsy/eBay listing writer from a photo (20 languages) | Resellers; Chrome extension + web | $9/mo | Seller subreddits, outreach, Chrome Web Store SEO | $5 |
| 6 | Local-AI dictation with niche vocabulary (legal, medical terms) | Mac; menu bar | $29 one-time or $49/yr | Product Hunt, r/macapps, outreach | $0 (+$99 for notarization) |
| 7 | New OS API first-mover app (decide after WWDC-style API review) | Lifestyle; iOS | $29.99/yr | Playbook C; creators | $100 |
| 8 | Web converter/checker tool for one document type | Web tool, later wrap | $5/mo or $19 one-time | Reddit + SEO | $0 |

**90-day milestones (Jan-Mar 2027).** Prep (Oct-Dec): repo, shared packages, 20 niches scored, 3 landing/waitlist pages, compliance checklist. Jan: owner buys accounts after approval; concepts 1, 5, 8 live. Feb: concepts 2, 3, 6 live; first kill decisions at day 30. Mar: concepts 4, 7; scale or kill each (thresholds in section 3); reinvest into the best channel. Realistic expectation [assumed]: most apps earn <$100/mo; one hit would carry the portfolio.

## 9. Risks and mitigations
| Risk | Mitigation |
|---|---|
| Apple 4.3 / Google repetitive-content removal of the portfolio | Distinct apps, assets, features; cap 2 apps per niche; keep a single developer account clean |
| Capital: $250 spendable, fees exceed G3 cap | Web/extension first; explicit owner decision on $99; creator tests capped |
| Most apps make <$100/mo (RevenueCat median $72) | Kill fast; portfolio sizing; favor playbooks B and D with payment evidence |
| Review delays (claimed 7-30+ days in surge) | Parallel builds; submit early; web fallback |
| AI-app churn and inference cost | Credit-based pricing; margin check before launch |
| Privacy/AI disclosure and health-claim exposure | 5.1.2(i) consent screen, no medical claims, no kids |

## 10. Top three playbooks for us
1. Playbook A with localization: a portfolio of narrow ASO apps; cheap, but expect small per-app revenue.
2. Playbook B/C: one creator-led hard-paywall app timed to a platform event; the only route to $20K+ with evidence.
3. Playbook D/F: a web or extension tool for a niche professional workflow sold by outreach; no store fee, no store review.

## Sources (retrieved 2026-10-12 unless noted)
revenuecat.com/state-of-subscription-apps/ ; developer.apple.com/app-store/review/guidelines/ ; support.google.com/googleplay/android-developer/answer/14094294 ; trustmrr.com (home, /category/mobile-apps, /startup/project-a, gotall, quran-daily, sadece-i-slam-namaz-takip-pro, bible-prayers, plantrip, minilabs-cc, marvin-extension, chonky, ios-anime-app.md, iptv-player-vpn-app-bundle) ; flippa.com/13550304-tap-to-pray ; sebastianroehl.substack.com/p/2024-my-indie-app-business-year-in ; gainframe.app/blog/stuck-around-2000-mrr/ ; superframeworks.com/case-study/erly ; extensionpay.com/articles/browser-extensions-make-money ; consumerstartups.substack.com/p/lightweight-ai-consumer-utility-apps ; 404media.co (fly.pieter.com) ; indiehackers.com (Photo AI, Bedtime Fan, Superpower, Easy Folders, 30-app portfolio; snippets only, pages 403) ; stationlm.com and trysonar.app (Max portfolio and ASO tool summaries) ; splitmetrics.com/blog/apple-search-ads-cost ; appfollow.io/blog/app-store-optimization-cost ; expo.dev/pricing.md ; thenextweb.com/news/vibe-coding-apple-app-store-surge-crackdown ; developer.apple.com/forums (4.3 threads) ; support.google.com/googleplay/android-developer/answer/9899034.

## Verdict
**Supports** the bet as a portfolio lane, with conditions: evidence of money is strong for creator/ad-fed and AI-native apps, but weak for no-audience ASO-only apps (best verified: $26-$60 MRR; best claimed: ~$1.5K per app). Gate: not yet G1 for any specific app; each concept needs verified competitor revenue and a named channel.
**What would change my mind:** a verified (RevenueCat/TrustMRR) no-ad, no-audience app above $2K MRR on ASO alone would strengthen A; Apple or Google removing a templated portfolio, or a month-1 creator test returning <$0.50 per install, would weaken it.
**Next cheapest test ($0):** run the niche-scoring method on 20 niches using TrustMRR plus free App Store data, build 3 waitlist/landing pages, and measure signups from Reddit/outreach before any account fee.
