const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const read = (p) => fs.readFileSync(path.join(__dirname, '..', p), 'utf8');
const code = read('src/js/advertiser.js');
const fn = code.match(/  function advertiserOutcome\(s\) \{[\s\S]*?\n  \}/)[0];
const context = {};
vm.runInNewContext(fn, context);
const calc = context.advertiserOutcome;
const close = (x, y) => assert(Math.abs(x-y) < 1e-8 * Math.max(1,Math.abs(y)), `${x} != ${y}`);
for (const [auction,budget,b,cost,profit] of [
  ['first',2000,.004,800,800],
  ['first',500,Math.sqrt(.00001),500,764.9110640673518],
  ['second',2000,.008,1600,1600],
  ['second',500,Math.sqrt(.00002),500,1288.8543819998317],
  ['first',0,0,0,0],['second',0,0,0,0],
]) {
  const r=calc({auction,budget});close(r.b,b);close(r.cost,cost);close(r.profit,profit);
  // Independent feasible-grid comparison using win probability, conditional payment,
  // incremental orders and order contribution, rather than a closed-form optimum.
  for (let j=0;j<=20000;j++) {
    const bid=.02*j/20000;
    const impressions=1e6*bid/.02;
    const payment=auction==='second'?bid/2:bid;
    const spend=impressions*payment;
    if (spend > budget+1e-8) continue;
    const objective=impressions*.0002*40-spend;
    assert(objective<=r.profit+1e-7);
  }
}
// The advertiser shadow price is the marginal change in the optimized objective.
for (const [auction,mu] of [['first',0.2649110640673518],['second',0.7888543819998317]]) {
  const now=calc({auction,budget:500}),next=calc({auction,budget:500.001});
  assert(Math.abs((next.profit-now.profit)/.001-mu)<1e-5);
  assert.equal(calc({auction,budget:2000}).binding,false);
}
// Nonuniform counterexample: the maximum of two uniform competing bids.
const nonuniformBid=2*.008/3;
const nonuniformProfit=(b)=>(.008-b)*(b/.02)**2;
for(let j=0;j<=20000;j++) assert(nonuniformProfit(.02*j/20000)<=nonuniformProfit(nonuniformBid)+1e-12);
// With ten periods, an unconstrained advertiser optimum spends $80 per period.
close(1e5*.004*.004/.02,80);
assert.equal(Math.max(0,0+.002*(80-200)),0);
// The original CPA contract has negative advertiser gain per impression, so no-buy wins.
close(.0002*40-.0005*30,-.007);
for (let j=0;j<=100;j++) assert((1e6*j/100)*(.0002*40-.0005*30)<=0);
// Exercise the actual UI listeners, not just the numerical function.
const nodes = new Map();
for (const id of ['ar-adv-budget','ar-adv-auction','ar-adv-budget-out','ar-adv-bid','ar-adv-cost','ar-adv-profit','ar-adv-status']) {
  nodes.set(id,{value:id==='ar-adv-auction'?'first':'2000',textContent:'',addEventListener(type,fn){this[type]=fn;}});
}
vm.runInNewContext(code,{document:{getElementById(id){return nodes.get(id);}}});
assert.equal(nodes.get('ar-adv-bid').textContent,'$4.0000 CPM');
assert.equal(nodes.get('ar-adv-profit').textContent,'$800.00');
nodes.get('ar-adv-budget').value='500';nodes.get('ar-adv-budget').input();
assert.equal(nodes.get('ar-adv-bid').textContent,'$3.1623 CPM');
assert.equal(nodes.get('ar-adv-profit').textContent,'$764.91');
assert(nodes.get('ar-adv-status').textContent.includes('budget binding'));
nodes.get('ar-adv-auction').value='second';nodes.get('ar-adv-auction').change();
assert.equal(nodes.get('ar-adv-bid').textContent,'$4.4721 CPM');
assert.equal(nodes.get('ar-adv-profit').textContent,'$1,288.85');
// Pedagogical structure: network calculator, network charts, and spread lesson belong
// to an optional closed appendix; main advertiser calculator precedes it.
const chapter=read('src/chapters/03-prediction-bidding.html');
const start=chapter.indexOf('<details class="ar-exercise" id="ar-network-spread-appendix">');
assert(start>0);
assert(chapter.indexOf('id="ar-adv-budget"')<start);
assert(chapter.indexOf('id="ar-budget"')>start);
assert(chapter.indexOf('id="ar-source-ledgers"')>start);
assert(chapter.indexOf('id="ar-threshold-math"')<start);
assert(chapter.indexOf('<h2>Budget pacing is online control')>start);
console.log('PASS: advertiser contracts and objectives, independent grid optima, budget cases, live UI updates, and closed optional network appendix.');
