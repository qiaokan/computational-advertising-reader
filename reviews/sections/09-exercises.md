# Chapter 9 · Exercises: section review

Reviewer pass of 2026-11-12 against the owner's three questions. Main-line words (shared counter `verify2/wc.mjs`, which strips the collapsed questions): **495 → 616** (a gist paragraph was added; all ten questions live in collapsed blocks). All words: 3,827 → 4,803 (two new questions with full derivations; three charts removed).

Verification: `verify2/ch09.mjs` recomputes every number in every answer (174 checks, including a numerical integral and a Monte Carlo run for the expected maximum of two normals) and asserts each printed value appears in the source. Every `href` resolves in a full build.

## Sections

| Section | Needed? (core / optional / cut) | Best example? | Math complete? | Action taken |
|---|---|---|---|---|
| "How to use this set" + gist | Core (navigation) | n/a | Scoring: 10 × 10 = 100; pass 80, or 72 of 90 without Q9 | Time aligned with chapter 1's schedule (40 min, not 50). Calculation/conceptual split, pass gate and source map rewritten for the new numbering and chapters. Gate questions are now Q2 (risk), Q3 (budget), Q4 (winner's curse), Q7 (incrementality); Q9 (optional chapter 7) can be skipped. Gist added. |
| Shared CPA parameters | Core (inputs for Q1, Q5, Q8) | Running campaign | n/a | Stale link text "A one-day learning roadmap" → "Start here". Says which questions use these inputs. |
| Q1 Three values (was Q2) | Core: chapter 1's central trap | Running campaign; the right numbers to test the billed/credited/caused split | Complete; check line adds the +$5 report vs −$7 truth and the $75 cost per caused order | Wording aligned with chapter 1: billed / credited / caused. The $75 link now points to `#ar-network-advertiser-ledger` (chapter 4 appendix). |
| Q2 Four points and risk (new; replaces old Q1) | Core: chapter 2's four points and chapter 3's risk map | New numbers (pCTR 0.02, pCVR 0.04, $30) so the reader applies the rules rather than recalls chapter 3's example. Both error types (CTR, CVR) under oCPM, CPC and CPA. | Arithmetic shown; the check maps each outcome to the rank→bill / bill→bid rules | Old Q1 (tCPA is a target, not a billing price) was the weakest question: it tested one sentence. Its point survives as part (a). |
| Q3 Advertiser bidding under a budget (merges old Q3 and Q4) | Core | Chapter 4's direct contract; numbers match chapter 4 exactly ($4 CPM, $800, $3.1623, $764.91, $8 CPM, $1,600) | Completed square shown; budget step derived; μ_A ≈ 0.2649 added with its meaning | Old Q3 (budget-free bid) was a strict subset of old Q4; folded in as part (a). Added the budget multiplier, which the glossary and chapter 4 now name. "Chapter 3" link text → chapter 4. |
| Q4 Winner's curse (new) | Core: chapter 5's new mechanism | Two ads instead of chapter 5's ten, because the expected maximum of two normals has a closed form (1/√π) the reader can derive by hand | Complete: max = mean + half the absolute difference; E\|N(0,σ²)\| = σ√(2/π) derived by substitution; cost per conversion $33.39 | New. Part (e) links back to chapter 5's 31% for ten ads. |
| Q5 Calibration and sampling | Core | s = 0.1, p_s = 0.5 differs from chapter 5's s = 0.01 example, so it tests the formula | Complete (odds form and closed form) | Link → `#chapter-5` with its real title. Chart cut: chapter 5 already plots the s = 0.1 curve (Q2: duplicate). Added the 5.5-fold overvaluation. |
| Q6 Price feedback (was Q7) | Core | Bid $8 against chapter 5's $6, same uniform model | Wins-only mean and the censored estimate L̂ = b / win rate = $20, both shown | Link → `#ar-price-observation`. The illustration now ends with the censored fix chapter 5 derives; the trivial b/2 chart was cut. Added the point that first-price win/loss logs still identify F at the bids placed. |
| Q7 Incremental profit (was Q6) | Core | New numbers (1,350 vs 1,000; 700 credited). The old question repeated chapter 6's worked example verbatim, so it tested recall. The new numbers give a positive point estimate whose interval just clears break-even, the opposite outcome to chapter 6. | Complete: lift, ROAS, iROAS, profit, binomial SE (48.18), 95% interval [255.6, 444.4], profit interval [+$111, +$3,889] | Numbers replaced; the profit chart (a duplicate of chapter 6's) was cut. The exposure part now names the Wald ratio and links `#ar-exposure`. |
| Q8 Offline vs online (was Q9) | Core | n/a (diagnostic table) | No math | Link → chapter 4 appendix for "media gross spread". The miscalibration row names the winner's curse and asks for calibration on won impressions. Sources line fixed (chapters 5–6). |
| Q9 Ledger states (was Q8) | Optional chapter's core | Matches chapter 7's ledger rules | Invariant argument stated in one line | Removed the stale "(Case A)" label (chapter 7 no longer uses it). The dedup key now includes event type, as in chapter 7. |
| Q10 Evidence for a moat | Core (case study) | n/a | No math | Added chapter 8's facts: Axon does not ingest other bidders' bids; the 10-K says Adjust data is not shared unless the customer directs it. |

## Cut and why
- **Old Q1 (tCPA vs billing).** It tested one distinction. The four-points question tests it as part (a) and adds who bears each risk.
- **Old Q3 (budget-free first-price bid).** A strict subset of the budget question.
- **Three answer charts (downsampling curve, wins-only mean, profit vs lift).** Each repeated a chart in chapters 5 or 6 or plotted a line the text already states.

## Not verified
Nothing external. All numbers are internal to the reader and checked by script.
