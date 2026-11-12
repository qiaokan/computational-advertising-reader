# Chapter 1 review: Start here (roadmap)

Checklist applied to every h2 and block. Main-line words (text outside Optional blocks, TeX and chart JSON excluded): **2,300 → 2,169**. The chapter was under the 4,000-word threshold. The new reading-path table added about 300 words, and the cuts below paid for it.

| Section | Needed? (core / optional / cut) | Best example? | Math complete? | Action taken |
|---|---|---|---|---|
| Opening: "In this chapter" and gist | Core | n/a | No math | Rewrote. The key box now lists the reading path and the three values (billed $15, credited $20, caused $8). Added a gist paragraph of 120 words. |
| Five layers decide what happens to every impression | Core | Yes. The five layers are the reader's map, and each now links to the chapter that owns it under the new numbering (model → 5, contract → 3, auctions → 4, systems → 7, experiments → 6). | No math | Kept the layer list. Cut the paragraph about the reader's background and the "Calling any single layer…" aside. Cut the company-name paragraph to one sentence each for Axon, MAX and Adjust. Linked chapter 2 for the industry map. |
| Two reading paths (replaces "An eight-hour schedule and six acceptance outcomes") | Core (navigation) | Yes. One table gives the gist path, the full-day clock times and one deliverable per chapter. | Arithmetic shown in the text: gist 20+45+40+10+10+10+40 = 175 min; full day 395 min of study + 85 min of breaks = 480 min. The verifier recomputes it from the table. | Rewrote for the 10-chapter structure. The gist path reads chapters 1–3 and 8 in full, plus the gist level of 4–6. Chapter 7 is marked optional and chapter 10 is reference. Kept the six questions with new links; question 2 now points to `#ar-risk-map`. Defined CPM/CPC/CPA/oCPM, ROAS and first/second price before the table. Cut the "expanding acronyms is not the goal" paragraph. |
| A fictional campaign used throughout: roles, events, contract | Core | Yes. It is the single running example used by every later chapter. | n/a | Compressed the events list into one paragraph and kept every definition. Made the contract paragraph explicit about whose budget `B` is: the advertiser's cap in the chapter 4 main line, the network's publisher-payment cap in the CPA appendix. The old text called it the network's budget only, which conflicted with chapter 4. Folded the old $2,000 pitfall callout into that sentence. |
| Money-flow figure | Core | Yes. It shows who pays whom and the $15 − P split. | n/a | Kept; fixed the chapter link. |
| Symbol table | Core | Yes | n/a | Kept. Added `w = Δq·g = $0.008` (notation shared with chapter 4) and noted that `p_click` is the CTR. |
| Simplifying assumptions | Core | n/a | n/a | Merged four bullets and the "conventions" paragraph into one paragraph. Cut the expected-budget caveat because chapters 4 and 7 own it. |
| Worked example: what one impression is worth | Core | Yes. It produces the three values everything else uses. | Complete: q = 0.01×0.05, v = qa, qg, w = Δq·g, counts per 1,000, plus an independent count-then-price check. | Kept. Renamed attributed/incremental to credited/caused so they match "$15 billed / $20 credited / $8 causal". |
| About Δq | Core, short | n/a | n/a | Cut from 140 to 70 words. Kept: Δq is assumed, attribution cannot reveal it, experiments estimate it (link to ch 6), and attribution can also under-credit. Moved the conditions for scaling per-user lift (assigned vs exposed, next-best ad, additivity) to chapter 6, which owns them. |
| Worked example: three ledgers | Core | Yes | Complete: both advertiser nets, the network and publisher ledgers, the break-even inequality solved for Δq*, and a check that transfers cancel plus the $12 decomposition. | Kept. Removed the duplicate claim "Chapter 4 derives the same threshold" (chapter 4 restates it). |
| Bar chart of the five per-1,000 values | Cut | It repeated the worked-example numbers and taught nothing new. | n/a | Deleted. |
| Δq-doubling paragraph and net-vs-lift chart | Core | Yes. The flat attribution line against the rising causal line is the chapter's key mechanism. | Complete: 0.0004 × $40 = $0.016, so $16 − $15 = +$1. Chart slope, crossing point and labelled points are all recomputed. | Merged the paragraph into one claim-first statement. Kept the chart. |
| Pitfall callout ($2,000 is not the advertiser's bill) | Cut as a separate block | n/a | n/a | Folded into the contract paragraph. |

## Cut and why
- **The eight-hour schedule text and its 390 + 90 arithmetic:** replaced by the two-path table for the new structure.
- **The background paragraph and the "expanding acronyms" paragraph:** tone-setting with no system content (fails Q1).
- **The conditions on Δq identification:** duplicated chapter 6.
- **The bar chart:** a second presentation of numbers already in the worked example (fails Q2).
- **The pitfall callout and the expected-budget caveat:** merged into one sentence, or left to chapters 4 and 7, which own them.
