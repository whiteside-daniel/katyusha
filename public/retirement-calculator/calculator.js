let chartInstance = null;

function fmt(n) {
  const abs = Math.abs(n);
  if (abs >= 1e9) return '$' + (n / 1e9).toFixed(1) + 'B';
  if (abs >= 1e6) return '$' + (n / 1e6).toFixed(2) + 'M';
  if (abs >= 1e3) return '$' + (n / 1e3).toFixed(0) + 'K';
  return '$' + Math.round(n).toLocaleString();
}

function fmtFull(n) {
  return '$' + Math.round(n).toLocaleString();
}

function simulate(currentAge, retirementAge, netWorth, monthly, r, expenses, expenseGrowth) {
  const rows       = [];
  const prePoints  = [];
  const postPoints = [];
  let   bal        = netWorth;
  let   runOutAge  = null;

  // ── Pre-retirement ──────────────────────────────────────────────────
  prePoints.push({ x: currentAge, y: Math.round(bal) });

  for (let age = currentAge; age < retirementAge; age++) {
    const opening = bal;
    let yearInterest = 0;

    for (let m = 0; m < 12; m++) {
      const interest = bal * r;
      yearInterest  += interest;
      bal            = bal + interest + monthly;
    }

    rows.push({
      age,
      phase:         'pre',
      opening:       Math.round(opening),
      contributions: Math.round(monthly * 12),
      interest:      Math.round(yearInterest),
      expenses:      0,
      closing:       Math.round(bal),
    });

    prePoints.push({ x: age + 1, y: Math.round(bal) });
  }

  const nestEgg = bal;

  // ── Post-retirement ─────────────────────────────────────────────────
  postPoints.push({ x: retirementAge, y: Math.round(bal) }); // shared point

  for (let age = retirementAge; age < 120; age++) {
    const yearOffset  = age - retirementAge;
    const monthlyExp  = expenses * Math.pow(1 + expenseGrowth, yearOffset);
    const opening     = bal;
    let yearInterest  = 0;
    let depleted      = false;

    for (let m = 0; m < 12; m++) {
      const interest = bal * r;
      yearInterest  += interest;
      bal            = bal + interest - monthlyExp;

      if (bal <= 0) {
        runOutAge = age + (m + 1) / 12;
        bal       = 0;
        depleted  = true;
        break;
      }
    }

    rows.push({
      age,
      phase:         'post',
      opening:       Math.round(opening),
      contributions: 0,
      interest:      Math.round(yearInterest),
      expenses:      Math.round(monthlyExp * 12),
      closing:       Math.round(bal),
    });

    postPoints.push({ x: age + 1, y: Math.round(bal) });

    if (depleted) break;
  }

  return { rows, prePoints, postPoints, nestEgg, runOutAge };
}

function renderResultBox(nestEgg, retirementAge, runOutAge) {
  const box   = document.getElementById('resultBox');
  const main  = document.getElementById('resultMain');
  const sub   = document.getElementById('resultSub');
  const neVal = document.getElementById('nestEggVal');
  const neLbl = document.getElementById('nestEggLbl');

  neVal.textContent = fmtFull(nestEgg);
  neLbl.textContent = 'nest egg at age ' + retirementAge;

  if (runOutAge !== null) {
    const yrs            = (runOutAge - retirementAge).toFixed(1);
    main.textContent     = 'Age\u00A0' + Math.floor(runOutAge);
    sub.textContent      = 'when your money runs out \u00B7 ' + yrs + '\u00A0yrs in retirement';
    box.style.background = '#dc3545';
  } else {
    main.textContent     = 'Never';
    sub.textContent      = 'savings outlast age\u00A0120';
    box.style.background = '#198754';
  }
}

function renderChart(prePoints, postPoints, retirementAge) {
  if (chartInstance) chartInstance.destroy();

  chartInstance = new Chart(document.getElementById('chart'), {
    type: 'line',
    data: {
      datasets: [
        {
          label: 'Accumulation',
          data: prePoints,
          borderColor: '#0d6efd',
          backgroundColor: 'rgba(13,110,253,0.1)',
          fill: 'origin',
          tension: 0.35,
          pointRadius: 0,
          borderWidth: 2.5,
        },
        {
          label: 'Drawdown',
          data: postPoints,
          borderColor: '#dc3545',
          backgroundColor: 'rgba(220,53,69,0.08)',
          fill: 'origin',
          tension: 0.35,
          pointRadius: 0,
          borderWidth: 2.5,
        },
      ]
    },
    options: {
      responsive: true,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: { position: 'top' },
        tooltip: {
          callbacks: {
            title: items => 'Age ' + items[0].parsed.x,
            label: ctx  => '  ' + ctx.dataset.label + ': ' + fmtFull(ctx.parsed.y),
          }
        },
        annotation: {
          annotations: {
            retire: {
              type: 'line',
              xMin: retirementAge,
              xMax: retirementAge,
              borderColor: 'rgba(0,0,0,0.25)',
              borderWidth: 1.5,
              borderDash: [6, 4],
              label: {
                display: true,
                content: 'Retirement \u2014 age ' + retirementAge,
                position: 'end',
                backgroundColor: 'rgba(30,30,30,0.65)',
                color: '#fff',
                font: { size: 11 },
                padding: { x: 7, y: 4 },
                yAdjust: 30,
              }
            }
          }
        }
      },
      scales: {
        x: {
          type: 'linear',
          title: { display: true, text: 'Age', font: { weight: '600' } },
          ticks: { stepSize: 5 },
        },
        y: {
          title: { display: true, text: 'Net Worth', font: { weight: '600' } },
          ticks: { callback: v => fmt(v) },
          beginAtZero: true,
        }
      }
    }
  });
}

function renderTable(rows, retirementAge) {
  const tbody = rows.map(row => {
    const pre  = row.phase === 'pre';
    const cls  = pre ? 'row-pre' : 'row-post';
    const phase = pre
      ? '<span class="badge-phase badge-pre">Accumulation</span>'
      : '<span class="badge-phase badge-post">Drawdown</span>';
    const contribs = pre  ? fmtFull(row.contributions) : '<span class="text-muted">—</span>';
    const exp      = !pre ? fmtFull(row.expenses)       : '<span class="text-muted">—</span>';

    return `<tr class="${cls}">
      <td>${row.age}</td>
      <td>${phase}</td>
      <td class="text-end">${fmtFull(row.opening)}</td>
      <td class="text-end">${contribs}</td>
      <td class="text-end">${fmtFull(row.interest)}</td>
      <td class="text-end">${exp}</td>
      <td class="text-end fw-semibold">${fmtFull(row.closing)}</td>
    </tr>`;
  }).join('');

  document.getElementById('tableBody').innerHTML = tbody;
}

function calculate() {
  const currentAge    = parseInt(document.getElementById('currentAge').value)           || 0;
  const retirementAge = parseInt(document.getElementById('retirementAge').value)         || 0;
  const netWorth      = parseFloat(document.getElementById('currentNetWorth').value)     || 0;
  const monthly       = parseFloat(document.getElementById('monthlyContribution').value) || 0;
  const annualReturn  = parseFloat(document.getElementById('annualReturn').value)        || 0;
  const expenses      = parseFloat(document.getElementById('monthlyExpenses').value)     || 0;
  const expenseGrowth = parseFloat(document.getElementById('expenseGrowth').value)       || 0;

  if (retirementAge <= currentAge || currentAge < 1) return;

  const r = annualReturn / 100 / 12;

  const { rows, prePoints, postPoints, nestEgg, runOutAge } =
    simulate(currentAge, retirementAge, netWorth, monthly, r, expenses, expenseGrowth / 100);

  renderResultBox(nestEgg, retirementAge, runOutAge);
  renderChart(prePoints, postPoints, retirementAge);
  renderTable(rows, retirementAge);
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('input').forEach(el => el.addEventListener('input', calculate));
  calculate();
});
