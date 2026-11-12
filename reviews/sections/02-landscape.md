# Chapter 2 · The advertising landscape (new chapter)

New file; it replaces a placeholder, so there is no "before" word count. Main line (everything except the sources list, including tables, callout and gist): **3,494 words**. Sources list: about 220 words. No Optional blocks.

Verification: `node build.mjs --validate` PASS; `--only 02 --out` builds; the site test, pointed at a full scratch build, PASSES (unique ids, every in-page link resolves, including `#ar-risk-map`, and table data-labels match); `scratchpad/verify2/ch02.mjs` PASSES 50 checks (every revenue figure, share, sum and eCPM number recomputed from its inputs). Screenshots at 1300 px and 390 px: no horizontal overflow. The mobile overlap of chart labels was fixed by renaming the category "Digital video" to "Video".

## Section review

| Section | Needed? (core / optional / cut) | Best example? | Math complete? | Action taken |
|---|---|---|---|---|
| Opening: In this chapter + gist | core | n/a | No math in the gist; the eCPM formula appears in the key list and is defined in section 3 | Written to the house shape: 5 outcomes, gist of about 115 words |
| Advertisers pay for attention through three kinds of market (`ar-landscape-who-pays`) | core: no later chapter defines DSP, SSP, exchange, walled garden, guaranteed deal or PMP any more (chapter 3 dropped its role list), so this is now their canonical home | One four-lane flow figure (guaranteed, walled garden, open web, apps) that places the running campaign in lane 3a. A second example would add nothing. | No math | Mediation is defined briefly (waterfall vs bidding) and linked to chapter 8's MAX walkthrough rather than repeating it |
| Formats price differently because they reveal different amounts of intent (`ar-landscape-formats`) | core | One table for all six formats, plus prose only for search (the GSP origin and why ranking uses pCTR), retail media (closed loop, which ties to the label problems in chapters 5 and 6) and CTV/rewarded video. Social and display have table rows only. | No math. One number: search's 76% share of Google advertising, from the 10-K | GSP history kept to three sentences with the EOS 2007 citation; the GSP equilibrium analysis is left out (not needed for the map) |
| Brand and performance buy different things (h3) | core: it tells the reader what the rest of the reader is *not* about | Definitions only (reach, frequency, frequency cap) | n/a | Kept short; detail deferred to the gaps list |
| Pricing moved the bid toward results (`ar-landscape-pricing`) | core | Two examples: the running example's $15 eCPM (ties to chapter 1) and the CPC A/B example ($0.30 at 3% vs $0.40 at 2%, giving $9 vs $8), which shows the one new idea: the higher bid can lose. The GSP price step ($8/30 ≈ $0.27) shows that the billed price differs from the bid. | Complete: the formulas are stated, every product is computed, and the check recomputes revenue at the GSP price. No background needed. | The four points get one paragraph only; the risk table, cost guarantees and the CPA-verification argument stay in chapter 3 (`#ar-risk-map`), with no duplication |
| Measurement decides what can be optimized (`ar-landscape-privacy`) | core | A timeline of 4 dated steps (Safari 2020, ATT 2021, Chrome reversal 2025, status in 2026) | No math | Attribution vs incrementality in one paragraph linked to chapter 6; SKAN timing not repeated (linked to chapter 6). Privacy status checked against Google's 17 Oct 2025 Privacy Sandbox post and Chromium deprecation threads. |
| The money is concentrated in a few walled gardens (`ar-landscape-money`) | core, but only a few numbers | A table of 3 companies and 1 market total, plus one bar chart (US revenue by format) | Every figure is sourced; totals and shares are recomputed in the verify script; the global vs US scope mismatch is stated explicitly | No growth rates for the companies (fewer numbers). ByteDance is omitted because it publishes no audited revenue. |
| How the rest of this reader fits (`ar-landscape-reader-map`) | core | A chapter-to-map table plus a list of gaps | n/a | The gaps list names brand, guaranteed delivery, search specifics, creative, retail media/CTV and industry structure |
| Sources for this chapter (h3) | core (reference) | n/a | n/a | 10 numbered primary or official sources |

## Cut or deliberately left out
- ISBA/PwC supply-chain fee study (the share of spend reaching publishers): useful, but not re-verified this session, and it would add another number. Replaced by the qualitative "each hop takes a fee".
- Amazon 2024 advertising revenue and all year-over-year growth rates: not needed for the map, and fewer numbers is safer.
- The exact Ocean Engine or Tencent cost-guarantee tolerance (the "20%" seen in practitioner blogs): not verifiable from an official page, so the guarantee is described without a number.
- First-price transition in open exchanges (Google Ad Manager, 2019): belongs to chapter 4.

## Sources used
1. Alphabet 10-K FY2025 (SEC EDGAR, accession 0001652044-26-000018): revenues by type.
2. Meta Q4 and full-year 2025 results (investor.atmeta.com): segment information.
3. Amazon Q4 2025 results, 8-K Exhibit 99.1 (accession 0001018724-26-000002): advertising services by quarter; 10-K FY2025 for net sales.
4. IAB/PwC Internet Advertising Revenue Report, Full Year 2025 (April 2026): IAB press release plus the report PDF (format table, revenue concentration page, programmatic, social and commerce media).
5. Edelman, Ostrovsky and Schwarz (2007), AER.
6. Google Ads Help: Ad Rank, actual CPC, Performance Max, modeled conversions.
7. Meta Business Help Center, About ad auctions (cited for "total value"; the page body could not be fetched; the wording used is generic).
8. TikTok Ads Manager, bidding methods (oCPM billed per impression).
9. Amazon Ads, Sponsored Products (CPC).
10. Apple, User privacy and data use (ATT, iOS 14.5); Apple ad attribution; WebKit blog of 24 Mar 2020 (full third-party cookie blocking).
11. Google Privacy Sandbox blog of 17 Oct 2025; Chromium blink-dev "Intent to Deprecate and Remove: Topics API" (status in 2026).

## Not fully verified from a primary source
- Meta's renaming of Advantage+ shopping campaigns to Advantage+ sales campaigns in 2025: trade press and practitioner blogs only.
- Performance Max launch year (2021): from memory, consistent with Google's own Performance Max page, which gives no date.
- Chinese oCPX cost guarantees: practitioner sources only. The claim is kept qualitative; chapter 3 makes the same claim.
- Firefox blocking known trackers' cookies by default: supported by Google's modeled-conversions help page ("Safari and Firefox don't allow conversion measurement using third-party cookies"), not by a Mozilla page.
- GoTo/Overture "late 1990s" and Google's "2002" GSP: from EOS 2007 as I remember it; the paper was not re-fetched.
