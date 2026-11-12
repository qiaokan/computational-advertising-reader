# Computational Advertising: A One-Day Reader

An interactive guide to computational advertising: ad products and cash flow, prediction, auctions, bidding and budgets, attribution and experiments, real-time systems, and an AppLovin/Axon case study. It is written for readers fluent in CS, probability and trading who are new to ad tech.

Live site: https://computational-advertising-reader.vercel.app

## Contents

1. Start here: reading paths and the running campaign
2. The advertising landscape: who buys and sells, formats, pricing products, privacy, where the money is
3. Products, contracts, cash flow, and who bears which risk
4. Auctions, bidding and budgets (advertiser calculator; optional network-spread appendix)
5. Prediction and the data it learns from (calibration, auction-price feedback, selection, downsampling, delays, winner's curse)
6. Measurement: attribution, experiments, privacy and fraud
7. Real-time serving, billing and budget systems (optional deep dive)
8. AppLovin and Axon case study
9. Ten exercises with worked answers
10. Sources, errata, glossary, and review record

## Layout

```
src/template.html        page shell (header, hero, sidebar, pagination)
src/chapters/NN-*.html   one <article> per chapter
src/css/reader.css       theme (light/dark tokens, layout, components)
src/js/reader.js         chapter routing, outline, theme toggle, profit calculator
src/js/threshold.js      bid/win-probability explorer (chapter 4)
src/js/advertiser.js     advertiser incremental-contribution calculator (main lesson)
scripts/charts.mjs       build-time SVG charts from <x-chart> JSON specs (curves sampled from formulas)
docs/AUTHORING.md        the three-question section review, notation, units, components
reviews/sections/        per-section review tables (needed? best example? math complete?)
build.mjs                assembles dist/index.html, renders TeX and charts, inlines the KaTeX fonts in use
dist/index.html          the deployed, self-contained page (committed)
```

Authoring conventions in chapter files (full guide: `docs/AUTHORING.md`):

- Inline math `<x-tex>F(b)=b/L</x-tex>`; display math `<x-tex display>…</x-tex>`. Write HTML-escaped TeX (`&lt;`, `&amp;`). The build fails on invalid TeX.
- `<x-chart>{…}</x-chart>` renders a theme-aware SVG chart at build time; every chart needs a caption.
- `<!-- script: threshold.js -->` inlines `src/js/threshold.js` at that position.
- `<h2>` headings get stable ids (`c4-…`) for deep links and the "On this page" outline. Link to a chapter with `#chapter-N`, or to any element id with `#id`.
- In tables, every `<td data-label>` must equal its column header (used for the phone layout).

## Build, test, preview

```
npm install
npm run build     # writes dist/index.html
node build.mjs --only 04 --out /tmp/ch4.html   # preview one chapter
npm test          # build, site, threshold, advertiser math/UI and appendix-link checks
python3 -m http.server 8000 --directory dist
```

The page is a single self-contained HTML file with no external requests (KaTeX fonts are inlined). Vercel serves `dist/` directly with no build step, so commit `dist/index.html` after building. Vercel's Git integration deploys every push to `main` to production and every other branch to a preview URL.

All examples are synthetic unless explicitly attributed. Mathematical review covers the stated assumptions; it does not validate their applicability to any real advertising market.

Chapter 4 keeps the payment contracts explicit: the original fixed-CPA campaign has negative advertiser value at the default inputs; the positive-value bidding lesson is a separate direct/pass-through auction-buying contract with no fees. Network-spread maximization and its calculator are in a closed optional appendix.
