# AI game-dev capability and AI-game outcomes (2026-10-10)

Question: what can an AI-run studio build well now, and what do AI-built games earn? Retrieval date for all links: 2026-10-10. "P" = primary page read; "S" = secondary or aggregator. Several searches returned summaries, not the pages. Those are marked [claimed].

## 1. Capability and verification

| Finding | Tag | Source |
|---|---|---|
| GameCraft-Bench (140 Godot tasks, 15 genres, published 2026-06-17): best agent, Claude Code with Opus 4.7, scored 41.5% overall. Sub-scores: core mechanics 55.3%, content depth 39.5%, art/presentation 36.9%. GPT-5.5 scored 39.5%. | [claimed] (news recap of arXiv 2606.17861; paper not opened) | aiweekly.co |
| Recurring failure: tests pass but the game is unplayable. In one dev log, damage was zero for 60 s and level-ups came every 3.9 s. The agent can verify correctness, not fun or feel. | [claimed] (one blog, via search summary) | mrphilgames / chierhu Medium |
| Text-based engines suit agents better. Godot's project files are readable text. Unity needs manual GUI/hierarchy steps. Headless Godot builds and deploys work from the CLI. | [claimed] (blogs) | Medium, substack, classmethod.jp |
| Claude Code works best on 2D, logic-driven, code-defined games and struggles with 3D at scale. | [claimed] | chierhu Medium (403 on direct fetch) |
| A Japanese solo dev's "30-day ledger" reportedly shows 5 games shipped on a $200/month plan for $4.99 revenue. I could not locate the original. | [claimed], not traced to source | search summary only |
| A vendor blog cites a CMU study of 807 repos: AI-assisted code was more complex and the velocity gain faded in about 2 months. | [claimed] (vendor blog) | ziva.sh |
| An ex-Voodoo exec told the FT that AI cut development time from about 14 to 10 days. | [claimed] | digitaltrends.com |

No GDC talk or full studio post-mortem was found for an agent-built commercial game. Roblox Luau, Unity, and RL/self-play playtesting got no usable evidence. Could not verify.

Our own policy (deterministic sim tests, balance bots, browser smoke, screenshot review) addresses correctness. It does not address fun. The evidence above says a human taste check is the binding constraint.

## 2. Assets and licences (terms checked from vendor pages where noted)

| Tool / type | Commercial-use terms | Tag |
|---|---|---|
| Meshy (3D) | Paid plan: you keep the assets, no credit required. Free plan: CC BY 4.0, credit required. Uploaded references must be rights-cleared. | [verified] (intercom.help/meshy FAQ, 2026-10-10) |
| ElevenLabs (voice/SFX) | Free users: non-commercial only. Paid users may use commercially. You retain rights in Output, but Output may not be unique across users. | [verified] (elevenlabs.io/terms-of-use, 2026-10-10) |
| Suno (music) | Free: Suno owns songs, non-commercial only. Pro/Premier: you own them. Songs may not be copyrightable. | [verified] (help.suno.com, 2026-10-10) |
| Midjourney | Commercial use needs a paid plan. Companies over $1M revenue need Pro/Mega. Official ToS returned 403. | [claimed] (secondary) |
| Tripo, Leonardo, Scenario, SD/ComfyUI | Not checked. Tripo's claim of "same as Meshy" comes from its own blog. Model-licence terms vary for SD/ComfyUI checkpoints. | could not verify |
| Procedural SVG, canvas shapes, WebAudio synth | No third-party licence risk. This is the lowest-risk option for us. | [assumed] |

Production quality: I found no primary evidence ranking asset types. [assumed] ordering, from Poki's guidance and the Steam flop data below, with no quality test run:
- Likely usable: UI, icons, backgrounds, SFX, procedural audio.
- Risky: consistent character sprite sheets and animation, tilesets, and 3D rigged characters. These need a style-consistency test before we commit.
- Visible AI art is where players object.

Cost per asset tool: only plan names were seen, no verified price. [assumed] about $10–30/month per paid tier. Check pricing pages before any spend.

## 3. Commercial outcomes and platform rules

| Finding | Tag | Source |
|---|---|---|
| Steam releases with an AI disclosure: 10.9% (2024), 19.9% (2025), 30.8% (2026 to July), from a census of 53,597 releases by Sulka Haro. | [claimed] (secondary coverage; not Valve data) | fragwyz.substack, pcgamer |
| AI-flagged games were about 530 launches/month against about 1,320 non-AI. Their estimated sales share was 10–27%, built on the Boxleiter method (reviews x 30 x price), which is rough. | [claimed] | fragwyz.substack |
| AI games reach 100+ reviews at about 55% of the non-AI rate, with no improvement in 2 years. The top 1% of titles take about 94% of estimated revenue, and 28% of games get zero reviews. | [claimed] | fragwyz.substack |
| Games using gen-AI on Steam earned about $660M in total: 12 games made tens of millions, 33 made several millions, and 9,556 made under $10k. Single analytics firm, Nov 2025. | [claimed] | mezha.ua recap |
| Pieter Levels' browser flight sim: $12k MRR (May 2025), later cited as $138k MRR (May 2026). Self-reported, from roundups. | [claimed] | indiehackers, sorceress.games |
| No audited revenue for any agent-built game was found. | could not verify | – |
| Backlash cases (2026): Party Animals went "Mostly Negative" after an AI video contest (apology issued). Vapor World's AI cutscenes drew 64 reviews at 36% positive. Players object to visible AI, less to backend use. | [claimed] (trade blogs) | ingamenews, everythingedinburgh |

Platform rules:
- **Steam** [verified]: the Content Survey separates pre-generated from live-generated AI. Live-generated needs guardrails described. Dev-speed tools are not covered. Source: partner.steamgames.com Content Survey.
- **itch.io** [verified]: there is an AI Disclosure field and tags. Asset pages that skip tagging may be delisted. Mass-produced or mostly-AI, minimal-human, near-identical iterations are treated as spam. Source: itch.io/docs/creators/quality-guidelines.
- **Poki** [verified]: AI is allowed, but "games created (solely) with AI can create IP ownership issues." Poki may ask for tools, prompts and process. No watermarks or prompt text may show. Clones are rejected. Source: developers.poki.com/guide/content-player-safety.
- **Google Play** [verified]: apps that generate content with AI need in-app reporting and must prevent restricted content. Fixed-content games aren't specifically addressed. Source: support.google.com/googleplay/android-developer/answer/13985936.
- **Apple** [verified, only the first 100k chars read]: 4.3 spam, 4.2 minimum functionality, 4.1 copycats. No AI-specific game rule seen. Source: developer.apple.com App Review Guidelines.
- **CrazyGames, Roblox**: no AI policy found. Could not verify.

## 4. Costs and human share
- Token/tool cost per small game: no verified figure. [assumed] for a 2D web game: tens of dollars of tokens and a few hours of agent time. That is a guess, and the ledger anecdote above is the only data point.
- The human still has to do the following: taste and fun judgement, final QA, accounts, agreements, publishing, payouts, and rights-clearing. Poki says humans should handle refinement, balancing and testing.

## 5. Legal
- **US Copyright Office, Part 2 (2025-01-29)** [verified that it exists, with the report URL from copyright.gov/ai]. Its core conclusion is [claimed], from law-firm summaries because the PDF would not parse: prompts alone do not make a user the author. Human-authored expression, selection, arrangement, and modification can be protected.
- **Implication [assumed]:** purely AI-generated art, music and perhaps code may be uncopyrightable, so others could copy them. Our moat is the brand, the human-curated design, and distribution.
- **Clone/trademark risk:** Apple 4.1 and Poki both reject clones. Our policy already bans cloning names, art and trade dress.
- No legal review was done. Compliance-officer review is needed.

## 6. Verdict
**Supports a narrow version of the bet; weakens the "studio of agents makes commercial games with owner only reviewing" version.**

Within reach for $500 [assumed, based on the evidence above]:
- Small 2D, rules-driven web games in Canvas/Phaser, or Godot text projects.
- Procedural or synthesized art and audio, which avoids licence and consistency problems.
- Games whose balance can be tuned by bots, plus an owner taste pass.

Not within reach:
- Complex 3D.
- Netcode or multiplayer.
- Content-heavy games.
- Anything needing consistent animated character art without a human art pass.

Quality bar: this probably meets "playable and bug-light" but not "distinctive". The best agent scored 41% on a benchmark, content and presentation are the weakest areas, and AI-flagged Steam games reach modest success at about half the non-AI rate.

Biggest risks:
1. Fun cannot be verified by tests.
2. Discoverability. Revenue is hugely concentrated, and AI volume is flooding stores.
3. Platform filters treat mass-produced or low-effort AI content as spam.
4. Player backlash against visible AI art.
5. Weak copyright protection on AI outputs.
6. Revenue claims in this space are almost all unverified.

**What would change my mind:**
- Toward supports: an audited post-mortem of an agent-built game with 1,000+ stranger players or real sales. Or our own prototype passing the G3 thresholds.
- Toward weakens: the owner finds our first prototype is not fun after the bot tests pass. Or itch.io or Poki rejects it as low-effort.

**Next cheapest test ($0):**
- Build one procedural-asset 2D game that already exists in the repo, with no paid generators.
- Add a one-page "human contribution log" to support Poki's process and IP questions.
- Have the owner rate fun 1–5 blind against 2 human-made browser games.
- If it scores below the human-made games, kill the "owner only reviews" model.
- Verify the unchecked items first: GameCraft arXiv 2606.17861, Midjourney and Tripo terms, and the 30-day ledger source.

## Unresolved
- Whether CrazyGames or Roblox have AI rules.
- Real per-game token cost.
- Sprite-sheet consistency across tools.
- Whether Haro's Steam census holds up against Valve's data.

## Sources
- https://partner.steamgames.com/doc/gettingstarted/contentsurvey
- https://itch.io/docs/creators/quality-guidelines
- https://developers.poki.com/guide/content-player-safety
- https://support.google.com/googleplay/android-developer/answer/13985936
- https://developer.apple.com/app-store/review/guidelines/
- https://www.copyright.gov/ai/
- https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-2-Copyrightability-Report.pdf
- https://ipwatchdog.com/2025/01/29/part-two-copyright-office-ai-report-says-creative-prompting-doesnt-constitute-authorship/
- https://intercom.help/meshy/en/articles/16102098-can-i-use-meshy-assets-commercially
- https://elevenlabs.io/terms-of-use
- https://help.suno.com/en/articles/2746945
- https://fragwyz.substack.com/p/three-years-of-ai-on-steam
- https://www.pcgamer.com/gaming-industry/steam-week-in-review-take-cover-because-it-looks-like-more-than-half-of-steam-games-will-have-an-ai-disclosure-by-2027-2028/
- https://aiweekly.co/alerts/claude-code-tops-ai-game-building-benchmark-at-41
- https://chierhu.medium.com/claude-code-for-game-development-7a88fcd19992
- https://mezha.ua/en/news/games-created-with-genai-grossed-660-mil-306152/amp/
- https://www.indiehackers.com/post/2NUIOp80SUWuPmmfKoS9
- https://www.digitaltrends.com/gaming/ai-and-vibe-coding-are-making-more-games-but-not-necessarily-better-ones/
- https://ziva.sh/blogs/vibe-coding-games
- https://everythingedinburgh.com/games/news/vapor-world-steam-ai-cutscene-backlash/
- https://www.ingamenews.com/2026/05/party-animals-steam-review-bomb-2026-ai.html
