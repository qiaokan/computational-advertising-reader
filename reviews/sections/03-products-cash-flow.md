# Chapter 3 review: Products and cash flow

Main-line words (text outside Optional blocks, TeX and chart JSON excluded): **4,210 → 3,147 (−25.2%)**. That figure already includes the new `#ar-risk-map` section, about 1,200 words with its table and worked example (about 900 words of prose).

| Section | Needed? (core / optional / cut) | Best example? | Math complete? | Action taken |
|---|---|---|---|---|
| Opening: "In this chapter" and gist | Core | n/a | No math | Rewrote the five outcomes around the four points. Added a 119-word gist. |
| An ad product is five separate choices | Core | Yes. The rewarded-video example shows the five choices coexisting. | No math | Kept the table with shorter cells. Cut the transaction-type taxonomy detail and the "contexts differ in how intent becomes visible" paragraph, because chapter 2 surveys formats and selling. |
| The contract must define every event it pays for or optimizes (was "Advertisers buy a delivery service under constraints") | Core | Yes. The ambiguities in "purchase" and "value" are the example. | n/a | Merged the six-input list into one sentence. Cut the ad-group hierarchy note and the creative-as-decision-variable paragraph (fail Q1 for a broad reader). Moved the ROAS/iROAS definitions here (`#ar-roas-def`), next to D7 ROAS (`#ar-d7-def`) and LTV. |
| Publishers sell attention and pay with product quality | Cut | n/a | n/a | Deleted. Fill rate, latency and ad load belong to chapter 2's supply side. The guaranteed-contract shadow value was an illustration without a derivation (fails Q3). |
| Roles and money flows (role list and diagram) | Cut | n/a | n/a | Deleted, because chapter 2 owns the industry map. The point that a company's transaction role decides revenue recognition survives in the accounting section. |
| **NEW: Who bears which risk: the four points** (`#ar-risk-map`) | Core | Yes. The running campaign (CTR 0.01, CVR 0.05, $30 per purchase) priced under all five products, with two forecast-error scenarios. | Complete. The bids and eCPMs ($15 everywhere), the bills in both scenarios, and the cost per purchase ($30 or $60) are all shown. The under-reporting algebra is in full, including the instant-model case. | Replaces and merges "Keep billing events and optimization objectives apart" (units list `#ar-billing-terms`, the equal-expected-payment example, the tCPA pitfall). It defines the four points and states the three rules (rank→bill is the seller's risk; bill→bid is the payer's risk, estimated by the advertiser under CPM/CPC and by the platform under oCPX; bid→judged is always the advertiser's). One table covers CPM, CPC, CPA, oCPC and oCPM. |
| ↳ CPA needs a billing event the platform can verify | Core | Yes. k = 1/2 in the running campaign: the bill falls from $15 to $7.50 while the ad is still ranked at $15. | Complete: under CPA the bill is a·k·q while a pooled or lagging pCVR keeps allocation; under oCPM, 1000·a·pCTR·(k·pCVR) = k·eCPM and a/k restores the eCPM; with an instant model the CPA case reduces to the same algebra. | New. Introduces MMPs here. |
| ↳ Why oCPX platforms offer cost guarantees | Core | Reuses scenario B ($30 target, $60 realized). | Winner's curse stated, with a link to `#ar-winners-curse` (ch 5) for the derivation, as instructed. | New. |
| ↳ Dual bids limit variance while the model learns | Core, short | n/a | No math | New, three sentences. Described generically (shallow event bounds a noisy deep-event bid), with no platform-specific formula. |
| Equal-expected-payment example: sampling-noise step (SD $149.25 / $670.65) | Cut | n/a | It was complete, but irrelevant to the point | Deleted. Forecast error, not binomial noise, is the mechanism. |
| Advertiser-payment bar chart (CPM/CPC/CPA × scenarios) | Cut | Superseded | n/a | Deleted. The five-product table and worked example carry the same information. Extending the chart to five products would give 15 bars, unreadable on phones. |
| Platform margin, advertiser return and scaling are different questions (`#ar-accounting-expansion`) | Core | Yes. One $100 budget runs through both income statements and the scaling decision. | Complete | Renamed the h2 (was "Three ledgers and the limits of scaling") and cut the generic three-ledger intro, which duplicated chapter 1. |
| ↳ 1. Denominator of an 80% gross margin: net vs gross example and chart | Core | Yes | Complete, with a take-rate × margin identity check | Kept the example and chart. Shortened the interpretation. |
| ↳ IFRS 15 / ASC 606 principal-vs-agent test | Optional | n/a | n/a | Moved to "Optional: who may recognize revenue gross" (`#ar-gross-net-rule`). The main line keeps one sentence: standards decide the treatment, not the platform. Dropped one of the two IFRS links. |
| ↳ 2. Advertiser ledger table | Core | Yes | Complete; each column is recomputed | Kept; merged the m and "profit" definitions into one paragraph. |
| ↳ 3. Marginal vs average iROAS, "Should the advertiser add the extra $50?" | Core | Yes | Complete: 1/m from mR − C ≥ 0, the finite increment, and the check | Kept. Folded the marginal-iROAS definition into the break-even paragraph. |
| ↳ Optional: where is the optimal budget? (fitted curve and two charts) | Optional | Yes | Complete: concave optimality conditions stated, chord bracket, quadratic fit solved, C* = $75, Π = $22.50, midpoint-chord check | Kept. Moved the κ (attributed-to-incremental) derivation out of this block into section 5 of the main line, where it is used. |
| ↳ 4. Platform gross profit can grow while customer profit falls | Core | Yes | Complete | Kept the table. Merged the "maximize sales subject to iROAS ≥ 2.5" point into the same paragraph. |
| ↳ 5. Revenue must be truly incremental | Core | Yes. $300 credited against $200 caused. | Complete: profit = mκA − C, so break-even attributed ROAS = 1/(mκ) = 3.75. Derived in the main line; previously it pointed into the optional block. | Kept. Dropped the Google Conversion Lift link (provenance only). |
| Closing trading-intuition paragraph | Cut | n/a | n/a | Deleted (fails Q1). The one trading analogue in section 3 remains. |

## Cut and why
- **Roles list, role diagram and publisher trade-offs:** chapter 2 owns the industry map and the supply side, so these were duplicates.
- **Guaranteed-delivery shadow value:** a Lagrange-multiplier claim with no derivation or numbers (fails Q3), and not needed for the gist.
- **Sampling-noise standard deviations and the CPM/CPC/CPA payment chart:** replaced by the four-point table and the five-product worked example, which teach the same mechanism once.
- **Creative-as-decision-variable, ad-group hierarchy, intent-by-context paragraphs:** true but tangential to products and cash flow.
- **IFRS detail:** moved to Optional; it is reference material for the case study.
- **The closing trading paragraph and the Google Conversion Lift link:** provenance or tone only.

## Ids
Kept: `ar-billing-terms`, `ar-roas-def`, `ar-accounting-expansion`, `ar-d7-def`, `ar-scaling-derivation`. New: `ar-risk-map` (h2), `ar-gross-net-rule` (optional block). `ar-roas-def` moved from the billing section to the contract-definitions paragraph; it still holds the ROAS and iROAS definitions. The auto-generated slugs of the removed h2s are gone; nothing in the built site linked to them, and the site test passes.
