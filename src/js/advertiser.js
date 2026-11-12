(() => {
  const $ = (id) => document.getElementById(id);
  if (!$('ar-adv-budget')) return;
  // Main lesson only: advertiser pays auction costs directly, with no fees.
  function advertiserOutcome(s) {
    const N = 1000000, L = 0.02, w = 0.008;
    const B = Math.max(0, Number(s.budget) || 0);
    const k = s.auction === 'second' ? 2 : 1;
    const b0 = k * w / 2;
    const affordable = Math.sqrt(k * B * L / N);
    const b = Math.min(b0, affordable, L);
    const win = b / L, impressions = N * win;
    const cost = N * b * b / (k * L);
    const contribution = impressions * w;
    return { b, win, impressions, cost, contribution, profit: contribution - cost, binding: affordable < Math.min(b0, L) - 1e-12 };
  }
  const money = (x) => '$' + x.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
  function update() {
    const budget = Number($('ar-adv-budget').value);
    const r = advertiserOutcome({budget, auction: $('ar-adv-auction').value});
    $('ar-adv-budget-out').textContent = money(budget);
    $('ar-adv-bid').textContent = '$' + (r.b * 1000).toFixed(4) + ' CPM';
    $('ar-adv-cost').textContent = money(r.cost);
    $('ar-adv-profit').textContent = money(r.profit);
    $('ar-adv-status').textContent = r.impressions.toLocaleString('en-US', {maximumFractionDigits: 2}) + ' expected impressions · ' + money(r.contribution) + ' contribution before spend · ' + (r.binding ? 'budget binding' : 'budget slack; profitable optimum reached');
  }
  $('ar-adv-budget').addEventListener('input', update);
  $('ar-adv-auction').addEventListener('change', update);
  update();
})();
