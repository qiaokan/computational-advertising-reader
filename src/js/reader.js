(() => {
  const root = document.getElementById('adtech-reader');
  if (!root) return;
  const $ = (id) => document.getElementById(id);
  const meta = JSON.parse(root.dataset.chapters);
  const lessons = [...root.querySelectorAll('.ar-lesson')];
  const links = [...root.querySelectorAll('.ar-chapterlink')];
  const last = lessons.length - 1;
  const pad = (i) => String(i + 1).padStart(2, '0');
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (_) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (_) {} },
  };

  // ---------- Theme ----------
  const savedTheme = store.get('ar-theme');
  if (savedTheme === 'light' || savedTheme === 'dark') document.documentElement.dataset.theme = savedTheme;
  $('ar-theme').addEventListener('click', () => {
    const current = document.documentElement.dataset.theme
      || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    store.set('ar-theme', next);
  });

  // ---------- Mobile menu ----------
  const menu = $('ar-menu');
  const setMenu = (open) => { root.classList.toggle('ar-menu-open', open); menu.setAttribute('aria-expanded', String(open)); };
  menu.addEventListener('click', () => setMenu(!root.classList.contains('ar-menu-open')));

  // ---------- Chapters, outline, and deep links ----------
  let chapter = 0;
  let observer = null;

  function buildOutline() {
    const list = $('ar-outline');
    list.textContent = '';
    if (observer) observer.disconnect();
    const heads = [...lessons[chapter].querySelectorAll('h2[id]')];
    const items = new Map();
    for (const h of heads) {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = '#' + h.id;
      a.textContent = h.textContent;
      li.append(a);
      list.append(li);
      items.set(h, a);
    }
    if (!('IntersectionObserver' in window)) return;
    observer = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        items.forEach((a) => a.removeAttribute('aria-current'));
        items.get(e.target)?.setAttribute('aria-current', 'true');
      }
    }, { rootMargin: '0px 0px -75% 0px' });
    heads.forEach((h) => observer.observe(h));
  }

  function showChapter(i) {
    chapter = Math.max(0, Math.min(last, i));
    lessons.forEach((el, k) => { el.hidden = k !== chapter; });
    links.forEach((a, k) => (k === chapter ? a.setAttribute('aria-current', 'page') : a.removeAttribute('aria-current')));
    $('ar-current-label').textContent = `Chapter ${pad(chapter)} of ${pad(last)}`;
    $('ar-current-time').textContent = meta[chapter].time;
    $('ar-page-index').textContent = `${pad(chapter)} / ${pad(last)}`;
    $('ar-prev').disabled = chapter === 0;
    $('ar-next').disabled = chapter === last;
    $('ar-prev-title').textContent = chapter > 0 ? meta[chapter - 1].title : '—';
    $('ar-next-title').textContent = chapter < last ? meta[chapter + 1].title : 'End of reader';
    document.title = `${meta[chapter].title} · Computational Advertising`;
    buildOutline();
    store.set('ar-chapter', String(chapter));
  }

  function route(scroll) {
    const hash = decodeURIComponent(location.hash.slice(1));
    const m = /^chapter-(\d+)$/.exec(hash);
    let target = null;
    if (m) showChapter(Number(m[1]) - 1);
    else if (hash && (target = document.getElementById(hash)) && root.contains(target)) {
      const owner = target.closest('.ar-lesson');
      if (owner) showChapter(lessons.indexOf(owner));
      if (target.tagName === 'DETAILS') target.open = true;
    } else showChapter(Number(store.get('ar-chapter')) || 0);
    setMenu(false);
    if (!scroll) return;
    (target && !m ? target : $('ar-main')).scrollIntoView({ block: 'start', behavior: 'auto' });
  }

  const go = (i) => { location.hash = `chapter-${i + 1}`; };
  $('ar-prev').addEventListener('click', () => chapter > 0 && go(chapter - 1));
  $('ar-next').addEventListener('click', () => chapter < last && go(chapter + 1));
  addEventListener('hashchange', () => route(true));
  route(Boolean(location.hash));

  // ---------- Profit calculator (chapter 3) ----------
  if (!$('ar-budget')) return;
  let state = { budget: 2000, rho: 1, auction: 'first', billing: 'render', delta: 2 };
  const money = (x) => (x < -0.00001 ? '−$' : '$') + Math.abs(x).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const plain = (x, d = 2) => x.toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d });

  // Teaching model (chapter 3, Extension B): Z ~ Uniform(0, L) in $ per billable event, i.i.d. across N opportunities.
  // k = 1 (first price, pay b) or 2 (ideal second price, pay Z; E[Z | Z <= b] = b/2).
  // alpha = probability a win is billed: rho for display-based ("render") billing, 1 for win-based billing.
  // Expected cost C(b) = N*alpha*b^2/(k*L); spread M(b) = (N/L)(rho*v*b - alpha*b^2/k);
  // b* = min{ k*rho*v/(2*alpha), sqrt(k*B*L/(N*alpha)), L }.
  function calculate(s) {
    const N = 1000000, L = 0.02, q = 0.0005, a = 30, g = 40, v = q * a;
    const alpha = s.billing === 'render' ? s.rho : 1;
    const k = s.auction === 'first' ? 1 : 2;
    const unconstrained = Math.min(L, k * s.rho * v / (2 * alpha));
    const budgetLimit = Math.sqrt(k * s.budget * L / (N * alpha));
    const b = Math.min(unconstrained, budgetLimit, L), win = b / L;
    const cost = N * alpha * b * b / (k * L);
    const rendered = N * win * s.rho, conversions = rendered * q, receipts = conversions * a;
    const spread = receipts - cost, adprofit = rendered * (s.delta / 10000) * g - receipts;
    return { b, win, cost, rendered, conversions, receipts, spread, adprofit, binding: budgetLimit < unconstrained - 1e-10 };
  }

  function updateLab() {
    const r = calculate(state);
    $('ar-budget-out').textContent = '$' + plain(state.budget, 0);
    $('ar-rho-out').textContent = plain(state.rho * 100, 0) + '%';
    $('ar-delta-out').textContent = String(Number(state.delta.toFixed(2))) + ' per 10,000';
    $('ar-receipts').textContent = money(r.receipts);
    $('ar-cost').textContent = money(r.cost);
    $('ar-spread-flow').textContent = money(r.spread);
    $('ar-bid').textContent = plain(r.b * 1000, 4);
    $('ar-spread').textContent = money(r.spread);
    $('ar-adprofit').textContent = money(r.adprofit);
    $('ar-adprofit').classList.toggle('ar-negative', r.adprofit < -0.00001);
    $('ar-adprofit').classList.toggle('ar-positive', r.adprofit > 0.00001);
    $('ar-lab-status').textContent = `Win rate ${plain(r.win * 100)}% · ${plain(r.conversions)} attributed conversions · `
      + (r.binding ? 'budget binding: bid capped by the budget' : 'budget slack: spread-maximizing bid reached; budget left unspent');
  }

  for (const [id, key] of [['ar-budget', 'budget'], ['ar-rho', 'rho'], ['ar-delta', 'delta']]) {
    state[key] = Number($(id).value);
    $(id).addEventListener('input', () => { state[key] = Number($(id).value); updateLab(); });
  }
  for (const [id, key] of [['ar-auction', 'auction'], ['ar-billing', 'billing']]) {
    state[key] = $(id).value;
    $(id).addEventListener('change', () => { state[key] = $(id).value; updateLab(); });
  }
  updateLab();
})();
