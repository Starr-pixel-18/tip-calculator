let pct = 18, people = 1;

function calc() {
  const bill = parseFloat(document.getElementById('bill').value) || 0;
  const tip = bill * pct / 100;
  const total = bill + tip;
  document.getElementById('tip-amt').textContent = '$' + tip.toFixed(2);
  document.getElementById('total-amt').textContent = '$' + total.toFixed(2);
  document.getElementById('per-person').textContent = '$' + (total / people).toFixed(2);
}

function setPct(v) {
  pct = v;
  document.getElementById('tip-range').value = v;
  document.getElementById('tip-label').textContent = v + '%';
  document.querySelectorAll('.quick-btn').forEach(b => b.classList.toggle('active', +b.dataset.v === v));
  calc();
}

function setRange(v) {
  pct = +v;
  document.getElementById('tip-label').textContent = v + '%';
  document.querySelectorAll('.quick-btn').forEach(b => b.classList.toggle('active', +b.dataset.v === +v));
  calc();
}

function changePpl(d) {
  people = Math.max(1, people + d);
  document.getElementById('ppl-display').textContent = people;
  document.getElementById('ppl-label').textContent = people === 1 ? 'person' : 'people';
  calc();
}

function resetAll() {
  document.getElementById('bill').value = '';
  setPct(18);
  people = 1;
  document.getElementById('ppl-display').textContent = '1';
  document.getElementById('ppl-label').textContent = 'person';
  calc();
}
