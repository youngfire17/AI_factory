# Validation: AI-delivered services for local trades (missed-call recovery + reviews + GBP)
Retrieved 2026-10-10 (web search; most sources are vendor blogs, so treat as directional). Tags: [verified] primary page read; [claimed] secondary; [assumed] ours.

## What this changes
The first services read (assets-services brief) priced the bundle at $249–349/mo. Validation shows **the core feature is commoditized and cheap**, so the offer must win on done-for-you service, not on technology.

| Question | Finding | Tag |
|---|---|---|
| Is missed-call text-back / AI answering scarce? | No. Jobber AI Receptionist $99/mo add-on; GoHighLevel plans $97–194/mo include review requests, two-way texting, AI call answering; AI receptionists from $29 (Dialzara) to $299/mo (PlumbingReceptionist.com); Podium $399–599/mo; Goodcall ~$66–79; Numa ~$49 | [claimed] vendor-adjacent blogs |
| Do contractors actually miss enough calls? | Credible benchmarks: ~14% missed (CallRail, Jan 2025) to ~35% (other); Invoca: 52% of ALL inbound calls answered (65% excluding ≤15s calls; includes wrong numbers/robocalls). Vendor claims of 62–74% missed are from sellers (n=45 contractors) — discount heavily | [claimed] |
| What is a call worth? | $150–350 average service call (illustrative, vendor) | [claimed] |
| Cost of text registration (A2P 10DLC)? | Sole-prop tier: ~$4.50 brand + $15 campaign vetting + ~$2/mo, but only for businesses **without an EIN**, one number, < 1,000 msgs/day. Standard brand ~$46 one-time. **Approval timelines not found.** Per-client registration likely needed when texting under each client's brand | [claimed] Twilio-linked pages |
| Is automated text-back legal? | Informational reply to someone who just called is lower risk; **marketing content needs prior express written consent**; statutory damages $500–$1,500 **per message**; no court decision on missed-call text-back found; state rules can be stricter; opt-out handling mandatory | [claimed] law-firm/vendor |
| Platform cost to deliver at scale? | GoHighLevel Agency $297/mo, Pro (SaaS mode) $497/mo; usage-based SMS/AI/phone add-ons erode margin; steep learning curve; no independent income/churn data | [claimed] |
| Review requests: rules | FTC consumer-review rule effective 2024-10-21 bans fake/paid-for-sentiment reviews and suppression; **review gating (asking only happy customers) is prohibited**; civil penalties up to ~$53k per violation | [claimed] |
| Cold outreach rules | Calls to business lines are exempt from the national DNC list, but owners' personal cell numbers can trigger TCPA; calling-time limits; **automated/bulk texts have no B2B exemption**; cold email needs CAN-SPAM basics (physical address, opt-out) | [claimed] |
| Cold-outreach reply rates / first-client timelines | **Could not find data** | — |

## Verdict
**Weakens the $249–349/mo pricing and the "technology bundle" framing; does not kill services as a cash engine.** A done-for-you offer for non-technical trade owners may still sell at ~$99–199/mo, but willingness to pay for *done-for-you* is **[assumed], not evidenced**. Fixed platform cost ($297+/mo GoHighLevel) is too heavy for a $500 start; a pay-as-you-go stack (SMS API + workflow tool + LLM) is cheaper but more build work.

## Constraints that must shape the offer
1. Keep texts **strictly informational** ("Sorry we missed your call. How can we help?"), honor opt-outs, no promotions. Get a lawyer's read on the exact wording before any live client.
2. Ask **all** customers for reviews equally; never filter by sentiment.
3. Our own outreach: **manual, one-to-one** calls/emails to listed business numbers; no autodialers, no automated cold SMS.
4. Verify 10DLC approval time and per-client registration before promising go-live dates.

## What would change my mind
- Evidence (even 5 conversations) that owners will pay $99+/mo for done-for-you recovery → strengthen.
- Owners already using Jobber/Housecall/GoHighLevel tools that cover this → weaken further.
- A lawyer flagging the text-back wording as risky → redesign (e.g., email/voicemail callback instead).

## Cheapest next test ($0, no building): customer discovery
15–20 short conversations with local trade owners (HVAC/plumbing/electrical/roofing). Learn: missed-call pain, current tools, what they'd pay for done-for-you. **Pass:** ≥ 5 of 20 say they would pay ≥ $99/mo after hearing the price, and ≥ 3 agree to a free pilot. **Fail → pivot offer or pick another lane.**
