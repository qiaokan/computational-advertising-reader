# Authoring guide

Chapters live in `src/chapters/NN-*.html`, one `<article class="ar-lesson">` each. `npm run build` assembles `dist/index.html`. Everything below is plain HTML inside a chapter file.

## Writing rules

- **Reader:** fluent in CS, probability, optimization, distributed systems and trading; new to ad tech. Never explain basic math or engineering. Always define ad-domain terms and modelling assumptions.
- **Define before use.** Every symbol and acronym is defined at or before first use in the chapter, or linked to its definition (`<a href="#chapter-N">`, `<a href="#glossary">`, or any element id).
- **Units.** US dollars. Say whether a price is per impression, per click, per conversion or per 1,000 impressions (CPM). Never mix CPM and per-unit prices in one formula.
- **Notation shared across chapters:** `N` opportunities (bid requests), `B` budget, `b` bid (per impression), `Z` highest competing bid, `L` upper bound of `Z` when `Z ~ Uniform(0, L)`, `F`/`f` CDF/density of `Z`, `q` billable conversion probability per impression, `a` CPA paid by the advertiser, `v = q·a` network value per impression, `g` advertiser contribution per order, `Δq` true incremental conversion probability, `ρ` display-success probability, `λ`/`μ` multipliers, `m` the advertiser's contribution margin (break-even iROAS = `1/m`), `P` publisher payment per 1,000 impressions. `N` counts bid opportunities, not impressions won. If a chapter needs one of these letters for something else (e.g. a delay CDF or a logging policy), pick another letter or say explicitly that the symbol is local. Running example: `N = 1,000,000`, `L = $0.02`, `q = 0.0005`, `a = $30`, `g = $40`, `Δq = 0.0002`, `B = $2,000`.
- **Every number must be reproducible** from numbers stated earlier on the page. Round only at the end and say so.

## Math

- Inline: `<x-tex>F(b)=b/L</x-tex>`. Display: `<x-tex display>…</x-tex>`, multi-line with `\begin{aligned}…\end{aligned}`.
- Content is HTML-escaped TeX: `&lt;` for `<`, `&amp;` for `&` (including alignment `&amp;=`). Write `\$` for a dollar sign inside TeX.
- Wrap important display equations in `<div class="ar-math">…</div>`.

## Components

### Callouts

```html
<aside class="ar-callout ar-key"><p class="ar-callout-title">Key idea</p><p>…</p></aside>
<aside class="ar-callout ar-def"><p class="ar-callout-title">Definition</p><p>…</p></aside>
<aside class="ar-callout ar-warn"><p class="ar-callout-title">Pitfall</p><p>…</p></aside>
<aside class="ar-callout ar-note"><p class="ar-callout-title">Note</p><p>…</p></aside>
```

Use `ar-key` once at the top of each chapter ("In this chapter": 3–5 concrete outcomes) and optionally for a closing "Takeaways". Use `ar-warn` for real traps (unit mix-ups, double counting, leakage). Don't wrap ordinary prose in callouts.

### Worked example

```html
<section class="ar-worked">
  <header class="ar-worked-head"><span class="ar-worked-tag">Worked example</span><h4>Budget-capped first-price bid</h4></header>
  <div class="ar-worked-body">
    <p>Given: …all inputs with units…</p>
    <ol class="ar-steps">
      <li>Step with the formula and the substituted numbers. <x-tex display>…</x-tex></li>
      <li>…</li>
    </ol>
    <p class="ar-result">Result: <strong>…</strong></p>
    <p class="ar-check">Check: an independent sanity check (limit case, dimensional check, or recomputation another way).</p>
  </div>
</section>
```

Each step shows the formula, then the substituted numbers, then the result with units. Keep the intermediate values that a reader would otherwise have to compute.

### Charts: `<x-chart>{JSON}</x-chart>`

Rendered at build time to SVG; curves are sampled from the formulas, so a plotted line is exactly the stated function. The full spec is documented at the top of `scripts/charts.mjs`. Line chart:

```html
<x-chart>{"title": "Win probability and expected spread vs bid",
 "params": {"L": 0.02, "v": 0.015},
 "x": {"label": "Bid b ($ CPM)", "min": 0, "max": 20, "ticks": [0, 5, 10, 15, 20], "format": {"prefix": "$"}},
 "y": {"label": "Spread per 1,000 requests", "min": 0, "max": 3, "format": "usd2"},
 "series": [{"fn": "1000*(v - x/1000)*(x/1000)/L", "label": "first price", "tone": "accent", "to": 15}],
 "vlines": [{"x": 7.5, "label": "b* = $7.50"}],
 "points": [{"x": 7.5, "y": 2.8125, "label": "$2.81", "pos": "left"}],
 "caption": "HTML caption; may use <x-tex>…</x-tex>."}</x-chart>
```

Bar chart: `{"type": "bar", "y": {...}, "categories": ["Short", "Labels"], "groups": [{"label": "Cost", "tone": "warm", "values": [1, 2]}]}`.

Rules:
- `fn` is a JavaScript expression in `x` with `Math` functions available (`sqrt`, `log`, `exp`, `min`, `max`, `**`) plus everything in `params`. Plot in the units on the axis label; convert inside `fn` (e.g. CPM ↔ per impression).
- Tones: `accent` (main quantity), `warm` (comparison/alternative), `positive`, `negative`, `muted` (reference), `ink`.
- Use evenly spaced ticks; keep category labels short (≤ 14 characters), since phones get a narrower layout.
- Labels are plain text (Unicode is fine: `b*`, `≤`, `Δq`); put TeX in the caption.
- Every chart needs a caption that states what to notice and which formula is plotted.
- One idea per chart. Prefer showing a mechanism (a trade-off, a threshold, a constraint binding) over decoration.

### Timeline

```html
<ol class="ar-timeline">
  <li><span class="ar-t">0 ms</span><div><strong>Bid request</strong> …</div></li>
  <li><span class="ar-t">≤ 120 ms</span><div>…</div></li>
</ol>
```

### Side-by-side comparison

```html
<div class="ar-compare">
  <div class="ar-good"><h4>What attribution measures</h4><p>…</p></div>
  <div class="ar-bad"><h4>What it does not</h4><p>…</p></div>
</div>
```

`ar-good`/`ar-bad` add a green/red top rule; omit them for a neutral comparison.

### Existing components

Tables (`<div class="ar-table-wrap"><table>…` with `<td data-label="Column header">` equal to the column's `<th>` text), flow maps (`ar-map`/`ar-flow`/`ar-node`), exercises (`<details class="ar-exercise">` + `ar-answer`), the threshold explorer and the profit calculator in chapter 3.

## Previewing one chapter

```
node build.mjs --validate                       # whole site, no write
node build.mjs --only 03 --out /tmp/ch3.html    # one chapter to a scratch file
```
