# Computational Advertising: A One-Day Reader

An interactive guide to computational advertising: ad products and cash flow, prediction, auctions, bidding and budgets, attribution and experiments, real-time systems, and an AppLovin/Axon case study. It is written for readers fluent in CS, probability and trading who are new to ad tech.

Live site: https://computational-advertising-reader.vercel.app

## Contents

1. A one-day learning roadmap and the running example
2. Products, contracts, and cash flow
3. Prediction, auctions, bidding, and budgets (with a threshold explorer and profit calculator)
4. Attribution, causal experiments, and data
5. Real-time serving, billing, and budget systems
6. AppLovin and Axon case study
7. Ten exercises with worked answers
8. Sources, errata, glossary, and review record

## Layout

```
src/template.html        page shell (header, hero, sidebar, pagination)
src/chapters/NN-*.html   one <article> per chapter
src/css/reader.css       theme (light/dark tokens, layout, components)
src/js/reader.js         chapter routing, outline, theme toggle, profit calculator
src/js/threshold.js      bid/win-probability explorer (chapter 3)
scripts/charts.mjs       build-time SVG charts from <x-chart> JSON specs (curves sampled from formulas)
docs/AUTHORING.md        notation, units, components (callouts, worked examples, charts, timelines)
build.mjs                assembles dist/index.html, renders TeX and charts, inlines the KaTeX fonts in use
dist/index.html          the deployed, self-contained page (committed)
```

Authoring conventions in chapter files (full guide: `docs/AUTHORING.md`):

- Inline math `<x-tex>F(b)=b/L</x-tex>`; display math `<x-tex display>…</x-tex>`. Write HTML-escaped TeX (`&lt;`, `&amp;`). The build fails on invalid TeX.
- `<x-chart>{…}</x-chart>` renders a theme-aware SVG chart at build time; every chart needs a caption.
- `<!-- script: threshold.js -->` inlines `src/js/threshold.js` at that position.
- `<h2>` headings get stable ids (`c3-…`) for deep links and the "On this page" outline. Link to a chapter with `#chapter-N`, or to any element id with `#id`.
- In tables, every `<td data-label>` must equal its column header (used for the phone layout).

## Build, test, preview

```
npm install
npm run build     # writes dist/index.html
node build.mjs --only 03 --out /tmp/ch3.html   # preview one chapter
npm test          # dist up to date + static site checks + threshold explorer
python3 -m http.server 8000 --directory dist
```

The page is a single self-contained HTML file with no external requests (KaTeX fonts are inlined). Vercel serves `dist/` directly with no build step, so commit `dist/index.html` after building. Vercel's Git integration deploys every push to `main` to production and every other branch to a preview URL.

All examples are synthetic unless explicitly attributed. Mathematical review covers the stated assumptions; it does not validate their applicability to any real advertising market.
