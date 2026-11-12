# Section-by-section review of the advertising reader

Read this alongside the revised source. **Core** material supports the path from a business objective through bidding, delivery, billing and measurement. **Optional** material answers a narrower question or assumes more math than the core path needs. **Reference** material is for lookup.

## 1. Roadmap and running campaign

| Section | Needed? | Example and math review |
|---|---|---|
| System layers | Core | Keep the five-layer map. Use the running campaign to connect a prediction, contract, auction, delivery event and experiment. |
| Schedule and outcomes | Reference | Retain as navigation. The eight-hour arithmetic is a schedule detail, separate from the economics. |
| Running campaign | Core | Keep one set of numbers. Lead with the two payment arrangements in words, then introduce CPA, attribution and the roles. |
| Three per-impression values | Core | The same 1,000 impressions yield $15 billed, $20 credited contribution and $8 causal contribution. The click-to-order probability multiplication and units are shown. |
| Three ledgers and break-even | Core | Keep the bill and publisher payment visible in separate ledgers. The $7 advertiser loss and 0.000375 lift threshold follow from subtracting the bill and solving one inequality. Summing the ledgers cancels transfers before publisher and network operating costs. |

## 2. Products and cash flow

| Section | Needed? | Example and math review |
|---|---|---|
| Product dimensions | Core | One rewarded-video example shows how context, creative, transaction, billing and objective coexist. Changed “independent” to “distinct” because these choices can be related. |
| Advertiser constraints | Core | Keep the order, payment and refund distinctions. A billing event needs an operational definition before a model can target it. |
| Publisher trade-offs | Core, with advanced context | Keep fill, latency and user experience. The guaranteed-delivery shadow value is an illustration. Its exact value needs a contract and supply forecast. |
| Roles and money flows | Core | Keep the diagram and definitions. It shows the interfaces while allowing one company to perform multiple roles. |
| Billing versus optimization | Core | Keep equal expected CPM, CPC and CPA bills for the same campaign. This controls expected payment while varying who bears outcome risk. |
| Gross versus net recognition | Reference for the Axon case | Keep the $100 example. The same $20 gross profit divided by $25 or $100 explains the reporting difference. |
| Scaling and iROAS | Core | Keep the $100 versus $150 decision. The $75 additional revenue yields $30 contribution and costs $50. That finite comparison resolves the proposed scale-up with no calculus. |
| Attributed break-even and fitted curve | Optional | The derivative needs a response function and a constant margin. Moved the derivation and charts together. The fitted quadratic illustrates a possible optimum. The observed plans do not identify it. |
| Platform gains and advertiser losses | Core | Keep the combined ledger and the $200 causal-revenue check. Both reuse the same spend and margin to isolate the source of divergence. |

## 3. Prediction, bidding and budgets

| Section | Needed? | Example and math review |
|---|---|---|
| Advertiser objective under CPA | Core | At $0.008 incremental contribution and $0.015 expected bill per impression, stopping gives the best advertiser outcome under the given assumptions. |
| Direct-buying contract | Core | Change only who pays the auction cost. Define all prices and both value measures before using them. |
| Win probability | Core | Keep the competing bids example, interval-length proof, CPM conversion and slider. The density integral belongs in its optional disclosure. Linearity of expectation links the probability to expected wins. |
| First-price objective | Core | Keep the candidate bids before optimization. Added completion of the square so the global maximum is visible without a second derivative. The derivative independently gives the same optimum. |
| Budget and second price | Core | Keep the $2,000 slack and $500 binding cases. Second price changes the conditional payment to the average on the winning interval, which explains the factor of two in cost. The expected cap and actual spending controls are separate. |
| Advertiser calculator | Core as a check | It uses the same direct-buying assumptions and both worked auction rules. It lets the reader vary a single constraint and compare the result with the derivation. |
| Heterogeneous requests | Advanced bridge | The summed objective extends the fixed example. Each request needs its own value, win probability and expected all-in cost. It assumes the effects can be added. |
| General bidding, multipliers and pacing | Advanced bridge | The two-competitor example tests the uniform shortcut. The multiplier has a direct meaning in dollars of gain per extra budget dollar. The pacing example shows why the controller can underspend. |
| Prediction event and pipeline | Core | Keep the chain rule conditional on successful display and the retrieval, ranking and bid sequence. The CPA prediction and causal lift answer different questions. AUC and log loss explain why calibrated values matter for bidding. |
| Price observations | Core mechanism, advanced likelihood | Keep the win/loss explanation. Each likelihood term is the probability or density of what that record reveals. Corrected the broad claim that any model trained on wins must underestimate prices. |
| Optional network appendix | Optional | Preserve the three ledgers, $6 fixed bid, $7.50 unconstrained and $6.3246 constrained bids, and calculator. They show whose objective drives a profitable intermediary decision with a losing customer. |
| Appendix extensions | Optional | Second price, render failures, paper provenance, general shading, budget multipliers and pacing use the network contract. The repeated derivations are useful as references when checking the calculator. The expected-budget pacing simulation does not guarantee settlement safety. |

## 4. Attribution, experiments and data

| Section | Needed? | Example and math review |
|---|---|---|
| Policy selects the training data | Core | Start with the logging policy trying B one time in ten. That makes the weight of ten intelligible before notation. |
| Inverse propensity scoring | Optional | Keep the six rows as a stress case. Added the expectation argument by cancellation and the reward-stability requirement. A value above one shows sampling instability. The estimated standard error depends on the sampling assumptions. |
| Downsampling | Core | Derive the sampled rate from retained positive and negative counts. The count example prepares the inverse formula. Weighting targets a population objective, with calibration checked on representative data. |
| Delays and time leakage | Core | Keep a difference in label age as the example. The exponential model is an assumed delay distribution, with the implication conditional on that model. |
| Attribution and holdout | Core | Keep one 100,000-user-per-group example through the break-even threshold and profit interval. The confidence calculation uses the independent binary-outcome assumption. Removed the extra power calculation and the implication that the interval establishes a probable loss. |
| Assignment versus exposure | Advanced | Keep the example that contrasts the randomized estimate and a selected exposed group. The rescaled exposure effect needs one-sided exposure, exclusion and the stated identification assumptions. |
| Model tests versus channel tests | Core | The comparison determines the question the experiment answers. Keep both without adding a separate estimator. |
| Privacy and fraud | Core interface boundary | Keep these together as reasons an observed event may be missing, delayed or unreliable. The reader needs the consequence for labels and billing before platform-specific framework details. |

## 5. Real-time systems

| Section | Needed? | Example and math review |
|---|---|---|
| Three pipelines | Core | Keep the diagram and distinguish control, online serving and feedback. This is the map for tracing one impression. |
| Deadline allocation | Core | The 120 ms example exposes the network and safety allowances. The independent-shard calculation explains why per-stage percentiles alone do not establish end-to-end performance. |
| Booking a request and deduplication | Core | Preserve one set of notices with both a true retry and a distinct billable event. The ledger shows the cost of keys that are too coarse or too fine. |
| Display success and billing | Core distinction, optional optimization | Use 100 wins and 90 displays to explain the contract effect at a fixed bid. Moved the optimal-bid recalculation into an optional disclosure. |
| Hard budget | Core | Keep the invariant and its event-by-event proof. Admission checks the maximum obligation, billing replaces that reservation with the actual charge, and a final loss releases it. |
| Expected reservation risk | Advanced | Keep the independent and correlated cases as alternative assumptions. The normal approximation is a tail estimate. The correlated case illustrates why it cannot stand in for a guaranteed cap. |
| Releases and monitoring | Core | Retain the cases where version drift, missing events or budget accounting can change what the system optimizes. Tie each dashboard signal to an investigation. |

## 6. AppLovin and Axon

| Section | Needed? | Example and math review |
|---|---|---|
| Public product and auction flow | Core to the case study | Keep the distinction between Axon, AppLovin Ads and MAX. The hypothetical cash-flow example illustrates an incentive under a stated fee and contribution. Its direction depends on those inputs. |
| Visibility and permission | Core | Keep the distinction between bids the auctioneer receives, feedback a bidder receives and data available to train a model. Corrected the interpretation of a winner's own first-price payment. |
| Information and retained profit | Core argument, optional calculations | Keep the argument that an optimizer with more information can still choose its old policy under the same feasible set. Put the two uniform-auction calculations together as an optional check. |
| Evidence for a moat | Core to the case study | Replace deterministic predictions about rival explanations with comparisons that identify a mechanism. A campaign holdout answers the campaign-return question. |
| Misleading metrics and subsidies | Core to the case study | Keep the links to causal contribution and marginal returns. A volume or reported-price change alone leaves the advertiser economics unresolved. |

## 7. Exercises

| Exercise | Needed? | Review |
|---|---|---|
| 1. Product dimensions | Core check | Tests whether a target CPA defines billing. The missing contract terms are part of the answer. |
| 2. Three values | Core check | Reuses the running inputs to distinguish network receipts, credited contribution and incremental contribution. |
| 3. First-price advertiser bid | Core check | Tests objective and units as well as the optimizer. The worked answer includes the resulting spend and gain. |
| 4. Advertiser spend cap | Core check | Contrasts slack and binding caps and both price rules. The hard-budget question checks the system boundary. |
| 5. Sampling | Core check with network extension | The positive and negative sampling assumptions determine the correction. The overbidding illustration is explicitly about the CPA network. |
| 6. Holdout economics | Core check | Reuse the holdout and require both the causal profit estimate and its uncertainty. |
| 7. Price feedback | Core check with optional derivation | A first-price payment supplies a bound on the threshold. The truncation example checks what selected win prices can teach. |
| 8. Ledger states | Core check | Defined the required billing rule in the question so the optional reoptimization is unnecessary. |
| 9. Offline versus online | Core check | Requires distinct hypotheses and logs to distinguish them. |
| 10. Moat evidence | Case study check | Tests whether an explanation specifies data rights, counterfactual and economics. |

## 8. Sources and errata

| Section | Needed? | Review |
|---|---|---|
| Second-price erratum | Reference | Lead with 30% × $3 = $0.90 per request. That exposes the double weighting immediately. The proof and clipping cases are optional. The fixed-rate spending extrapolation is explicitly a fluid approximation. |
| Reading list | Reference | Keep source-to-purpose mapping so a reader can verify a particular mechanism without reading every source. |
| Glossary | Reference | Keep cross-links for terms that recur. Define quantities where the derivation needs them. |
| Review record | Reference | Keep it as provenance for the earlier passes. This pass reviewed pedagogy and checked the edited math. It did not reverify the external company and standards claims. |
