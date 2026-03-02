let current = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dots span');
const total = slides.length;

function goTo(index) {
  slides[current].classList.remove('active');
  dots[current].classList.remove('active');
  current = index;
  slides[current].classList.add('active');
  dots[current].classList.add('active');
  document.getElementById('counter').textContent = (current + 1) + ' / ' + total;
  document.getElementById('prevBtn').disabled = current === 0;
  document.getElementById('nextBtn').disabled = current === total - 1;
}

function navigate(dir) {
  const next = current + dir;
  if (next >= 0 && next < total) goTo(next);
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') navigate(1);
  if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') navigate(-1);
});

goTo(0);
