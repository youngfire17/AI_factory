# AI-native studio: tech stack, pipeline and quality bar (2026-10-12)
Lane: how technology makes AI a structural advantage. Background not repeated: 2026-10-10-games-ai-capability.md, 2026-10-10-studio-operations.md. Tags: [verified] = primary page read 2026-10-12 (URL in Sources); [claimed] = secondary or search summary; [assumed] = my estimate. Gate context: G1 needs [verified] paid-demand evidence per game; this brief supplies the engine and the evidence for formats, not a greenlight.

## 1. Stack decision
| Option | Agent-friendliness / testing | Evidence | Verdict |
|---|---|---|---|
| **TS + Phaser (render) over a pure-TS sim core** | Code-first, all text; sim runs in Node with no browser; Playwright drives the web build | Phaser 40.5k stars, MIT, v4.2.1 shown [verified, github]. Vampire Survivors began on Phaser, now multi-million seller, moved to Unity at v1.6 [claimed, wikipedia/phaser.io via search] | **PRIMARY** |
| Plain TS + canvas | Our existing prototype (seeded mulberry32 sim, `npm test`, `npm run balance`) [verified, repo] | Fewer features than Phaser; fine for puzzles/idle | Keep for tiny games |
| PixiJS | Renderer only, WebGL + WebGPU, 48.3k stars, MIT [verified, github] | You write the game loop | Swap-in renderer if Phaser is heavy |
| Three.js | 116.3k stars, MIT [verified]. | Agents are weaker at 3D at scale [claimed, capability brief] | Only for low-poly/primitive 3D |
| **Godot 4.x (GDScript)** | Text scenes, headless CLI, GUT/gdUnit4 tests and community MCP/skills that run tests and grab viewport screenshots [claimed, glama/smithery] ; GameCraft-Bench is built on Godot, best agent 41.46% [verified, arXiv 2606.17861] | 118.3k stars, MIT [verified]. Web export: single-thread default since 4.3, no C# on web, WebGL2/Compatibility renderer only, Safari WebGL2 issues, large wasm/pck [verified, docs]. 4.7 (Jun 2026) wasm64 [claimed, cinevva] | **SECONDARY** (3D, heavy-content, Steam-first games) |
| Unity | Runtime Fee cancelled 2024-09-12; Personal up to $200k revenue+funding; Pro $2,310/seat/yr from 2026-01-12 [verified, unity.com]. Community MCP servers exist; Unity's own in-editor server reportedly deprecated for CLI [claimed] | Editor/GUI-bound, binary-ish assets, heavier agent loop [assumed] | Skip |
| Defold | ~1.14 MB builds, smallest [claimed, cinevva]; 6.4k stars [verified]; Lua, thinner agent training data [assumed] | | Skip unless web size becomes a blocker |
| Bevy | 48.9k stars; pre-1.0, breaking changes about every 3 months, sparse docs [verified, github] | | Skip |
| Construct | Pricing page returned 403; could not verify | | Skip (not code-first) |
No head-to-head mobile-browser benchmark of Phaser/Pixi/Godot found; could not verify runtime performance claims, so we run our own device test in week 2.

**Ship targets from one codebase**
- Web: Vite build; itch.io via `butler push` (scriptable, MIT) [verified in prior brief]; CrazyGames/Poki SDK later.
- Mobile: Capacitor wraps the web build (web-first, native plugins in Swift/Java/JS) [verified, capacitorjs.com]. Apple 4.2 rejects thin web wrappers; sources say native features (notifications, offline, haptics, IAP) are needed [claimed]. Plan: add 3+ native plugins before submission. Fees: Apple $99/yr [claimed], Google $25 [could not verify].
- Steam: Electron + steamworks.js (MIT, 635 stars; achievements, cloud, overlay helper; needs contextIsolation:false; 52 open issues) [verified, github]. Overlay issues are reported in forums [claimed]. Tauri needs manual Steamworks integration and a 3-webview test matrix [claimed]. Steam Direct: $100/app, recoupable at $1,000 adjusted gross, 30-day wait for first titles, 2-week coming-soon page [verified, steamworks]. Owner does the account work.
- Decision rule: [assumed] keep each game's logic engine-agnostic (sim in TS, content in JSON) so a Godot port of a proven winner is cheap.

## 2. Art and audio that ships
Principle: ship styles that agents can make consistent *in code or with constrained generators*, and spend money only after a style test.
| Style | How | Consistency | Terms / cost |
|---|---|---|---|
| Vector/SVG code art, UI in CSS/Canvas | Agents write SVG/shape functions + palette tokens | Highest (deterministic) | No third-party licence; own authorship [assumed] ; $0 |
| Geometric / low-poly primitive 3D (Three.js) | Procedural meshes, flat shading | High | $0 |
| Pixel art via constrained generators | Retro Diffusion (RD Plus/Tile/Animation, up to 9 reference images for consistency, sprite-sheet output) [claimed, Scenario help + MCP docs]; PixelLab skeleton-posed sprites [claimed, third-party] ; Aseprite for human cleanup | Medium; requires reference-locking and palette quantisation script | Retro Diffusion Aseprite extension listed at $65 [claimed]; commercial terms for RD/PixelLab/Scenario not verified. Free Scenario tier personal-use only [claimed] |
| CC0 libraries | Kenney: all assets CC0, commercial OK, no warranty [verified-by-search of kenney.nl/support, claimed] | Fixed look; reskin with palette shader | $0 |
| AI painterly/illustrated | Paid private plans only (Recraft, Leonardo, Meshy terms in prior briefs) | Low across a portfolio | Plan $10-30/mo [assumed] |
Audio: WebAudio synthesis (sfxr-style one-shots, layered oscillators + noise, procedural music loops) = $0 and licence-free [assumed]. Paid Suno/ElevenLabs only on paid plans; songs may be uncopyrightable (prior brief). Freesound licences vary per file, check each [claimed].
**Style bible (per game and per portfolio):** `style.json` with palette (<=16 colours), outline rule, font (OFL only), corner radius, shadow, animation easing set, SFX family, and 10 golden reference screenshots. A vision-agent "style judge" scores each new asset against the references; fail = regenerate. Provenance CSV for every generated asset (tool, plan, date, prompt hash).
Cost per game [assumed]: code-art game $0 assets; pixel game $20-65 one-off tools; tokens tens of dollars (prior brief).

## 3. Juice and polish checklist (what separates hits from asset flips)
Reference: Nijman "Art of Screenshake" and Jonasson/Purho "Juice it or lose it" are the canonical talks; I found no official checklist, so the list below is [assumed] synthesis, hit-stop 50-100 ms guidance is a tutorial tip [claimed].
| Item | Spec | Agent verification |
|---|---|---|
| Screen shake | Impulse + fast decay, per-hit scale, user toggle | Unit test camera offset decays to 0 within N ms; accessibility toggle exists |
| Hit-stop / time dilation | 50-100 ms on heavy hits | Replay with seed; assert frames frozen |
| Particles | Every damage, pickup, level-up, UI confirm | Event-to-effect map: every game event in `events.json` must have >=1 VFX and >=1 SFX (lint) |
| Tweening | All UI enters/exits eased, numbers count up, squash/stretch | Lint: no instant state changes in UI layer |
| Sound layering | 3 layers per big event (impact, tone, tail), pitch variance, ducking | Peak-level and clipping check on rendered audio |
| UI feedback | Hover/press/disabled states, damage numbers, clear affordances | Playwright screenshot per state |
| Onboarding | First action in <10 s, 0 text walls, first reward <60 s | Bot "new player" script: time-to-first-input/reward budgets |
| Perf budget | 60 fps desktop, 30+ mobile, <5 MB initial (web), no GC spikes | Playwright trace/`performance.now` frame stats on fixed seed |
| Visual regression | Seeded RNG + fixed timestep + `toHaveScreenshot` with maxDiffPixels; baselines generated in the same CI environment, since rendering varies by OS/headless/hardware [verified, playwright docs] | CI job |
Honest limit: tests prove presence of juice, not taste. The owner's 5-minute test (section 4) judges feel.

## 4. AI playtesting and balance
- **Bots in the sim (primary tool):** headless Node, seeded; policies = random, greedy, heuristic, plus a parameter-search/evolutionary player. Output: win-rate curve, time-to-milestone, dominant-strategy detection, dead-item detection. Already in repo (`balance-report.mjs`) [verified]. Applies directly to idle (pacing curves, prestige timing), deckbuilder (card pick/win rates, sim of 10^4-10^5 runs), roguelite (item synergy heat-map).
- **RL/self-play:** evidence it works for balance: Google's Chimera card prototype used ML playtesters to tune balance; Sims Mobile analysis of thousands of simulations exposed imbalances [claimed, via search of Google research blog/papers]. Caveat from research: agents optimised only to win were not perceived as most fun (Unity ML-Agents soccer and roguelike boss studies) [claimed]. So use RL to find *exploits and dominated options*, not to define fun.
- **LLM playtesters:** TITAN (arXiv 2509.22170) found 4 unknown bugs and is deployed in 8 QA pipelines; MIMIC-Py (FSE 2026 demo) personality-driven LLM testers; arXiv 2512.12706 LLM-guided RL for coverage [claimed, search summaries; papers not opened]. No evidence found for LLM balance of idle/deckbuilder economies; treat as bug-finder and "new player confusion" detector only.
- **Playwright bots:** drive the real build with canvas clicks/keys, record time-to-first-action, softlocks, console errors, FPS. Telemetry (anonymous, consent-based) feeds back run-length and drop-off histograms to retune.
- **Humans only:** fun, clarity, tone, "does this feel stolen", art taste. **Owner 5-minute playtest protocol:** agent hands over a build + a 6-item form: (1) first 30 s: did you know what to do? (2) one moment you smiled/wanted another run (timestamp), (3) one moment of boredom/frustration (timestamp), (4) would you play a second run, yes/no, (5) 1-5 vs a reference human-made game, (6) one thing to cut. Agents turn answers into tickets. Binary "second run?" is the kill/keep signal.

## 5. Where AI is a structural advantage, and evidence the formats sell
Principle: value scales with content volume or systems depth, verified by simulation rather than by human hours.
Payment evidence:
- Roguelike deckbuilders: 7.8% of games released Jan 2024-Jun 2025 reached 1,000 reviews vs 4.2% for all Steam; 224 released in 2025, 316 so far in 2026 (crowding); 1,000 reviews ~ $150k gross is a rule of thumb [claimed, steampageanalyzer Sep 2026]. Zukowski analysis: roguelike deckbuilders sold best on average among indie genres (2019-22) [claimed, wnhub]. Balatro >5M copies in under a year, mobile net revenue >$9.3M (AppMagic est.) [claimed, pocketgamer.biz/kitguru].
- Survivors-likes: Megabonk (solo dev, 3D) ~1M copies in 2 weeks per developer, ~1.3M per VGI; price $5.49-$9.99, sources disagree [claimed].
- Idle: 4,314 idle-tagged Steam games; PC Gamer notes a flood of near-identical AI-made idlers [claimed]. Cookie Clicker estimates 2.5M-6.75M copies from two inconsistent trackers [claimed]. Conclusion: demand real, supply saturated; depth must be the differentiator.
- Daily puzzle: Wordle sold to NYT for "low seven figures" [claimed]; NYT Games $5/month subscription [claimed]. Indie daily-puzzle revenue data: could not verify.
- Live LLM narrative: shipped titles exist (Doki Doki AI Interrogation, Verbal Verdict demo) but none is a verified commercial hit [claimed]. Steam allows it but requires a description of guardrails; adult-only live AI banned [verified, Steam content survey]. Prefer *pre-generated* content (disclosed) over live generation.

**Six AI-advantage concepts** (original IP; no genre-clone names/trade dress)
1. **Hexcraft Deck**: a roguelike deckbuilder with 1,200 cards in 12 archetypes where every card is generated from a rules DSL and balanced by 100k-run simulation per patch. A solo dev balances ~300 by feel.
2. **Mutation Survivors**: a survivors-like where 2,000 items combine through typed tags into emergent synergies, with a sim flagging broken combos nightly. Humans can't test the 10^6 pair space.
3. **Cycle Engine (idle)**: idle game with 9 interlocking prestige layers and per-layer pacing tuned so the first 5 prestiges land at target times for the 10th/50th/90th percentile bot player.
4. **Daily Cut**: logic puzzle with unlimited levels, solver-verified unique solutions, difficulty rated by solver depth, daily seed, 20+ languages, weekly themed packs. Content is infinite and verified; a human can't hand-check.
5. **Rail Barons Gen**: logistics/tycoon sim with procedurally generated maps and scenario campaigns whose economies are auto-solved for feasibility and par scores.
6. **Ledger of Ash**: text/strategy hybrid with 5,000 pre-written (disclosed) events from a branching graph, checked by graph tests for dead ends and tone-checked by a reviewer agent; localised to 20 languages by an LLM pass with native-speaker spot checks.
**3 best for 2027 [assumed]:** #1 deckbuilder (strongest paid evidence, sim-balance is the cleanest AI edge), #2 survivors-like (payment evidence plus synergy depth; 2D keeps it agent-friendly), #4 puzzle (cheapest to ship on web, fastest loop, best for the January window; weakest payment evidence, so ad/IAP monetisation needs testing). Each still needs a G1 brief with named channel.
Anti-spam note: itch treats "mostly AI, little human involvement, near-identical iterations" as spam [verified]; every game must show a human design/curation log and clearly distinct mechanics.

## 6. Studio architecture
```
/engine  (TS pkgs): sim-core (seeded RNG, fixed tick, events), content-schema (zod), ui-kit, juice (shake/hitstop/tween/particles), audio-synth, telemetry, i18n
/games/<name>: content/*.json (cards, items, levels, strings), rules DSL, art/style.json, tests/
/tools: balance-sweep, bot-runner (Node), playwright-smoke, screenshot-diff, style-judge, localize, release
CI: unit + sim determinism + balance gates (win-rate bands) + schema lint + event-to-VFX lint + Playwright smoke + perf budget
Release: vite build -> butler push; Capacitor sync/build; Electron+steamworks.js package; Steam depot via steamcmd (owner-run)
```
Throughput [assumed]: once the engine exists, ~1 small web game per 2-3 weeks (puzzle/idle) and 1 deep game per quarter; 4-6 releases in Q1 2027 if the owner playtest (5-10 min per build) is the only human gate. Owner-only: accounts, agreements, publishing, payouts (CLAUDE.md).

## 7. 10-week runway (Oct 12 - Dec 20)
| Wk | Deliverable |
|---|---|
| 1 | Monorepo: extract sim-core from last-tower-standing; CI with node --test; style-bible template; Phaser vs plain-canvas spike on a phone |
| 2 | juice + ui-kit packages; Playwright smoke + seeded screenshot-diff; device perf test |
| 3 | content-schema + rules DSL; balance-sweep tool; first bot policies |
| 4 | Prototype A (Daily Cut puzzle): generator + solver; playable on web |
| 5 | Prototype A polish with checklist; owner 5-min playtest; itch page draft (owner publishes private) |
| 6 | Prototype B (Hexcraft Deck) core loop, 60 cards, sim balance |
| 7 | Capacitor build of A; add native plugins; Electron+steamworks.js hello-world (no store action) |
| 8 | Prototype B to 200 cards, balance gate in CI; art style test (pixel vs vector) |
| 9 | Prototype C (Mutation Survivors) vertical slice or idle game; telemetry; i18n pipeline (5 languages) |
| 10 | Owner playtests all; red-team + compliance (AI disclosure, licences); kill/keep per game; January launch order |
Spend within $25 G2 cap per game: $0 expected; tool trials only after style test, via the CLI ledger.

## 8. Legal
- US Copyright Office Part 2 (2025-01-29): prompts alone do not make a user the author; human selection, arrangement and modification can be protected; no new sui generis right [claimed, law-firm summaries; PDF not parsed]. Implication: our moat is human-authored design, code, content curation and brand; keep a human-contribution log.
- Steam: disclose pre-generated AI that ships to players; dev-only tools not the focus; live-generated needs guardrails [verified]. itch: tag generative-AI use; untagged asset pages may be delisted [verified]. Poki/Google/Apple rules in prior brief.
- Clones: original names, art, trade dress; no franchise terms. Licence file per third-party asset (Kenney CC0, OFL fonts).

## 9. Risks and mitigations
| Risk | Mitigation |
|---|---|
| Fun is untestable by bots | Owner 5-minute protocol, binary "second run?" kill signal |
| Saturated genres (224 deckbuilders in 2025; idle flood) | Depth and balance as differentiator; web-first cheap tests before Steam fee |
| Spam/low-effort labelling | Human design log, distinct mechanics, <=1 release/2 weeks per genre |
| Weak copyright on AI output | Code/SVG art, human-curated content, brand |
| Wrapper rejection (Apple 4.2), Steam overlay quirks | Native plugins; Electron test on a real Steam client, owner-run |
| Agent code complexity grows | Small packages, schema + CI gates, periodic refactor weeks |

## Verdict
**Supports** the bet in the form "AI-native studio = shared TS engine + sim-verified content depth + owner taste gate". Does not prove revenue.
**What would change my mind:** Owner rates prototype A/B below human-made references; a Phaser/Capacitor build fails device perf or Apple review; Steam/itch treat sim-generated content as spam; the first three G1 briefs find no [verified] paid demand.
**Next cheapest test ($0):** Week 1-2 spike: extract sim-core, run Playwright seeded smoke + screenshot diff on last-tower-standing in Phaser vs plain canvas on one phone, and run the 6-item owner playtest on it.

## Sources (retrieved 2026-10-12)
unity.com/pricing-updates; partner.steamgames.com/doc/gettingstarted/contentsurvey; partner.steamgames.com/steamdirect; github.com/phaserjs/phaser; github.com/godotengine/godot; github.com/pixijs/pixijs; github.com/mrdoob/three.js; github.com/bevyengine/bevy; github.com/defold/defold; github.com/ceifa/steamworks.js; docs.godotengine.org/en/stable/tutorials/export/exporting_for_web.html; capacitorjs.com/docs; itch.io/docs/creators/quality-guidelines; playwright.dev/docs/test-snapshots; arxiv.org/abs/2606.17861. Secondary: copyrightalliance.org/ai-report-part-2-copyrightability; pocketgamer.biz/balatro-exceeds-5-million-in-sales-on-all-platforms; gameworldobserver.com/2025/10/03/megabonk-is-a-new-indie-hit-on-steam-the-games-sales-have-surpassed-one-million-copies; steampageanalyzer.com/niches/roguelike-deckbuilder; wnhub.io/news/analytics/item-4582; pcgamer.com (54 idle games article); raijin.gg/app/1454400/Cookie_Clicker; niemanlab.org (Wordle sale); kenney.nl/support; app.cinevva.com/guides/web-game-engines-comparison; arxiv.org/abs/2509.22170; arxiv.org/abs/2512.12706; research.google/blog/leveraging-machine-learning-for-game-development; glama.ai/mcp/servers/gregario/godot-forge; npmjs.com/package/steamworks.js; help.scenario.com (Retro Diffusion); gamespress.com (Doki Doki AI Interrogation); en.wikipedia.org/wiki/Vampire_Survivors.
