(function () {
  const slides = document.querySelectorAll('.slide');
  const dotsContainer = document.getElementById('dots');
  const counter = document.getElementById('counter');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  const total = slides.length;
  let current = 0;

  // Build dots dynamically
  slides.forEach(function (_, i) {
    var dot = document.createElement('span');
    dot.setAttribute('role', 'tab');
    dot.setAttribute('aria-label', 'Slide ' + (i + 1));
    dot.dataset.index = i;
    dotsContainer.appendChild(dot);
  });

  var dots = dotsContainer.querySelectorAll('span');

  function goTo(index) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = index;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
    counter.textContent = (current + 1) + ' / ' + total;
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === total - 1;
    document.documentElement.style.setProperty(
      '--progress-width',
      ((current + 1) / total * 100) + '%'
    );
  }

  function navigate(dir) {
    var next = current + dir;
    if (next >= 0 && next < total) goTo(next);
  }

  // Dot clicks via event delegation
  dotsContainer.addEventListener('click', function (e) {
    var dot = e.target.closest('[data-index]');
    if (dot) goTo(Number(dot.dataset.index));
  });

  prevBtn.addEventListener('click', function () { navigate(-1); });
  nextBtn.addEventListener('click', function () { navigate(1); });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') navigate(1);
    if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   navigate(-1);
  });

  goTo(0);
}());
