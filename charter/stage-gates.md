# Stage gates

Every bet lives in exactly one stage. Moving forward requires the evidence listed; **any gate can also end in KILL**, which is a good outcome when evidence is bad.

| Stage | Name | Cumulative spend cap | To enter you need | Owner approval |
|---|---|---|---|---|
| G0 | Idea | $0 | A one-sentence hook and a target buyer | no |
| G1 | Verified | $0 | Research brief with [verified] demand evidence, named distribution channel, red-team review, compliance pass | no |
| G2 | Prototype | $25 | G1 + acceptance criteria + test plan written first | no |
| G3 | Soft launch | $75 | Prototype passes automated tests; owner has played/tested it; store/listing assets reviewed by compliance | **yes** |
| G4 | Scale | up to 25% of cash above reserve | G3 metrics clear the thresholds below for ≥ 14 days with real users | **yes** |
| — | Retire | — | Kill criteria hit, or opportunity cost | no (owner informed) |

## G3 → G4 thresholds (initial, **[assumed]**; recalibrate after first real data)
**Games (free browser/itch.io):** ≥ 200 unique players, ≥ 25% return the next day, median session ≥ 4 min, ≥ 10% reach wave/level milestone M, at least some monetization signal (tip, purchase, wishlist, email).
**Digital products (Etsy etc.):** ≥ 3 paid sales from strangers, listing conversion ≥ 1%, refund rate < 10%, positive net after fees.

## Kill criteria (any one)
- Spend cap for the stage reached without clearing the next gate.
- 30 days at a soft-launch stage with < 25% of the threshold metrics.
- A policy or legal problem we can't resolve cheaply (platform AI rules, IP, gambling mechanics, children's privacy).
- A better-scoring opportunity needs the capital or attention.

## Opportunity scorecard (0–5 each; weights in brackets)
Time to first revenue [3] · Distribution path exists [3] · Evidence of paid demand, tagged [verified] [3] · AI-buildable end to end [2] · Testable without the owner [2] · Compounding/asset value [2] · Downside if wrong [2] · Policy risk (5 = low) [2].
Priority = weighted sum / 95 × 100 (max weighted sum is 5 × 19 = 95). Score ≥ 65 → eligible for G1 work. Scores must cite evidence tags; an unverified [claimed] demand figure caps its Evidence score at 3.
