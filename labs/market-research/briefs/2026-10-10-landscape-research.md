# Landscape research: what AI-built businesses actually earn, and what is penalized
**Retrieved:** 2026-10-10 (web search + fetch from the build environment). **Source quality:** almost everything below is secondary (blogs, vendor reports, news). Only items marked **[verified]** were read on a primary page. Treat numbers as directional until a primary source is checked.

## 1. Base rates (the part that should shape every decision)
| Channel | Finding | Tag |
|---|---|---|
| Steam games | ~66% of 2025 releases earned < $1,000; 2025 median gross ≈ $249 (another source: 2026 releases ≈ $1,728 median; puzzle/arcade/platformer medians ≤ ~$1,000). Free games with no monetization earn ~nothing. | [claimed] third-party trackers (VG Insights/Alinea/Gamalytic via news) |
| itch.io browser games | No rigorous median exists. Anecdotes: ~$7.3k over several years mostly tips; $23.99 on 22.4k plays. Staff: average is meaningless with 230K games. | [claimed] anecdotes |
| Chrome extensions | Dataset of 112 revenue-verified extensions: **57.1% earn $0/mo, 6.3% clear $1,000/mo, mean $295/mo.** Freemium install→paid median ~2.2%. | [claimed] vendor dataset (BigIdeasDB), small n |
| Micro-SaaS | One guide: median ~$500/mo, ~70% never pass $1k/mo (unsourced). Only 0.2% of solopreneurs pass $1M/yr (Founder Reports via blog). | [claimed] |
| Etsy shops | Analysis of 164k shops: mean ~$35.6k/yr, **median ~$6.9k/yr**; ~50% of shops have ≤10 lifetime sales. New digital shops often $50–$200/mo. | [claimed] blog/vendor |
| Gumroad | Most creators < $200/mo in year one; < 20% of new accounts make > $100 in 3 months. Income tracks audience (1,000+ email subs → $500–$5k/mo). | [claimed] blog |
| Shopify apps | Top 1% of apps earn ~72% of revenue; 1 in 20 charge upfront. | [claimed] RevenueHunt (public-listing estimates) |
| Subscription apps (RevenueCat, 115k apps) | New launches ~15,000/month; median app revenue growth ~5%; bottom quartile shrank 33%. Concentration at the top. | [claimed] via news summary of report; PDF not read |
| Solo-founder "portfolio" | One post: Pieter Levels launched 70+ projects, ~4 made meaningful money (~5% hit rate). Viral hits can fall to $0. | [claimed] |

**Implication:** the realistic outcome for any single cheap bet is $0. Winners are rare, so the strategy must be **many very cheap, fast tests with hard kill rules**, not a few lovingly built products. At a ~5% hit rate (an upper bound for a no-audience operator), $500 buys roughly 20 experiments at ~$25 each: one hit is plausible, none is also plausible.

## 2. What is provably being penalized (avoid)
- **YouTube:** channel-level "inauthentic content" enforcement against mass-produced, templated, low-commentary AI content; Partner Program thresholds reportedly doubling Feb 2027. [claimed] (policy page not read) → AI video-channel farms are **out**.
- **Google Search:** "scaled content abuse" targets many low-value pages regardless of how they're produced; no published threshold; manual deindexing waves reported. [claimed] → generic AI content/affiliate sites are **out**. AI Overviews reportedly cut position-1 CTR ~34–47% when shown [claimed]; no clean data for calculator/tool sites.
- **Amazon KDP:** AI text/images must be disclosed; enforcement reportedly tightened in 2026; daily upload caps exist (3/day unverified). [claimed] → low-content/AI book mills are **out**.
- **Etsy:** AI disclosure and human-involvement labels; prompt-output-only listings reportedly suppressed. [claimed; primary page 403]
- **FTC vs accessiBe:** $1M settlement over claims its overlay made sites WCAG-compliant in 48h. [claimed, law-firm summaries] → any accessibility product must **not** promise compliance.
- Pattern: platforms punish *volume without value*, not AI itself. Our edge must be genuine utility, not output count.

## 3. Where real money was reported (and how much to believe it)
| Case | Claim | Confidence |
|---|---|---|
| Pieter Levels portfolio (Nomad List, Remote OK, Photo AI…) | $200k–$420k/mo, sources conflict | [claimed]; built over a decade with a large audience |
| Base44 (solo, sold to Wix, $80M) | exit June 2025 | [claimed]; extreme outlier |
| Payout app (finds class-action settlements; built with Claude Code/Cursor) | Acquire listing ~$52k MRR; Starter Story $84k/mo (May 2026). The "$45k in 50 days" figure appeared in none of the primary-ish sources. | [claimed]; **not Stripe-verified**; consumer-subscription app |
| Habit Pixel | ~$1k MRR after 8 months, via Uneed launch spikes, seasonal timing, regional pricing | [claimed], Indie Hackers post |
| FormFlow AI | first $1k via cold DMs to Shopify owners complaining on X | [claimed] **violates our no-outreach rule** |
| TrustMRR leaderboard | **[verified]** page read: top MRRs $200k–$3.6M; categories include AI, SaaS, dev tools, fintech etc. Small-revenue listings for sale look weak (e.g. an AI product at $652 revenue asking $9k). | [verified] listing page; revenue verified by Stripe/RevenueCat/App Store per site |

The loud success stories are survivors with audiences, years of reps, or lucky timing. None is a repeatable recipe for a no-audience operator with $500 and no outreach.

## 4. Structural tailwinds worth testing (not yet evidence of demand)
1. **Deadline/enforcement-driven buyers.** EU AI Act Article 50 transparency duties apply from Aug 2, 2026 (high-risk Annex III slipped to Dec 2, 2027); EU Accessibility Act applies since Jun 28, 2025; US federal web-accessibility suits rose 27% to 3,117 in 2025 (Seyfarth via vendor blog). Forced buyers pay. But: B2B, incumbents exist, legal-claim risk is high. [claimed]
2. **Cheap-for-the-buyer tools sold inside a marketplace that already has the buyer** (Etsy tools, Chrome Web Store, Shopify). Distribution is solved, but prices are low and free alternatives exist.
3. **Vertical, "unsexy" B2B workflow tools** (vertical CRMs, compliance trackers). Many listicles; few verified numbers. Typical caveat: sales needs outreach we don't do.

## 5. Direct checks of the source chat's top ideas
- **Escape-room kits (B002):** could **not** find the claimed shop (33.5k sales); the claimed number is unverified. Found established competitors (MysteryLocks 60+ themes, Trustpilot 4.5 from 72 reviews; many Etsy listings; one fixed game at ~$16). Found **no** dedicated AI *custom printable* generator with clear pricing: either a gap or evidence that buyers prefer finished themed kits. Unresolved. [claimed/unclear]
- **Etsy Profit OS (B003):** the market is crowded and cheap: Craftybase free pricing/fee spreadsheets, ZIK Analytics free fee calculator, Etsy templates priced ~$3–$10, ProfitTree free tier / ~$5.99 mo. eRank ~$5.99+ and Marmalead ~$19/mo do not do profit tracking (a gap, per reviews). **The planned $9–$19 price looks too high versus free/cheap alternatives.** Ceiling is low (100 sales ≈ $500–$1,000). Good as a fast test, weak as a business. [claimed]
- **Idle tower defense (B001):** a Steam clone-adjacent title (Zero Stress King) is estimated at ~37.7k copies / ~$160k gross by one tracker (medium confidence); the mobile incumbent earned peaks of $220k in a holiday week in the US (Sensor Tower, 2023). Genre has money, but at the top; Steam median is ~$249–$1.7k. [claimed]
- **MasHash / cloud mining:** still a no.

## 6. What this means
1. **No candidate yet has verified paid demand.** Every top idea rests on [claimed] numbers.
2. **The scarce resource is distribution, not building.** The AI factory's real value is making experiments nearly free.
3. Prefer experiments where (a) a buyer already searches or browses a marketplace, (b) the first test costs ≤ $25 and ≤ a few days, (c) failure is cleanly observable.
4. Games are a poor *first* bet on this evidence (median Steam outcome ≈ low hundreds of dollars; free browser games earn ~tips). Keep B001 as engine proof, not the lead.

## Sources (principal)
redwerk.com micro-SaaS list; taskade/aibusiness.vc/greyjournal solo-founder roundups; trustmrr.com (fetched); apify TrustMRR scraper docs; air.io & subsub.io YouTube policy coverage; ppc.land & seoquick (Google scaled-content abuse); authorsguild.org & writeo.app (KDP); bigideasdb.com Chrome-extension & Shopify datasets; extensionpay.com; revenuehunt.com; revenuecat.com State of Subscription Apps 2026; Yahoo/Ziva/Fungies/WN Hub Steam revenue distribution; dinogame.gg & itch.io forum; biztoolkit/outfy Etsy earnings; fungies/biztoolkit Gumroad; StartupOwl/Flippa/Acquire multiples; agent37 & totalum MCP/skills marketplaces; indiehackers.com Habit Pixel; rethinklab FormFlow; starterstory.com & acquire.com Payout listings; opensource.org & resultsense EU AI Act timeline; iubenda EAA; fkks/hudsoncook FTC–accessiBe; craftybase/zikanalytics/profittree Etsy tools; pocketgamer.biz/sensortower/raijin.gg idle-defense revenue; everything-pr/dev.to Levels coverage; techcrunch Amazon AI merch (Jun 8 2026).
