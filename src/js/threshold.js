(() => {
  const root = document.getElementById('ar-threshold-explorer');
  if (!root) return;
  const input = document.getElementById('ar-threshold-bid');
  const quote = document.getElementById('ar-threshold-quote');
  const fill = document.getElementById('ar-threshold-fill');
  const marker = document.getElementById('ar-threshold-marker');
  const chart = document.getElementById('ar-threshold-chart');
  const result = document.getElementById('ar-threshold-result');
  function update() {
    const raw = Number(input.value);
    const bid = Number.isFinite(raw) ? Math.max(0, Math.min(20, raw)) : 6;
    const pct = bid / 20 * 100;
    const label = bid.toFixed(1);
    const win = Number(pct.toFixed(1));
    const lose = Number((100 - pct).toFixed(1));
    quote.textContent = '$' + label + ' CPM';
    input.setAttribute('aria-valuetext', '$' + label + ' CPM; ' + win + '% win probability');
    fill.style.width = pct + '%';
    marker.style.left = pct + '%';
    chart.setAttribute('aria-label', 'Uniform threshold range from 0 to 20 CPM. The interval from 0 to ' + label + ' wins and occupies ' + win + '% of the range.');
    result.textContent = 'Win: thresholds $0–' + label + ' CPM → ' + label + ' / 20 = ' + win + '%. Lose: thresholds above $' + label + ' CPM → ' + lose + '%.';
  }
  input.addEventListener('input', update);
  update();
})();
