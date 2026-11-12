# Computational Advertising: A One-Day Reader

An English, interactive guide to computational advertising products, algorithms, measurement, and systems, with worked examples tailored to evaluating advertising platforms and their economics.

Live site: https://computational-advertising-reader.vercel.app

## Contents

1. A one-day learning route and common example
2. Products, contracts, and cash flow
3. Prediction, auctions, bidding, and budgets
4. Attribution, causal experiments, and data
5. Real-time serving, billing, and budget systems
6. AppLovin and Axon case study
7. Exercises with worked answers
8. Primary sources, errata, and review scope

## Local preview

Run `python3 -m http.server 8000 --directory dist`, then visit http://localhost:8000.

The site is a standalone HTML export. Its reader runs in a sandboxed iframe. Preserve the iframe sandbox and both Content Security Policies when editing. The escaped `data-srcdoc` payload contains the reader and calculator; the outer script loads it into the iframe.

## Deployment

Vercel serves `dist` directly, with no build step. The production branch is `main`.

All examples are synthetic unless explicitly attributed. Mathematical review covers the assumptions stated in the text; it does not validate their applicability to a real advertising market.
