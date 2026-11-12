# Chapter 8: AppLovin and Axon (section review)

The case study now reads in four steps:
1. What the products are (Axon, AppLovin Ads, MAX).
2. What each party can see versus what it may train on.
3. How a prediction advantage turns into retained profit.
4. What evidence would distinguish a real moat from metrics that only look good.

No new factual claims were added. Every public fact and every source link from the previous round (2025 10-K, Q3 2026 10-Q, AppLovin Axon page, MAX documentation and FAQ) is kept, some in shorter wording. Two new statements carry the **Inference** label: the conversion-risk position, and the winner's-curse remark, which is a modelling statement, not a claim about AppLovin.

Main-line words (shared counter `verify2/wc.mjs`): **3,437 → 2,739 (−20.3%)**. The optional block is unchanged apart from link labels and one added derivation step.

| Section | Needed? (core / optional / cut) | Best example? | Math complete? | Action taken |
|---|---|---|---|---|
| Opening (key callout, gist, labels) | Core | n/a | n/a | New gist (~100 words) gives the case's whole argument. The callout is reordered to match the four-part structure. The fact / inference / unknown label paragraph is compressed to two sentences. |
| What the products are | Core | Yes. The single MAX auction with the floor, a waterfall network and four bidders shows ranking, notices, billing at render, and AppLovin's 20× incentive. | Yes. Every step is arithmetic: v − b = $0.0075 vs φb = $0.000375. Assumptions stated: hypothetical 5% fee; v from the Chapter 4 appendix. | The vocabulary paragraph is shortened. Cut: the SDK-launch timeline step (merged into the request step), the paragraph on the two MAX pages disagreeing about when the win notice fires (provenance trivia), and the "do not generalize this sequence" paragraph (now one sentence with a link to Chapter 7). Added an **Inference** sentence: in action-based arrangements AppLovin Ads bears the conversion-rate risk, linking `#ar-risk-map`. `#ar-network-budget-free` is relabelled "Chapter 4 appendix" (the target is inside the appendix disclosure, which reader.js opens). The take-rate link now points to `#ar-accounting-expansion`, where take rate is defined. The net-revenue facts and numbers are kept. "MAX is free for publishers" is kept in shorter form. |
| Seeing data is not the same as being allowed to train on it | Core | Yes. The compare block (every bidder vs auctioneer only) plus the four-proposition table is the clearest structure for the flywheel claim. | n/a | Merged the Axon-inputs and flywheel fact paragraphs. Cut the sensitive-attributes clause, the Tripledot deal amounts ($430.6M cash, $285.0M shares; kept: the closing date, the ~22% stake, related party, still a customer) and the class-period dates. The class actions are kept as one sentence. The "final price vs threshold" paragraph is reduced to one sentence linking to `#ar-price-observation` (Chapter 5). The "Unknown" paragraph is shortened, and its "teaching tools, not reverse-engineering" sentence is cut because it duplicates the Chapter 7 diagram caption. |
| How a prediction advantage becomes retained profit | Core | Yes. Refinement (two segments, same win count) and calibration (r = 1.2) each isolate one property. | Yes. The value-of-information result is proved in one line (feasible-set inclusion, then replay the old policy), with premises listed. The main line now states both closed forms with a numeric anchor: ΔProfit = N·Var(v)/(4L) ($2,812.50 → $3,825 at 375,000 wins); profit factor 1 − (r−1)², spend factor r². | Previously the main line only said that examples follow; the results are now in the main line and the derivations stay optional. Added a link to `#ar-winners-curse` (Chapter 5) for why won impressions are overpredicted. The rent-split inference is shortened. |
| Optional: selection and calibration effects in a fixed auction market | Optional | Yes | Yes. Added the missing intermediate step "profit per request = (v−b)b/L = v²/(4L)" in the refinement derivation, and "(v−b)b/L, b²/L at b = rv/2" in the calibration derivation. Checks: CPA = a/2 = $15 in all segments; r = 0.8 symmetric. | Link labels updated to Chapter 4. |
| Evidence that separates a moat from good-looking metrics | Core | Yes. Three growth explanations, each mapped to the evidence that separates it, then three misleading metrics. | n/a | Merged the old "Evidence for a moat" and "Three problems that attractive numbers hide" sections. The D7 ROAS formula is replaced with a link to its canonical definition `#ar-d7-def` (Chapter 3), so it is no longer duplicated. The subsidy point is kept with its generic-inference label. Cut: the entrant paragraph (it restated the moat test) and the list of six explanatory factors. |
| Takeaways | Core | n/a | n/a | Four bullets kept and the first two merged. |

## Cut and why
- **The two MAX pages disagreeing about when the win notice fires.** Provenance detail that changes no conclusion.
- **"Do not generalize this sequence" paragraph.** Replaced by one sentence and a link to Chapter 7, the canonical place for notice semantics.
- **Tripledot deal amounts and class-period dates.** Q1: they do not bear on the data or moat argument. The facts that do (divested, ~22% stake, related party, still a customer) are kept.
- **D7 ROAS formula.** Duplicates Chapter 3's `#ar-d7-def`.
- **Entrant paragraph and the six-factor list.** They repeated the moat test.
- **Sensitive-attribute exclusion clause.** True, but irrelevant to the bid-data question.

## Links and ids
- Links: `#chapter-4`, `#chapter-6`, `#chapter-7`, `#ar-network-budget-free` (ch4), `#ar-accounting-expansion`, `#ar-d7-def`, `#ar-risk-map` (ch3), `#ar-price-observation`, `#ar-winners-curse` (ch5). All targets exist at the time of writing.
- No ids removed (`ar-model-advantage-derivation` kept).
