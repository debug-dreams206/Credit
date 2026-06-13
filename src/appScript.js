"use strict";

// ── Config ────────────────────────────────────────
const API_BASE = "http://localhost:5000/api";  // Change in prod
const DB_KEY   = "credai_v2_users";
const SES_KEY  = "credai_v2_session";

// ── Storage helpers ───────────────────────────────
const getUsers   = () => { try { return JSON.parse(localStorage.getItem(DB_KEY)||'{}'); } catch(e){return{};} };
const saveUsers  = u  => localStorage.setItem(DB_KEY, JSON.stringify(u));
const getSession = () => { try { return JSON.parse(sessionStorage.getItem(SES_KEY)); } catch(e){return null;} };
const setSession = s  => sessionStorage.setItem(SES_KEY, JSON.stringify(s));
const clearSession = ()=> sessionStorage.removeItem(SES_KEY);

// ── Password hash (frontend fallback) ────────────
async function hashPw(pw) {
  const enc  = new TextEncoder().encode("credai_salt_v2" + pw);
  const buf  = await crypto.subtle.digest("SHA-256", enc);
  return Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,'0')).join('');
}

// ── Toast system ──────────────────────────────────
function toast(msg, type = "info") {
  const wrap  = document.getElementById('toastWrap');
  const colors = { success:'#2DD4BF', error:'#ff2050', warning:'#f59e0b', info:'#00D4FF' };
  const item  = document.createElement('div');
  item.className = 'toast-item';
  item.innerHTML = `<span class="toast-dot" style="background:${colors[type]||colors.info};box-shadow:0 0 8px ${colors[type]||colors.info};"></span><span>${msg}</span>`;
  wrap.appendChild(item);
  requestAnimationFrame(() => { requestAnimationFrame(() => item.classList.add('show')); });
  setTimeout(() => { item.classList.remove('show'); setTimeout(()=>item.remove(),500); }, 4000);
}

// ── Auth Modal ────────────────────────────────────
function openAuth(tab='login')   { document.getElementById('authModal').style.display='flex'; switchTab(tab); lucide.createIcons(); }
function closeAuth()             { document.getElementById('authModal').style.display='none'; }
function switchTab(t) {
  document.getElementById('formLogin').style.display  = t==='login'  ? 'block':'none';
  document.getElementById('formSignup').style.display = t==='signup' ? 'block':'none';
  document.getElementById('tabLogin').classList.toggle('active',  t==='login');
  document.getElementById('tabSignup').classList.toggle('active', t==='signup');
  document.getElementById('li-err').style.display = 'none';
  document.getElementById('su-err').style.display = 'none';
}

async function handleLogin() {
  const email = document.getElementById('li-email').value.trim().toLowerCase();
  const pw    = document.getElementById('li-pass').value;
  const errEl = document.getElementById('li-err');
  if (!email||!pw) { errEl.textContent='Please fill all fields.'; errEl.style.display='block'; return; }

  // Try backend first
  try {
    const res = await apiFetch('/auth/login', 'POST', { email, password: pw });
    if (res.ok) {
      const d = await res.json();
      setSession({ email, name: d.name, token: d.token });
      closeAuth(); loginUI(d.name, email); loadHistory(email);
      toast('Welcome back, ' + d.name + '!', 'success'); return;
    }
  } catch(e) { /* fall through to local */ }

  // Local fallback
  const users = getUsers();
  const hash  = await hashPw(pw);
  if (!users[email] || users[email].pw !== hash) {
    errEl.textContent = 'Invalid credentials.'; errEl.style.display = 'block'; return;
  }
  setSession({ email, name: users[email].name });
  closeAuth(); loginUI(users[email].name, email); loadHistory(email);
  toast('Welcome back, ' + users[email].name + '!', 'success');
}

async function handleSignup() {
  const name  = document.getElementById('su-name').value.trim();
  const email = document.getElementById('su-email').value.trim().toLowerCase();
  const pw    = document.getElementById('su-pass').value;
  const errEl = document.getElementById('su-err');
  if (!name||!email||!pw) { errEl.textContent='Please fill all fields.'; errEl.style.display='block'; return; }
  if (pw.length<6) { errEl.textContent='Password must be 6+ characters.'; errEl.style.display='block'; return; }
  if (!/\S+@\S+\.\S+/.test(email)) { errEl.textContent='Invalid email.'; errEl.style.display='block'; return; }

  // Try backend
  try {
    const res = await apiFetch('/auth/register', 'POST', { name, email, password: pw });
    if (res.ok) {
      const d = await res.json();
      setSession({ email, name, token: d.token });
      closeAuth(); loginUI(name, email);
      toast('Account created! Welcome, ' + name + '!', 'success'); return;
    }
    if (res.status===409) { errEl.textContent='Account already exists.'; errEl.style.display='block'; return; }
  } catch(e) { /* local fallback */ }

  // Local fallback
  const users = getUsers();
  if (users[email]) { errEl.textContent='Account already exists.'; errEl.style.display='block'; return; }
  const hash = await hashPw(pw);
  users[email] = { name, pw: hash, history: [] };
  saveUsers(users);
  setSession({ email, name });
  closeAuth(); loginUI(name, email);
  toast('Account created! Welcome, ' + name + '!', 'success');
}

function handleLogout() {
  clearSession(); logoutUI();
  toast('Signed out successfully.', 'info');
}

// ── UI state ──────────────────────────────────────
function loginUI(name, email) {
  document.getElementById('navLoggedOut').style.display = 'none';
  document.getElementById('navLoggedIn').style.display  = 'flex';
  document.getElementById('heroSignupBtn').style.display= 'none';
  document.getElementById('navName').textContent = name.split(' ')[0];
  document.getElementById('navAvatar').textContent = name.charAt(0).toUpperCase();
  document.getElementById('navHistoryLink').style.display = 'block';
  document.getElementById('history-section').style.display = 'block';
  document.getElementById('profileName').textContent  = name;
  document.getElementById('profileEmail').textContent = email;
  document.getElementById('profileAvatar').textContent = name.charAt(0).toUpperCase();
  lucide.createIcons();
}

function logoutUI() {
  document.getElementById('navLoggedOut').style.display = 'block';
  document.getElementById('navLoggedIn').style.display  = 'none';
  document.getElementById('heroSignupBtn').style.display= 'inline-flex';
  document.getElementById('navHistoryLink').style.display = 'none';
  document.getElementById('history-section').style.display= 'none';
  lucide.createIcons();
}

// ── API helper ────────────────────────────────────
async function apiFetch(path, method='GET', body=null) {
  const opts = { method, headers: { 'Content-Type':'application/json' } };
  if (body) opts.body = JSON.stringify(body);
  return fetch(API_BASE + path, opts);
}

// ── Score computation (local fallback) ───────────
function computeScoreLocal(income, expenses, transactions, mobile, payHist, util) {
  const savingsRatio = income > 0 ? Math.max(0, (income - expenses) / income) : 0;
  const savingsPts   = Math.round(savingsRatio * 180);
  const phPts        = Math.round((payHist / 100) * 150);
  const txPts        = Math.round(Math.min(transactions, 100) * 0.8);
  const mobPts       = Math.round((mobile / 100) * 80);
  const utilPts      = Math.round(Math.max(0, (100 - util) / 100) * 60);
  const total        = 300 + savingsPts + phPts + txPts + mobPts + utilPts;
  const score        = Math.max(300, Math.min(850, total));

  const bands = [
    [750,850,"EXCELLENT","Prime rates apply. Outstanding financial health.","#00D4FF",0.01],
    [700,749,"LOW RISK","Strong profile. Most loans approved easily.","#06b6d4",0.03],
    [650,699,"MODERATE","Good standing. Slightly higher rates possible.","#a78bfa",0.06],
    [580,649,"MEDIUM RISK","Fair. Consider reducing utilization.","#f59e0b",0.10],
    [500,579,"HIGH RISK","Below average. Focus on payment consistency.","#f97316",0.16],
    [300,499,"VERY HIGH RISK","Needs significant improvement.","#ef4444",0.25],
  ];

  let band="HIGH RISK", detail="Needs improvement.", color="#f97316", dp=0.16;
  for (const [lo,hi,b,d,c,p] of bands) {
    if (score>=lo && score<=hi) { band=b;detail=d;color=c;dp=p; break; }
  }

  // Local factor breakdown
  const factors = [
    { name:"Income & Savings", icon:"trending-up",   contribution:savingsPts, maxPossible:180, actualPct:(savingsRatio*100).toFixed(1), tip: savingsRatio>=0.45?"Excellent savings discipline!":savingsRatio>=0.25?"Good savings. Target 45%+ ratio.":"Reduce expenses to improve savings ratio.", color:savingsRatio>=0.45?"green":savingsRatio>=0.25?"amber":"red" },
    { name:"Payment History",  icon:"calendar-check", contribution:phPts,     maxPossible:150, actualPct:(payHist).toFixed(1),    tip: payHist>=90?"Perfect payment record!":payHist>=65?"Mostly on-time. Automate bills.":"Late payments hurt score. Prioritize timely payments.", color:payHist>=90?"green":payHist>=65?"amber":"red" },
    { name:"Transaction Activity", icon:"repeat",     contribution:txPts,     maxPossible:80,  actualPct:(Math.min(transactions,100)).toFixed(1), tip: transactions>=60?"High activity — great behavioral signal.":transactions>=30?"Moderate activity.":"Increase regular activity to build history.", color:transactions>=60?"green":transactions>=30?"amber":"red" },
    { name:"Behavioral Score", icon:"smartphone",     contribution:mobPts,    maxPossible:80,  actualPct:(mobile).toFixed(1),       tip: mobile>=70?"Strong digital footprint!":mobile>=40?"Moderate engagement.":"Low digital usage.", color:mobile>=70?"green":mobile>=40?"amber":"red" },
    { name:"Credit Utilization",icon:"pie-chart",     contribution:utilPts,   maxPossible:60,  actualPct:((100-util)).toFixed(1),   tip: util<=20?"Excellent — below 20% is ideal!":util<=40?"Acceptable — aim for <30%.":"High utilization hurts score. Pay down balances.", color:util<=20?"green":util<=40?"amber":"red" },
  ];

  // Suggestions
  const sugg = [];
  if (savingsRatio<0.30) sugg.push(`💰 Reduce monthly expenses by ~$${Math.round(expenses-income*0.70).toLocaleString()} to hit a 30% savings ratio`);
  if (payHist<75) sugg.push("📅 Set up auto-pay — on-time payments contribute up to 150 pts");
  if (util>30) sugg.push(`💳 Lower credit utilization from ${util}% to below 30%`);
  if (transactions<40) sugg.push("🔁 Increase monthly transactions to 40+ for better behavioral scoring");
  if (mobile<60) sugg.push("📱 Higher digital engagement improves alternative data scoring");
  if (score>=700) sugg.push("🏆 Your profile qualifies for premium credit products!");

  // Loan
  const annualIncome = income * 12;
  let loan;
  if (score>=750) loan = { eligible:true, maxAmount:Math.min(annualIncome*5,500000), rateMin:4.5, rateMax:7.5, tier:"prime" };
  else if (score>=700) loan = { eligible:true, maxAmount:Math.min(annualIncome*3.5,300000), rateMin:7.5, rateMax:11, tier:"standard" };
  else if (score>=650) loan = { eligible:true, maxAmount:Math.min(annualIncome*2,150000), rateMin:11, rateMax:16, tier:"standard" };
  else if (score>=580) loan = { eligible:true, maxAmount:Math.min(annualIncome*1,75000), rateMin:16, rateMax:22, tier:"subprime" };
  else if (score>=500) loan = { eligible:true, maxAmount:Math.min((income-expenses)*12,25000), rateMin:22, rateMax:28, tier:"subprime" };
  else loan = { eligible:false, maxAmount:0, rateMin:0, rateMax:0, tier:"declined" };

  return { score, band, detail, color, defaultProbability:(dp*100).toFixed(1), factors, suggestions:sugg.slice(0,5), loan, delta:null };
}

// ── Live preview ──────────────────────────────────
function livePreview() {
  const income   = parseFloat(document.getElementById('f-income').value)||0;
  const expenses = parseFloat(document.getElementById('f-expenses').value)||0;
  const tx       = parseFloat(document.getElementById('f-transactions').value)||0;
  const mob      = parseFloat(document.getElementById('f-mobile').value)||80;
  const ph       = parseFloat(document.getElementById('f-paymentHistory').value)||100;
  const util     = parseFloat(document.getElementById('f-creditUtil').value)||30;
  const r        = computeScoreLocal(income, expenses, tx, mob, ph, util);
  document.getElementById('livePreviewNum').textContent = r.score;
  document.getElementById('liveBar').style.width = ((r.score-300)/550*100)+'%';
}

// ── Main calculation ──────────────────────────────
let lastScore = null;
let spendChart = null, incExpChart = null, trendChartInstance = null, histChartInstance = null;

async function runCalculation() {
  const btn  = document.getElementById('calcBtn');
  const icon = document.getElementById('calcIcon');
  const text = document.getElementById('calcText');
  if (btn.disabled) return;

  // Loading state
  btn.disabled = true;
  icon.outerHTML = `<div class="loader" id="calcIcon"></div>`;
  text.textContent = 'Analyzing…';

  const income   = parseFloat(document.getElementById('f-income').value)||0;
  const expenses = parseFloat(document.getElementById('f-expenses').value)||0;
  const tx       = parseInt(document.getElementById('f-transactions').value)||0;
  const mob      = parseFloat(document.getElementById('f-mobile').value)||80;
  const ph       = parseFloat(document.getElementById('f-paymentHistory').value)||100;
  const util     = parseFloat(document.getElementById('f-creditUtil').value)||30;

  let result;

  // Validate
  if (expenses > income * 1.5) { toast('Expenses seem unusually high. Please check your inputs.', 'warning'); }

  // Try backend API
  try {
    const session = getSession();
    const res = await Promise.race([
      apiFetch('/predict', 'POST', { income, expenses, transactions: tx, mobileUsage: mob, paymentHistory: ph, creditUtil: util, previousScore: lastScore }),
      new Promise((_,rej) => setTimeout(()=>rej(new Error('timeout')), 3000))
    ]);
    if (res.ok) result = await res.json();
    else throw new Error('API error');
  } catch(e) {
    // Frontend fallback
    result = computeScoreLocal(income, expenses, tx, mob, ph, util);
    if (lastScore !== null) result.delta = result.score - lastScore;
  }

  // Simulate slight delay for realism
  await new Promise(r => setTimeout(r, 600));

  // Restore button
  btn.disabled = false;
  btn.innerHTML = `<i data-lucide="check-circle" style="width:18px;height:18px;" id="calcIcon"></i><span id="calcText">Score Calculated!</span>`;
  lucide.createIcons();
  setTimeout(() => {
    btn.innerHTML = `<i data-lucide="refresh-cw" style="width:18px;height:18px;" id="calcIcon"></i><span id="calcText">Recalculate</span>`;
    lucide.createIcons();
  }, 3500);

  // Render result
  renderResult(result, income, expenses);

  // Save to history
  const session = getSession();
  if (session) {
    const entry = { score: result.score, band: result.band, income, expenses, transactions: tx, mobileUsage: mob, creditUtil: util, date: new Date().toISOString() };
    try {
      await apiFetch(`/history/${session.email}`, 'POST', entry);
    } catch(e) { /* local save */ }
    saveLocalHistory(session.email, entry);
    loadHistory(session.email);

    // Alert on delta
    if (result.delta !== null) {
      if (result.delta > 0) toast(`🎉 Score up ${result.delta} pts! Great improvement.`, 'success');
      else if (result.delta < 0) toast(`⚠️ Score dropped by ${Math.abs(result.delta)} pts.`, 'warning');
    }
    if (result.loan?.eligible && result.score >= 700) toast('🏦 You qualify for prime loan rates!', 'success');
  } else {
    toast('Sign in to save your score history!', 'info');
  }

  lastScore = result.score;
  document.getElementById('resultSection').style.display = 'block';
  document.getElementById('resultSection').scrollIntoView({ behavior:'smooth', block:'nearest' });
}

// ── Render result ─────────────────────────────────
function renderResult(r, income, expenses) {
  // Animate hero ring
  animRing('heroRingFill', r.score, 408, 65);
  document.getElementById('heroScore').textContent = r.score;
  document.getElementById('heroScoreLabel').textContent = r.band;

  // Animate result ring
  animRing('resultRingFill', r.score, 327, 52);

  // Score number animate
  animNumber('resultScoreNum', 0, r.score, 900);

  // Labels
  document.getElementById('resultBand').textContent    = r.band;
  document.getElementById('resultBandBig').textContent = r.band;
  document.getElementById('resultBandBig').style.color = r.color;
  document.getElementById('resultDetail').textContent  = r.detail;
  document.getElementById('resultDefault').textContent = r.defaultProbability + '%';
  document.getElementById('resultDefault').style.color = parseFloat(r.defaultProbability)<=5?'#2DD4BF':parseFloat(r.defaultProbability)<=12?'#f59e0b':'#ff2050';

  // Percentile estimate
  const pct = Math.round(((r.score-300)/550)*85+5);
  document.getElementById('resultPercentile').textContent = 'Top ' + (100-pct) + '%';

  // Delta
  const deltaEl = document.getElementById('resultDelta');
  if (r.delta !== null && r.delta !== undefined) {
    deltaEl.textContent = (r.delta>0?'↑ +':'↓ ')+r.delta+' pts';
    deltaEl.className   = r.delta>0?'delta-up':r.delta<0?'delta-down':'delta-same';
  } else { deltaEl.textContent = 'First check'; deltaEl.className = 'delta-same'; }

  // Factor cards (AI explainability)
  const fc = document.getElementById('factorCards');
  fc.innerHTML = r.factors.map(f => `
    <div class="factor-card bg-${f.color}-faint">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
        <div style="display:flex;align-items:center;gap:8px;">
          <i data-lucide="${f.icon}" style="width:15px;height:15px;" class="col-${f.color}"></i>
          <span style="font-size:0.78rem;font-weight:600;font-family:'Syne',sans-serif;">${f.name}</span>
        </div>
        <span style="font-size:1rem;font-weight:800;font-family:'Syne',sans-serif;" class="col-${f.color}">+${f.contribution}</span>
      </div>
      <div class="factor-bar-bg" style="margin-bottom:8px;">
        <div class="factor-bar bar-${f.color}" data-width="${Math.round(f.contribution/f.maxPossible*100)}%" style="width:0%;"></div>
      </div>
      <p style="font-size:0.72rem;color:rgba(255,255,255,0.4);line-height:1.4;">${f.tip}</p>
      <div style="display:flex;justify-content:space-between;margin-top:6px;">
        <span style="font-size:0.65rem;color:rgba(255,255,255,0.25);">Contribution</span>
        <span style="font-size:0.65rem;font-weight:700;" class="col-${f.color}">${f.contribution} / ${f.maxPossible} pts</span>
      </div>
    </div>
  `).join('');
  lucide.createIcons();

  // Animate factor bars after DOM paint
  requestAnimationFrame(() => {
    document.querySelectorAll('.factor-bar').forEach(bar => {
      bar.style.width = bar.dataset.width;
    });
  });

  // Loan panel
  const lc = document.getElementById('loanContent');
  const loan = r.loan;
  if (loan.eligible) {
    lc.innerHTML = `
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:16px;">
        <span class="loan-badge tier-${loan.tier}" style="font-size:0.75rem;padding:5px 14px;">${loan.tier.toUpperCase()}</span>
        <span style="font-size:0.9rem;color:rgba(255,255,255,0.7);">Eligible</span>
      </div>
      <div style="margin-bottom:14px;">
        <div style="font-size:0.65rem;color:rgba(255,255,255,0.3);letter-spacing:0.08em;font-family:'Syne',sans-serif;margin-bottom:4px;">ESTIMATED MAX LOAN</div>
        <div style="font-family:'Syne',sans-serif;font-size:2rem;font-weight:800;">$${loan.maxAmount.toLocaleString()}</div>
      </div>
      <div style="background:rgba(255,255,255,0.03);border-radius:12px;padding:12px 14px;border:1px solid rgba(255,255,255,0.05);">
        <div style="font-size:0.7rem;color:rgba(255,255,255,0.35);margin-bottom:4px;">INTEREST RATE RANGE</div>
        <div style="font-size:1.1rem;font-weight:700;font-family:'Syne',sans-serif;color:#2DD4BF;">${loan.rateMin}% – ${loan.rateMax}%</div>
        <div style="font-size:0.72rem;color:rgba(255,255,255,0.3);margin-top:4px;">APR · Subject to lender approval</div>
      </div>
    `;
  } else {
    lc.innerHTML = `
      <div style="text-align:center;padding:20px;">
        <div style="width:48px;height:48px;border-radius:50%;background:rgba(255,32,80,0.1);border:1px solid rgba(255,32,80,0.2);display:flex;align-items:center;justify-content:center;margin:0 auto 12px;"><i data-lucide="x-circle" style="width:22px;height:22px;color:#ff2050;"></i></div>
        <p style="color:rgba(255,255,255,0.7);font-size:0.9rem;margin-bottom:8px;">Not eligible at this time</p>
        <p style="font-size:0.78rem;color:rgba(255,255,255,0.35);">Improve your score above 500 to qualify for credit products.</p>
      </div>
    `;
    lucide.createIcons();
  }

  // Suggestions
  const sl = document.getElementById('suggestionsList');
  sl.innerHTML = r.suggestions.map(s => `<div class="suggestion-item">${s}</div>`).join('');

  // Analytics charts
  renderAnalytics(income, expenses);

  // Dashboard update
  updateDashboard(r);
}

// ── Animated ring ─────────────────────────────────
function animRing(id, score, total, r) {
  const el = document.getElementById(id);
  if (!el) return;
  const pct    = (score - 300) / 550;
  const offset = total * (1 - pct);
  const color  = score>=750?'#00D4FF':score>=650?'#a78bfa':score>=580?'#f59e0b':'#ff2050';
  el.setAttribute('stroke-dasharray', total);
  el.style.stroke = color;
  requestAnimationFrame(() => { el.setAttribute('stroke-dashoffset', offset); });
}

// ── Animated number counter ───────────────────────
function animNumber(id, from, to, dur) {
  const el = document.getElementById(id);
  if (!el) return;
  const start = performance.now();
  const step  = now => {
    const p = Math.min((now-start)/dur,1);
    const e = 1-Math.pow(1-p,3);
    el.textContent = Math.round(from+(to-from)*e);
    if (p<1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

// ── Analytics charts ──────────────────────────────
function renderAnalytics(income, expenses) {
  const savings = Math.max(0, income - expenses);
  const other   = Math.max(0, expenses * 0.3);
  const housing = Math.max(0, expenses * 0.4);
  const food    = Math.max(0, expenses * 0.2);
  const misc    = Math.max(0, expenses * 0.1);

  // Spending pie
  if (spendChart) spendChart.destroy();
  const sCtx = document.getElementById('spendChart');
  if (sCtx) {
    spendChart = new Chart(sCtx, {
      type: 'doughnut',
      data: {
        labels: ['Housing','Food','Other','Misc','Savings'],
        datasets: [{
          data: [housing,food,other,misc,savings],
          backgroundColor: ['#8B5CF6','#00D4FF','#f59e0b','#f97316','#2DD4BF'],
          borderColor: 'transparent', borderWidth: 0,
        }]
      },
      options: {
        responsive: true, maintainAspectRatio: false, cutout: '68%',
        plugins: {
          legend: { position:'right', labels:{ color:'rgba(255,255,255,0.5)', font:{size:10,family:'DM Sans'}, boxWidth:10, padding:8 } },
          tooltip: { backgroundColor:'rgba(4,6,15,0.95)', titleColor:'#00D4FF', bodyColor:'#fff', borderColor:'rgba(255,255,255,0.1)', borderWidth:1 }
        }
      }
    });
  }

  // Income vs expense bar
  if (incExpChart) incExpChart.destroy();
  const iCtx = document.getElementById('incExpChart');
  if (iCtx) {
    incExpChart = new Chart(iCtx, {
      type: 'bar',
      data: {
        labels: ['Income','Expenses','Savings'],
        datasets: [{
          data: [income, expenses, savings],
          backgroundColor: ['rgba(0,212,255,0.25)','rgba(255,32,80,0.25)','rgba(45,212,191,0.25)'],
          borderColor:     ['#00D4FF','#ff2050','#2DD4BF'],
          borderWidth: 1.5, borderRadius: 8,
        }]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend:{ display:false }, tooltip:{ backgroundColor:'rgba(4,6,15,0.95)', titleColor:'#00D4FF', bodyColor:'#fff', borderColor:'rgba(255,255,255,0.1)', borderWidth:1 } },
        scales: {
          x: { grid:{ color:'rgba(255,255,255,0.04)' }, ticks:{ color:'rgba(255,255,255,0.4)', font:{size:10} } },
          y: { grid:{ color:'rgba(255,255,255,0.04)' }, ticks:{ color:'rgba(255,255,255,0.4)', font:{size:10}, callback: v=>'$'+v.toLocaleString() } }
        }
      }
    });
  }
}

// ── Dashboard update ──────────────────────────────
function updateDashboard(r) {
  const pct = Math.round(((r.score-300)/550)*44+55);
  const capped = Math.min(99, Math.max(40, pct));
  document.getElementById('dashApproval').textContent = capped + '%';
  document.getElementById('dashApprovalBar').style.width = capped + '%';
  document.getElementById('dashDefault').textContent = r.defaultProbability + '%';
  updateTrendChart();
}

// ── History helpers ───────────────────────────────
function saveLocalHistory(email, entry) {
  const users = getUsers();
  if (!users[email]) users[email] = { history: [] };
  if (!users[email].history) users[email].history = [];
  users[email].history.unshift({ ...entry, savedAt: Date.now() });
  if (users[email].history.length > 50) users[email].history = users[email].history.slice(0,50);
  saveUsers(users);
}

function getLocalHistory(email) {
  const users = getUsers();
  return users[email]?.history || [];
}

function loadHistory(email) {
  let history = getLocalHistory(email);

  // Try to merge from backend
  apiFetch(`/history/${email}`).then(res=>res.json()).then(d => {
    if (d.history && d.history.length > 0) {
      // Merge: prefer backend data
      history = d.history;
      const users = getUsers();
      if (!users[email]) users[email] = {};
      users[email].history = history;
      saveUsers(users);
      renderHistory(email, history);
    }
  }).catch(()=>{});

  renderHistory(email, history);
}

function renderHistory(email, history) {
  // Profile stats
  document.getElementById('profTotal').textContent  = history.length;
  document.getElementById('dashTotal').textContent  = history.length;

  if (history.length > 0) {
    const scores = history.map(h=>h.score);
    document.getElementById('profBest').textContent   = Math.max(...scores);
    document.getElementById('profLatest').textContent = scores[0];
    document.getElementById('profAvg').textContent    = Math.round(scores.reduce((a,b)=>a+b,0)/scores.length);
  } else {
    ['profBest','profLatest','profAvg'].forEach(id => document.getElementById(id).textContent = '—');
  }

  // Empty state
  const isEmpty = history.length === 0;
  document.getElementById('histEmpty').style.display = isEmpty ? 'block' : 'none';
  document.getElementById('histRows').innerHTML = '';

  if (!isEmpty) {
    document.getElementById('histRows').innerHTML = history.map((h,i) => {
      const d = new Date(h.date || h.savedAt);
      const dateStr = d.toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'});
      const timeStr = d.toLocaleTimeString('en-US',{hour:'2-digit',minute:'2-digit'});
      const col = h.score>=700?'#00D4FF':h.score>=580?'#f59e0b':'#ff2050';
      return `
        <div class="hist-row">
          <div style="display:flex;align-items:center;gap:16px;">
            <div style="width:38px;height:38px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:0.75rem;font-weight:800;font-family:'Syne',sans-serif;background:${col}15;color:${col};">#${i+1}</div>
            <div>
              <div style="font-size:0.9rem;font-weight:600;">${dateStr} <span style="color:rgba(255,255,255,0.35);font-size:0.78rem;">${timeStr}</span></div>
              <div style="font-size:0.75rem;color:rgba(255,255,255,0.35);">Income $${(h.income||0).toLocaleString()} · Expenses $${(h.expenses||0).toLocaleString()}</div>
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:12px;">
            <span style="font-family:'Syne',sans-serif;font-size:1.4rem;font-weight:800;color:${col};">${h.score}</span>
            <span style="padding:3px 10px;border-radius:99px;font-size:0.68rem;font-weight:700;font-family:'Syne',sans-serif;background:${col}15;color:${col};border:1px solid ${col}30;">${h.band||'—'}</span>
          </div>
        </div>
      `;
    }).join('');
  }

  // History chart
  const hcc = document.getElementById('histChartContainer');
  if (history.length > 1) {
    hcc.style.display = 'block';
    const last10 = [...history].reverse().slice(-10);
    const labels = last10.map(h=>new Date(h.date||h.savedAt).toLocaleDateString('en-US',{month:'short',day:'numeric'}));
    const data   = last10.map(h=>h.score);

    if (histChartInstance) histChartInstance.destroy();
    const ctx = document.getElementById('histChart');
    if (ctx) {
      const grad = ctx.getContext('2d').createLinearGradient(0,0,0,180);
      grad.addColorStop(0,'rgba(0,212,255,0.3)');
      grad.addColorStop(1,'rgba(0,212,255,0)');
      histChartInstance = new Chart(ctx, {
        type:'line',
        data:{ labels, datasets:[{ data, borderColor:'#00D4FF', backgroundColor:grad, borderWidth:2, fill:true, tension:0.4, pointBackgroundColor:'#8B5CF6', pointBorderColor:'#fff', pointRadius:4 }] },
        options:{ responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false},tooltip:{backgroundColor:'rgba(4,6,15,0.9)',titleColor:'#00D4FF',bodyColor:'#fff',borderColor:'rgba(255,255,255,0.1)',borderWidth:1}}, scales:{ x:{grid:{color:'rgba(255,255,255,0.04)'},ticks:{color:'rgba(255,255,255,0.35)',font:{size:10}}}, y:{min:300,max:850,grid:{color:'rgba(255,255,255,0.04)'},ticks:{color:'rgba(255,255,255,0.35)',font:{size:10}}} } }
      });
    }
  } else { hcc.style.display = 'none'; }

  updateTrendChart(history);
}

// ── Trend chart (dashboard) ───────────────────────
function updateTrendChart(history) {
  const ctx = document.getElementById('trendChart');
  if (!ctx) return;

  let labels, scores;
  if (history && history.length > 0) {
    const map = {};
    history.forEach(h => {
      const d = new Date(h.date||h.savedAt);
      const k = d.toLocaleString('en-US',{month:'short',year:'2-digit'});
      if (!map[k]) map[k] = { sum:0, count:0, ts:d.getTime() };
      map[k].sum   += h.score;
      map[k].count++;
    });
    const sorted = Object.entries(map).sort((a,b)=>a[1].ts-b[1].ts).slice(-8);
    labels = sorted.map(e=>e[0]);
    scores = sorted.map(e=>Math.round(e[1].sum/e[1].count));
  } else {
    labels = ['Jan','Feb','Mar','Apr','May','Jun','Jul'];
    scores = [580,620,590,660,640,730,710];
  }

  const c    = ctx.getContext('2d');
  const grad = c.createLinearGradient(0,0,0,ctx.offsetHeight||200);
  grad.addColorStop(0,'rgba(0,212,255,0.25)');
  grad.addColorStop(1,'rgba(0,212,255,0)');

  if (trendChartInstance) trendChartInstance.destroy();
  trendChartInstance = new Chart(ctx, {
    type:'line',
    data:{ labels, datasets:[{ data:scores, borderColor:'#00D4FF', backgroundColor:grad, borderWidth:2, fill:true, tension:0.4, pointBackgroundColor:'#8B5CF6', pointBorderColor:'#fff', pointBorderWidth:1.5, pointRadius:4, pointHoverRadius:6 }] },
    options:{
      responsive:true, maintainAspectRatio:false,
      plugins:{ legend:{display:false}, tooltip:{backgroundColor:'rgba(4,6,15,0.95)',titleColor:'#00D4FF',bodyColor:'#fff',borderColor:'rgba(0,212,255,0.3)',borderWidth:1,callbacks:{label:c=>` Score: ${c.parsed.y}`}} },
      scales:{ x:{grid:{color:'rgba(255,255,255,0.04)'},ticks:{color:'rgba(255,255,255,0.35)',font:{size:10}}}, y:{min:300,max:850,grid:{color:'rgba(255,255,255,0.04)'},ticks:{color:'rgba(255,255,255,0.35)',font:{size:10}}} }
    }
  });
}

// ── Export CSV ────────────────────────────────────
function exportCSV() {
  const session = getSession();
  if (!session) return;
  const h = getLocalHistory(session.email);
  const csv = ['Date,Score,Band,Income,Expenses']
    .concat(h.map(r=>`${new Date(r.date||r.savedAt).toLocaleDateString()},${r.score},${r.band||''},${r.income||''},${r.expenses||''}`))
    .join('\n');
  const a = document.createElement('a');
  a.href = 'data:text/csv,' + encodeURIComponent(csv);
  a.download = 'credai-history.csv';
  a.click();
  toast('History exported as CSV!', 'success');
}

function clearHistory() {
  const session = getSession();
  if (!session || !confirm('Clear all score history?')) return;
  const users = getUsers();
  if (users[session.email]) { users[session.email].history = []; saveUsers(users); }
  apiFetch(`/history/${session.email}`, 'DELETE').catch(()=>{});
  renderHistory(session.email, []);
  toast('History cleared.', 'info');
}

// ── Scroll helper ─────────────────────────────────
function scrollTo(id) { document.getElementById(id)?.scrollIntoView({ behavior:'smooth' }); }

// ── Intersection observer for reveals ─────────────
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); } });
}, { threshold: 0.12 });

// ── Init ──────────────────────────────────────────
(function initApp() {
  try { lucide.createIcons(); } catch(e) { console.warn('lucide not ready', e); }
  livePreview();
  try { updateTrendChart(null); } catch(e) { console.warn('Chart not ready', e); }

  // Restore session
  const session = getSession();
  if (session) { loginUI(session.name, session.email); loadHistory(session.email); }

  // Reveal observer
  document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

  // Auth overlay click
  document.getElementById('authModal').addEventListener('click', e => {
    if (e.target === document.getElementById('authModal')) closeAuth();
  });

  // Keyboard shortcuts
  document.getElementById('li-pass')?.addEventListener('keydown', e => { if(e.key==='Enter') handleLogin(); });
  document.getElementById('su-pass')?.addEventListener('keydown', e => { if(e.key==='Enter') handleSignup(); });
})();

// ── Scroll progress bar ──────────────────────────
window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = (scrollTop / scrollHeight) * 100;
  const bar = document.getElementById('scroll-progress');
  if (bar) bar.style.width = progress + '%';
});

// ── Custom cursor ─────────────────────────────────
(function() {
  const glow = document.getElementById('cursorGlow');
  const trail = document.getElementById('cursorTrail');
  let mx = -100, my = -100, tx = -100, ty = -100;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    if (glow) { glow.style.left = mx + 'px'; glow.style.top = my + 'px'; }
  });
  function animTrail() {
    tx += (mx - tx) * 0.15;
    ty += (my - ty) * 0.15;
    if (trail) { trail.style.left = tx + 'px'; trail.style.top = ty + 'px'; }
    requestAnimationFrame(animTrail);
  }
  animTrail();

  document.querySelectorAll('button, a, .btn-primary, .btn-ghost, .feat-card, .how-step').forEach(el => {
    el.addEventListener('mouseenter', () => { if(glow){glow.style.width='40px';glow.style.height='40px';} });
    el.addEventListener('mouseleave', () => { if(glow){glow.style.width='20px';glow.style.height='20px';} });
  });
})();

// ── Particles canvas ─────────────────────────────
(function() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W = canvas.width = window.innerWidth;
  let H = canvas.height = window.innerHeight;
  window.addEventListener('resize', () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; });

  const N = 60;
  const pts = Array.from({length: N}, () => ({
    x: Math.random()*W, y: Math.random()*H,
    vx: (Math.random()-0.5)*0.3, vy: (Math.random()-0.5)*0.3,
    r: Math.random()*1.5+0.5,
    c: Math.random() > 0.5 ? [0,212,255] : [139,92,246]
  }));

  function draw() {
    ctx.clearRect(0,0,W,H);
    pts.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
      ctx.fillStyle = `rgba(${p.c[0]},${p.c[1]},${p.c[2]},0.6)`;
      ctx.fill();
    });
    // Draw connections
    for (let i = 0; i < N; i++) {
      for (let j = i+1; j < N; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
        const dist = Math.sqrt(dx*dx+dy*dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(pts[i].x, pts[i].y);
          ctx.lineTo(pts[j].x, pts[j].y);
          const alpha = (1 - dist/120) * 0.12;
          ctx.strokeStyle = `rgba(0,212,255,${alpha})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
})();

// ── Mouse-tracking card tilt ──────────────────────
document.querySelectorAll('.how-step').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left, y = e.clientY - rect.top;
    const cx = rect.width/2, cy = rect.height/2;
    const rx = (y - cy) / cy * 4;
    const ry = -(x - cx) / cx * 4;
    card.style.transform = `translateY(-8px) scale(1.01) perspective(600px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    card.style.setProperty('--mx', (x/rect.width*100)+'%');
    card.style.setProperty('--my', (y/rect.height*100)+'%');
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// ── Animated counters for stats ───────────────────
const statTargets = [12, 47, 97, 128];
const statIds = ['stat1','stat2','stat3','stat4'];
let statsAnimated = false;

function animateStats() {
  if (statsAnimated) return;
  statsAnimated = true;
  statTargets.forEach((target, i) => {
    const el = document.getElementById(statIds[i]);
    if (!el) return;
    let start = 0;
    const duration = 1500;
    const startTime = performance.now();
    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  });
}

const statsObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) animateStats(); });
}, { threshold: 0.3 });
const statsSection = document.querySelector('#how-it-works');
if (statsSection) statsObs.observe(statsSection);

// ── Hero entry animations ─────────────────────────
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeSlideDown { from{opacity:0;transform:translateY(-20px)} to{opacity:1;transform:translateY(0)} }
  @keyframes fadeSlideUp   { from{opacity:0;transform:translateY(30px)}  to{opacity:1;transform:translateY(0)} }
`;
document.head.appendChild(style);

// ── History section divider sync ─────────────────
// Patch loginUI to show divider when logged in
const _origLoginUI = window.loginUI;
window.loginUIWithDivider = function(name, email) {
  loginUI(name, email);
  const d = document.getElementById('hist-divider');
  if (d) d.style.display = 'block';
};
// Also patch show/hide of history section
const _origLogoutUI = window.logoutUI;

// ── Ripple effect ─────────────────────────────────
document.querySelectorAll('.ripple').forEach(el => {
  el.addEventListener('mousedown', e => {
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--rx', (e.clientX - rect.left) + 'px');
    el.style.setProperty('--ry', (e.clientY - rect.top) + 'px');
  });
});

// Add pulse keyframe
const styleSheet = document.styleSheets[0];
try { styleSheet.insertRule('@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }', styleSheet.cssRules.length); } catch(e){}
