# Studio operations: production, QA and listing stack for 5 products/week at <=1.5 owner-h/day
Date: 2026-10-10. Lane: ops stack (not demand). Policy base: `charter/policies.md` (owner creates accounts, accepts agreements, publishes, pays, contacts third parties; agents prepare).

Tag key: [verified] = read on a primary page 2026-10-10; [claimed] = secondary/unchecked; [assumed] = my estimate. Many primary pages returned HTTP 403 to the fetch tool (Etsy help/legal, Midjourney docs, OpenAI terms, Canva license), so most Etsy and licensing detail is [claimed] and must be re-read by the owner in a browser before listing.

## 1. Automation rules by platform
| Platform | What an agent can automate | What stays manual / owner | Evidence |
|---|---|---|---|
| Etsy | Open API v3: createDraftListing (needs quantity, title, description, price, who_made, when_made, taxonomy_id), uploadListingFile (multipart), OAuth2 PKCE, scopes listings_r/listings_w | Creating the API app and approval; shop, payout and tax setup; Publish click. Etsy may reject API access "for any reason"; commercial access is a separate review; one developer reports bans and no human replies. Higher rate limits only by emailing Etsy (limits are per app key, shown in the developer portal) | Endpoint names and upload: [claimed] (tutorial and search snippets). Rate-limit page, higher limits by email: [verified] developers.etsy.com/documentation/essentials/rate-limits. Access tiers and approval: [claimed]. Etsy legal/API terms: 403, could not verify |
| Gumroad | REST API v2 incl. POST /v2/products (scope edit_products); OAuth token from your app page | Account, payouts. File upload through the API: could not verify | [claimed] (docs mirror via search); gumroad.com/api not read |
| Payhip | Public API v2 covers ONLY coupons and license keys; orders arrive by signed webhook | Product creation and upload are manual (dashboard) | [claimed] (search summary of payhip.com/api-reference) |
| itch.io | `butler push dir user/game:channel` (zip OK, `--userversion`, `--dry-run`, `--hidden`), fully CI-scriptable, MIT | Page creation, first publish, payouts. API key setup page not read | Push syntax [verified] itch.io/docs/butler/pushing.html; automation and MIT [verified] itch.io/docs/butler/ |
| Chrome Web Store | API: upload, publish, fetchStatus, cancelSubmission; needs Google Cloud project and OAuth; 2-step verification required; every update reviewed; version must increase | Dashboard Store listing and Privacy tabs before first publish; developer registration with a one-time fee (about $5, amount [claimed]) | [verified] developer.chrome.com/docs/webstore/using-api; fee [claimed] |
| CrazyGames | SDK integration is code; submission via the developer portal | Submit and QA tool is a human flow. Basic Launch: 7-21 days, monetization off, ends at 7+ days and 500 plays; revenue share % not on the page I read | [verified] docs.crazygames.com |
| Poki | SDK | Poki for Developers is closed beta; apply via submission form; revenue 100% on players you bring, 50/50 on players Poki brings | [claimed] (sdk.poki.com via search snippet) |
| Pinterest | API v5; Trial tier can create pins but only visible to you (sandbox); Standard needs a recorded demo of the OAuth flow even if you are the only user | Posting for real: use a partner scheduler (Tailwind free plan, paid from about $14.99/mo [claimed]; Buffer about $6/mo [claimed]) | Tiers [claimed] via search of the Pinterest access-tiers doc; page itself not fetched |
| TPT | No public API found (could not verify either way) | All listing manual. Seller AI policy: could not find; Chalkbeat (2026-08-03) reports low-quality AI "slop" on TPT, so expect quality scrutiny | [claimed] |
| KDP | None for disclosure | AI-generated text/images/translations must be disclosed at publish; AI-assisted (you made it, AI edited) need not be | [verified] kdp.amazon.com/en_US/help/topic/G200672390 |
| Steam | n/a | Disclose pre-generated and live-generated AI; live needs guardrail description | [claimed] (news summaries; Steamworks not read) |

What gets accounts banned: bulk-created near-duplicate listings, scraped or copied content, trademarked terms, undisclosed AI, and API access abuse. Etsy removals for AI violations are reported at 17,000+ in early 2025 [claimed, secondary]. Mitigation: <=5 original, differentiated listings/week, human Publish click, no scraping.

OVERCOME: Etsy API approval is slow or risky and we only need 5 listings/week. Agents prepare a complete "listing pack" (title, 13 tags, description, images, PDF, AI line, price) as files plus a CSV, and the owner pastes or uploads in about 6 minutes per listing. Apply for the Etsy personal-access app only after 10+ sales, and use it for draft creation only. Pivot platforms where API publishing is easy: itch.io (butler), Chrome Web Store, Gumroad.

## 2. Tooling and licensing
| Item | Commercial-sale status | Tag |
|---|---|---|
| Midjourney | Paid subscribers own assets; companies over $1M/yr revenue need Pro/Mega; trial users non-commercial; grants MJ a broad license | [claimed] (terms.law, Krea; MJ docs 403) |
| Ideogram | Licensing page: does not claim output ownership; commercial use OK if AUP/third-party rights respected; some summaries say free tier is personal-only. Treat as paid plan only | licensing page [verified] ideogram.ai/licensing (the page covers open-weights vs Self-Serve/API; it does not settle the app free tier); free-tier conflict [claimed] |
| Leonardo | Commercial downloads allowed on all plans; free generations public and Leonardo owns them; paid + private mode = you own | [verified] intercom.help/leonardo-ai/.../8044018 (ownership on free is [claimed] from search) |
| Recraft | Free plan: public, Recraft-owned, NO commercial use. Paid: full ownership and commercial rights, private | [verified] recraft.ai/docs/plans-and-billing/commercial-rights-and-ownership |
| FLUX | schnell Apache-2.0 (commercial OK); dev weights non-commercial but outputs usable commercially except to train competing models; running dev for revenue needs a BFL license | [claimed] (search quoting bfl.ai license v2.0) |
| Adobe Firefly | Guideline page read: no removal of Content Credentials, no infringing prompts. Commercial/stock terms NOT on that page | guidelines [verified] adobe.com/legal; commercial terms could not verify |
| OpenAI images | Terms page 403; could not verify | could not verify |
| Google Fonts | OFL-style open fonts; FAQ page returned no content; verify per font. Safe rule: only OFL/Apache fonts, keep license file in repo | could not verify (page empty) |
| Canva | License page 403. Do not rely on Canva elements for resold templates until read | could not verify |
| US copyright | Copyright Office AI Part 2 (2025-01-29) addresses copyrightability of AI outputs; conclusions not read | [verified] existence only. [assumed] pure-AI art may be unprotectable, so others can copy it: add human-authored layout/text |

Rules for us: use ONLY a paid, private plan for any art we sell; log tool, plan, date and prompt for every image (provenance); never sell prompts; never sell raw AI images as stock; sell the designed product (layout, text, puzzle logic). Prefer code-made assets (SVG, HTML/CSS, procedurally generated puzzles) which need no image-model license and are our own authorship.

Production tools (all free): HTML to PDF via Playwright `page.pdf()` (Chromium; Letter 8.5x11in and A4 210x297mm, 0.125in bleed + crop only if the product is print-on-demand), WeasyPrint, or Typst (accessible tagged PDF support in recent versions [assumed, verify]). QR via `qrcode` library. Mockups: code-rendered (Playwright screenshot of the PDF page placed on a CSS desk/paper scene) so no Placeit fee. Fonts: bundle OFL fonts. Ownership claims in mockups must show the real product.

## 3. QA pipeline (agent-run, evidence to `qa/` per SKU)
1. Solvability: puzzle generator emits the solution; a separate solver script must find exactly one solution (mazes, sudoku, word search, crosswords with dictionary check). Fail = regenerate.
2. Proofread: second agent (different prompt) checks spelling, grade level, factual claims; Chalkbeat shows missing-letter and misspelling failures are the failure mode buyers notice.
3. Layout: headless render, check no overflow, pages count, fonts embedded (`pdffonts`), margins >= 0.25in, rasterize at 100 dpi, a vision agent reviews each page screenshot; PDF tags/alt text/title/language metadata for accessibility.
4. Originality and IP: reverse-image search of hero images (Google Lens/TinEye by owner or agent browser), phrase search for text, check title/tags against USPTO TESS (trademark search) and the Etsy banned-terms/trademark list; no brand, character, franchise or "inspired by" terms. [assumed procedure; sources not fetched]
5. Disclosure: auto-insert platform text (below). Gate: all five green, then the owner's 2-minute visual check.

AI disclosure templates (adapt after reading each live policy): Etsy: set attribute "Designed by" and tick the AI-generation checkbox if present, and add: "Layout and content designed by [shop]. Illustrations created with AI image tools and edited by us." (Etsy "Designed by" plus description disclosure: [claimed], 3rd-party; official page 403.) KDP: tick "AI-generated" for any AI art/text [verified]. Steam: pre-generated disclosure [claimed]. itch.io: use its generative-AI tag on the page [assumed, not checked].

## 4. Ops
- SKU tracking: repo folder `products/<SKU>/` with `meta.yaml` (platform, price, version, status), `provenance.csv` (tool, plan, date, prompt hash, license URL), `qa/`; master `portfolio/skus.csv`. Zero cost.
- Analytics: owner exports Etsy/Gumroad/Payhip CSVs weekly into `data/`; agent computes sales, conversion, refunds against G3 thresholds (3 stranger sales, >=1% conversion, <10% refunds).
- Bookkeeping: CSV plus `tools/portfolio.mjs` (the only ledger writer); monthly marketplace payout reconciliation by agent; hand to an accountant or free tool at tax time [assumed].
- Tax: Etsy collects and remits VAT/sales tax on digital items via marketplace facilitator rules in many regions (US help page quoted by search [claimed]); sellers still report income. Gumroad says it handles all tax obligations since 2025-01-01 [claimed, search quote of gumroad.com/pricing]. Payhip collects and remits EU VAT and UK VAT automatically; merchant-of-record wording not stated [verified payhip.com/pricing]. Consequence: stay on marketplaces/MoR platforms; do NOT self-host checkout (would make us the VAT collector).
- Fees: Etsy $0.20 listing + 6.5% transaction + 3%+$0.25 processing, ~10-12% before ads [claimed]. Gumroad 10%+$0.50 direct, 30% via Discover, fees not refunded [claimed]. Payhip Free: 5% + processor; Plus $29/mo 2%; Pro $99 0% [verified].
- Support: reply <=24h, templates for (a) file won't open, (b) wrong size, (c) refund. Digital goods: Etsy is no-returns by default but refund goodwill under $10 to protect the shop's rating [assumed]; chargebacks: owner responds with order and download log. Agents draft; owner sends (third-party contact rule).
- Email consent: no list until an opt-in form with disclosed purpose (GDPR/CAN-SPAM) [assumed]; the data policy says minimal collection.

## 5. Cost model
Lean ($0-$100/mo): Claude agents on existing plan (Pro $20/mo or Max from $100/mo [verified claude.com/pricing]); Playwright/WeasyPrint/Typst $0; Tailwind free or Buffer ~$6 [claimed]; one paid image plan if art is needed: Recraft/Ideogram/Leonardo about $10-20 [assumed, plans not verified except Ideogram Plus $20 and Pro $60 as [claimed]]; Etsy listings 5/wk x $0.20 = about $4/mo [claimed fee]. Typical total: $30-60/mo.
Scale (about $150-400/mo [assumed]): Max, Tailwind paid, 2 image plans, Chrome fee, a bookkeeping app, QuickBooks/Wave [price not checked].
Token cost per asset [assumed calc], Sonnet 5.5 API at $2 in / $10 out per M [verified claude.com/pricing]: research+design+copy+QA about 400k input and 80k output = $0.80 + $0.80 = about $1.60; double for retries = about $3/asset. 5/wk (22/mo) = about $35-70/mo at API rates; cache reads at $0.10/M or a flat plan lowers this. Haiku 5.5 ($0.10/$0.50) for proofreading/classification cuts it further.

## 6. Agent roster and handoffs
Researcher (demand evidence, trademark/keyword checks) -> Designer (spec, layout HTML, art prompts) -> Producer (renders PDFs, mockups, QR) -> QA (solver, proofread, layout, IP) -> Listing/Copy (title, tags, description, AI line, pack) -> OWNER publishes -> Growth drafts (Pinterest pin copy, 3 pins/product) -> Bookkeeper (CSV import, ledger via CLI, weekly scoreboard). Red-team-skeptic reviews before any gate promotion.

## 7. Owner checklist (<=1.5 h/day)
Daily (about 45 min): 10 min review overnight QA report and approve/reject 1 product visually; 15 min publish 1 listing from the pack (upload PDFs, paste text, tick AI box, click Publish); 10 min answer/send drafted support replies; 10 min schedule/post pins from drafts.
Weekly (about 2 h of the 10.5 budget): Mon 20 min approve the 5-SKU plan; Fri 30 min export CSVs to `data/`, read scoreboard; 30 min check platform policy emails and Etsy shop health; 30 min one-time-only tasks (account steps, payouts, tax details).
Monthly: 30 min bookkeeping review; re-read live Etsy Creativity Standards and tool licenses (rules changed in 2026 per secondary sources).

## 8. Obstacle -> solution
| Obstacle | Solution |
|---|---|
| Etsy API approval denied/slow, ban risk | Don't depend on it: listing packs plus owner paste (6 min); API later for drafts only |
| Many primary policy pages block agents (403) | Owner reads once in a browser, saves PDF to `compliance/`; agents work from those copies |
| Free image tiers deny commercial rights | Paid private plan only, or code-made art; provenance log |
| Raw AI art not copyrightable, easily copied | Sell designed systems: layout, puzzles, text, bundles; add human-authored elements |
| AI "slop" reputation (Chalkbeat) | Solver/proofread/visual QA gates; 5/wk cap; niche specificity |
| Tax/VAT burden | Marketplace/MoR platforms only |
| Refunds/chargebacks | Clear listing, preview images, 24h support, goodwill refunds, keep download logs |
| Pinterest API needs approval | Use Tailwind/Buffer with drafts; owner schedules |
| Poki closed beta, CrazyGames gate (500 plays) | itch.io and CrazyGames Basic Launch first; Chrome extension via API as a second path |
| Owner time overrun | Cap WIP to 5/wk; batch posting; kill SKUs failing G3 metrics |

## Verdict: SUPPORTS (conditionally) the studio model
Producing 5 products/week with agents is feasible at about $30-60/mo, with the owner's daily publish step as the bottleneck; the owner time budget fits (about 45 min/day, 5 h/week). Unverified: Etsy official AI/API rules, TPT rules, OpenAI/Adobe/Canva licensing. This brief says nothing about whether buyers will pay (demand lane).

Source URLs: itch.io/docs/butler/pushing.html; itch.io/docs/butler/; developer.chrome.com/docs/webstore/using-api; docs.crazygames.com; developers.etsy.com/documentation/essentials/rate-limits; payhip.com/pricing; claude.com/pricing; kdp.amazon.com/en_US/help/topic/G200672390; recraft.ai/docs/plans-and-billing/commercial-rights-and-ownership; ideogram.ai/licensing; intercom.help/leonardo-ai/en/articles/8044018-commercial-usage; adobe.com/legal/licenses-terms/adobe-gen-ai-user-guidelines.html; bfl.ai/legal/non-commercial-license-terms; gumroad.com/pricing; payhip.com/api-reference/coupons; sdk.poki.com; chalkbeat.org/2026/08/03/ai-slop-on-teachers-curriculum-marketplace/; copyright.gov/ai/; terms.law/ai-output-rights/midjourney/; help.etsy.com/hc/articles/360000343968.

## What would change my mind
- Etsy denies a personal API app or flags a listing for AI after we followed disclosure: shift to Gumroad/Payhip/itch.io plus Pinterest.
- Owner finds publish step takes >10 min/listing: reduce to 3/wk.
- Reading primary Etsy/TPT AI rules shows bans on AI-designed digital templates: pivot to code-generated puzzles, tools, or games.
- Any "paid" image plan turns out to deny resale as templates.

## Next cheapest test ($0, 1 h owner)
Owner reads Etsy Creativity Standards, Etsy API terms, TPT seller terms and the paid-plan terms of one image tool in a browser and saves them to `compliance/`. Agents then build ONE product pack end to end (HTML to PDF, solver QA, mockup, disclosure text, listing pack), the owner times the publish step, and we log the real minutes.
