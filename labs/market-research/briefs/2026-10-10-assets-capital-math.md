# Brief: Capital, base rates, compounding math and plumbing (portfolio-level)
Date: 2026-10-10. Analyst: research-analyst. Scope: $500 start, 1-2 h/day, US assumed. All pages retrieved 2026-10-10 unless noted.
Tags: **[verified]** = read on a primary page; **[claimed]** = secondary or unchecked; **[assumed]** = my estimate. Not legal or tax advice.
Method note: I had no code-execution tool this session. The model below is hand-computed arithmetic (checkable in a spreadsheet), not a script.

## 1. Base rates (what happens to small starters)
| Metric | Figure | Tag / source |
|---|---|---|
| Private establishments still open 1 / 2 / 5 / 10 yrs (March 2013 cohort) | 79.6% / 68.9% / 50.6% / 34.7% | [verified] BLS TED 2024, bls.gov/opub/ted/2024/34-7-percent-of-business-establishments-born-in-2013-were-still-operating-in-2023.htm. Caveat: establishments with employees; closures include sales and mergers. Solo micro-bets likely fail faster [assumed]. |
| Nonemployer businesses 2022 | 29.8M firms, $1.7T receipts (about 6.8% of economy) | [verified] census.gov/library/stories/2025/05/smallest-businesses.html |
| Mean receipts per nonemployer | about $57k per firm | [derived from the verified totals above]. This is a mean, skewed by real estate and construction. A median and receipts-size bands (under $5k to over $5M) are published nationally but **could not verify**: pages returned no values. |
| Nonemployer floor | counted only if receipts >= $1,000 (construction: $1) | [verified] Census 2022 NES release. Sub-$1k businesses are invisible in this data. |
| Side-hustle median / mean monthly income (2025) | $200 / $885 | [claimed] Bankrate via search summary. Bankrate page itself returned 404. Side Hustle Nation reports a $200 median too (also [claimed], vendor survey). |
| Share with a side hustle | 27% (Bankrate), 38% (LendingTree), 47% (QuickBooks) | [claimed], surveys disagree widely |
| Gig work in prior month (Fed SHED 2024) | 20% of adults, 13% sold things | [claimed] via secondary summary. Fed page 404. |
| Small-business cash buffer | median 27 days (2015 data) | [claimed] JPMorgan Chase Institute, search summary |
| **Share of first-time micro-entrepreneurs with <$1,000 capital reaching $1,000/mo net, and time taken** | **Could not verify.** No primary dataset found. | The honest answer is "unknown, probably a small minority"; do not plan on being in it. |
| Beginner-targeted AI/ecommerce programs | FTC alleges Ascend Ecom defrauded >= $25M; FBA Machine > $15.9M; EEB promised $10k/mo with no evidence | [verified] ftc.gov Operation AI Comply release, Sept 2024 (cases pending when issued) |
| US fraud losses 2025 | $15.9B reported; investment scams $7.9B | [claimed] FTC testimony summarised by press; data book not read |

Resale economics: eBay final value fee 13.6% (to $7,500) + $0.40/order over $10 [verified, ebay.com fee page]. Vendor blogs say reseller margins are 15-30% and sell-through of 50%+ is "safe" [claimed; sellers of reseller software, no independent median found].
Web-asset prices: Flippa H1 2026 average profit multiples by business model: content site 2.32x, ecommerce 1.55x, app 2.62x, SaaS 2.47x; by price band $10k-$100k 2.24x (top quartile 5.96x) [verified, flippa.com/blog/digital-ma-insights-h1-2026]. Multiples are presumably on annual profit [assumed; the page does not say]. Flippa's older guide quotes 30-45x monthly profit [claimed]. **The report shows no data below $10k deals.** Our $250-$500 range is unobserved; listings there are mostly unproven [assumed].

## 2. Benchmark to beat (Oct 2026)
| Instrument | Rate | Tag / source |
|---|---|---|
| 4 / 13 / 26-week T-bill, coupon equivalent, 10/09 | 4.03% / 4.16% / 4.33% | [verified] home.treasury.gov daily bill rates |
| 1-year Treasury (CMT), 10/08 | 4.44% | [verified] federalreserve.gov/releases/h15 |
| Effective fed funds | 3.88% | [verified] same H.15 page |
| FDIC national average savings / money market (Sept 2026) | 0.37% / 0.63%; rate cap 4.38% | [verified] fdic.gov/national-rates-and-rate-caps |
| Best HYSA / money-market fund yield | **Could not verify** from a primary page | Treat about 4% as obtainable, because bills yield about 4.2% [assumed] |

On $500, risk-free income is about $21/yr [derived]. **Hurdle:** a bet must show a realized net return well above 4.2% for risk and illiquidity. I set >= 25%/yr on capital deployed [assumed], and a positive logged hourly rate. At 45 h/mo, 540 h/yr at an assumed $15/h opportunity cost is about $8,100/yr, which no strategy below clears in year 1. At this scale these are skill and option-building, not income replacement.

## 3. Compounding model (12 months, $500 start, $250 reserve untouched so max loss is $250 of deployable)
Probabilities and returns are my **[assumed]** judgement. No first-timer dataset exists. The 25% "ruin" weight is anchored loosely on the 20.4% first-year establishment exit [verified, BLS]. Tax is not modelled for A and B. C is net of an assumed tax set-aside.

**A. Resale flipping** (deployable $250 compounding monthly; net return per month after fees, returns and dead stock)
| Scenario | Prob | Monthly net return [assumed] | Month-12 total incl. reserve |
|---|---|---|---|
| Ruin/quit (dead stock, give up) | 25% | lose 60% of deployable | $350 |
| Pessimistic | 35% | -5%/mo (0.95^12 = 0.54) | $385 |
| Base | 32% | +12%/mo (1.12^12 = 3.90) | $1,224 |
| Optimistic | 8% | +25%/mo (1.25^12 = 14.6) | about $3,890 |
Probability-weighted: **about $925**. Median: $385. P(end < $500): 60%. Capital stops being the constraint when profit hits the time cap. Assume about 0.75 h per item and $8 net per item, so 45 h/mo caps near $480/mo [assumed]. At 12%/mo that needs about $4,000 inventory, roughly month 25 from $250. Reaching $1,000/mo net would need more hours or higher-margin items.

**B. Buy-and-improve a small web asset** (one $250 purchase at about 24x monthly profit [assumed, 10x cheaper than Flippa's guide because tiny assets are unproven]; value marked at 12x monthly profit for illiquidity)
| Scenario | Prob | Assumption | Month-12 total |
|---|---|---|---|
| Ruin (fake metrics, transfer fraud, penalty) | 25% | lose purchase | $250 |
| Pessimistic | 35% | profit decays; about $60 cash + $30 mark | $340 |
| Base | 30% | $10.4/mo rising to $15.6/mo after 3 months; $171 cash + $187 mark | $608 |
| Optimistic | 10% | profit triples to $31/mo; $309 cash + $375 mark | $934 |
Probability-weighted: **about $457, below the $500 start**. Median: $340. Attention, not capital, binds first: each site needs recurring hours. Meaningful deals start about $10k (Flippa's lowest reported band), so web-asset buying is not a $500 strategy.

**C. Service-funded** (AI-assisted micro-services sold on a marketplace; income funds later purchases; $10/mo tool cost [assumed]; income net of fees and tax set-aside; starts month 4)
| Scenario | Prob | Net income | Month-12 total |
|---|---|---|---|
| Never lands paying clients | 35% | $0 | $380 |
| Pessimistic | 25% | $70/mo | $1,010 |
| Base | 30% | $200/mo (near the claimed $200 side-hustle median) | $2,180 |
| Optimistic | 10% | $600/mo | $5,780 |
Probability-weighted: **about $1,617. Median: $1,010. P(end < $500): 35%.** The gain is mostly labor income, not capital compounding. Base pays about $4/h on about 405 working hours, optimistic about $13/h. No scenario reaches a sustained $1,000/mo net inside 12 months [assumed].

Read-across: C beats A and B because it risks little capital and the payoff comes from hours. A and B are capital-limited, but the volume is too small to matter. The idle-game "reinvest and bigger asset" loop only becomes real after a positive cash engine exists (C or A).

## 4. Plumbing checklist (owner executes; staff prepares)
- **Start as a sole proprietor.** No entity is needed to test. An LLC adds cost and offers little protection at $500 [assumed].
- **EIN:** free from IRS online, one per responsible party per day; avoid paid "EIN services" [verified, irs.gov EIN page]. Optional for a sole proprietor (the SSN can be used) [assumed].
- **LLC costs** [claimed, third-party guides; state sites 404 or blank]: Wyoming $100 formation + $60 minimum annual report; Delaware about $90 formation + $300 annual tax. **Home-state LLC is usually cheaper overall** if you live in the state, because a WY/DE LLC still has to register in your home state [assumed]. Home-state fees not researched, so **could not verify**.
- **Bank:** Mercury basic business checking, $0/mo and no minimum; FDIC coverage runs via partner banks, up to $5M via sweep [verified, mercury.com/pricing]. A separate free account is enough to keep business and personal money apart.
- **Processors:** Stripe 2.9% + $0.30 domestic, no monthly fee [verified]; PayPal 3.49% + $0.49 [verified]; eBay 13.6% + $0.40 [verified]. A $5 sale loses about 15% to a processor. Wise not checked.
- **1099-K:** for 2026 the threshold is > $20,000 AND > 200 transactions, reinstated by OBBBA §70432 [claimed: TaxAct and others citing IRS Fact Sheet 2025-08; the IRS page I tried returned 404]. All income is taxable regardless of any form [claimed].
- **Sales tax:** marketplace-facilitator laws generally have Etsy and eBay collect for sellers; economic nexus is commonly $100k of sales in a state, with some states adding a transaction count; digital-goods treatment varies by state [claimed, vendor blogs]. Sales on your own site are not covered by the marketplace. **State-by-state could not verify.** Risk is low below about $10k/yr [assumed].
- **Taxes:** report on Schedule C; self-employment tax applies at about 15.3% on net profit (general knowledge, [assumed]). Set aside 25-30% of net profit [assumed]. IRS hobby/business page returned 404, so the hobby-loss rules were not verified.
- **Bookkeeping:** Wave Starter $0, Pro $19/mo [verified, waveapps.com/pricing]. A CSV export plus a spreadsheet kept by AI is enough at this size, and the ledger CLI already tracks cash.
- **Insurance:** an online BOP runs about $40-$125/mo [claimed, affiliate blogs; no primary quote]. Skip it for bets under $250. Avoid physical goods with injury or recall risk (electronics, children's goods, supplements, cosmetics). Add it when revenue passes about $1k/mo or a platform requires it.
- **Seller verification:** each marketplace will want identity and bank details. Owner-only. Verification timelines were not researched.

## 5. Adding capital without hurting the plan
- **Default:** reinvest realized profit only. Split 60% reinvest / 40% tax + reserve until the reserve is rebuilt [assumed].
- **Wage top-ups:** allowed only on a schedule at a gate, capped at about $100/mo, never from credit cards, loans or rent money [assumed].
- **Selling unused items:** a one-time source. Count at net cash received. It doubles as a free flipping test and builds cost-basis records [assumed].
- **Do not add capital when:**
  - the channel has no stranger payment yet;
  - the gain is paper (inventory mark or asset valuation);
  - hours, not cash, are binding;
  - a bet is inside its kill window;
  - there is no 3-month personal emergency buffer;
  - tax set-aside is unfunded;
  - a seller or guru urges urgency;
  - after a loss, to "average down";
  - the money is borrowed.

## 6. Risk management and red flags
Sizing: one bet <= 20% of deployable capital and <= 3 concurrent. Kill at -50% of the bet, or 60 days with no stranger payment. Total loss from the hard reserve is zero until Gate 4.
Red flags [FTC cases above are verified; the rest are general, [assumed]]:
- promised $/month income, or "AI does it all" passive income;
- paid "done for you" stores or courses from $2k to tens of thousands;
- "risk-free" or guaranteed refunds;
- cloud mining, staking or "AI trading bots";
- marketplaces that want payment by crypto, gift card or wire, or off-platform escrow;
- unverifiable site metrics, or sellers who refuse screen-share of analytics;
- pressure to act today, or recruiting others.
Never pay for a business-in-a-box. Use escrow.com or the platform's own escrow for any asset purchase.

## Verdict: WEAKENS the "reinvest-and-compound from $500" thesis; SUPPORTS a capped, gated capital ladder
At $500 the constraint is demand and attention, not capital. Only the labor-funded strategy (C) has positive expected value in my [assumed] model. Treat compounding as a later phase.

### Recommended capital ladder
| Rung | Deployable | Entry | Exit / kill |
|---|---|---|---|
| R0 Test | $0-$25 per stage cap | G1 evidence | first stranger payment, or kill at the cap |
| R1 Micro-bets | <= $250 total (reserve $250 locked); bet <= $50 | R0 payment | -50% of the bet, or 60 days with no stranger payment; promote when realized net profit >= $250 over 90 days across 2+ months |
| R2 Engine | up to $750; wage top-ups <= $100/mo | R1 promote + >= 30 transactions at >= 20% net margin | a rung's metrics fall below entry for 2 months, drop a rung |
| R3 Inventory/assets | $750-$3,000; no single asset > 20% | $300/mo realized net for 3 straight months; reserve raised to 2 months of costs | asset payback > 30 months, or net return < 25%/yr |
| R4 Asset purchases | $3,000-$10,000+; this is where web assets ($10k+) become observable | $1,000/mo net for 3 months + red-team + owner approval | payback <= 30 months (>= 40%/yr yield), escrow only, <= 20% of liquid capital per asset |
Rule: promote on realized cash, never on marks. Demote after 2 consecutive months below entry metrics.

## What would change my mind
- A primary dataset (Census NES size bands, Etsy or eBay seller reports) showing a median new solo seller clearing $1,000/mo net inside 12 months.
- Verified sub-$1k web-asset sales with documented profit at 10-20x monthly.
- Our own first 30-day stranger-sale data beating the base scenarios above.
- A cheaper or more reliable service channel with verified $15+/h earnings.

## Next cheapest test ($0)
Log 2 weeks of hours and actual net results on one micro-bet per track (one service gig listing, one flip of an owned item). Compare realized $/h to the $15/h hurdle. Also pull the Census NES receipts-size table (data.census.gov) and the Bankrate PDF to replace the [claimed] rows.

## Sources
bls.gov/opub/ted/2024/34-7-percent-of-business-establishments-born-in-2013-were-still-operating-in-2023.htm · census.gov/library/stories/2025/05/smallest-businesses.html · census.gov/newsroom/press-releases/2024/2022-nonemployer-statistics.html · home.treasury.gov (daily bill rates, Oct 2026) · federalreserve.gov/releases/h15 · fdic.gov/national-rates-and-rate-caps · flippa.com/blog/digital-ma-insights-h1-2026 · ebay.com/help/selling/fees-credits-invoices/selling-fees?id=4822 · stripe.com/pricing · paypal.com/us/business/paypal-business-fees · mercury.com/pricing · waveapps.com/pricing · irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online · ftc.gov/news-events/news/press-releases/2024/09/ftc-announces-crackdown-deceptive-ai-claims-schemes · secondary: blog.taxact.com (1099-K), cpapracticeadvisor.com/2025/10/23 (IRS FAQs on $20k), wise.com/us/blog/wyoming-vs-delaware-llc, zenind.com Wyoming guide, jpmorganchase.com/institute, FTC JEC testimony (March 2026) press coverage.
