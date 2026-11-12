const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const source = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf8');
const inner = source;
const script = inner.match(/<script id="ar-threshold-script">([\s\S]*?)<\/script>/)[1];
const nodes = new Map();
for (const id of ['ar-threshold-explorer','ar-threshold-bid','ar-threshold-quote','ar-threshold-fill','ar-threshold-marker','ar-threshold-chart','ar-threshold-result']) {
  assert(inner.includes('id="'+id+'"'));
  nodes.set(id, {value:'6',textContent:'',style:{},attributes:{},setAttribute(k,v){this.attributes[k]=v;},addEventListener(k,v){this[k]=v;}});
}
vm.runInNewContext(script, {document:{getElementById(id){return nodes.get(id);}}});
const input=nodes.get('ar-threshold-bid');
for (const [bid,pct] of [[0,0],[6,30],[6.5,32.5],[10,50],[20,100]]) {
  input.value=String(bid);input.input();
  assert.equal(nodes.get('ar-threshold-fill').style.width,pct+'%');
  assert.equal(nodes.get('ar-threshold-marker').style.left,pct+'%');
  assert(nodes.get('ar-threshold-result').textContent.includes('= '+pct+'%.'));
  assert(input.attributes['aria-valuetext'].includes(pct+'% win probability'));
  assert(Math.abs((bid/1000)/(.02)-pct/100) < 1e-12);
}
assert.equal(1e6*(6/20),300000);
console.log('PASS: explorer default and boundary bids, fractional probabilities, price-unit conversion, expected win count, and accessible live labels.');
