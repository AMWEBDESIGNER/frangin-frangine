document.body.classList.add('loading');

window.addEventListener('load', () => window.setTimeout(() => {
  document.querySelector('.loader')?.classList.add('done');
  document.body.classList.remove('loading');
}, 700));

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (!entry.isIntersecting) return;
  entry.target.classList.add('visible');
  observer.unobserve(entry.target);
}), { threshold: .12 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

document.querySelectorAll('.product-tabs button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.product-tabs button').forEach((item) => {
      item.classList.remove('active');
      item.setAttribute('aria-selected', 'false');
    });
    document.querySelectorAll('.product-scene').forEach((scene) => scene.classList.remove('active'));
    button.classList.add('active');
    button.setAttribute('aria-selected', 'true');
    document.querySelector(`[data-scene="${button.dataset.target}"]`)?.classList.add('active');
  });
});

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reducedMotion) {
  const cursor = document.querySelector('.cursor');
  window.addEventListener('pointermove', (event) => {
    cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px) translate(-50%, -50%)`;
  });
  document.querySelectorAll('a, button, .material-photo').forEach((item) => {
    item.addEventListener('mouseenter', () => cursor.classList.add('active'));
    item.addEventListener('mouseleave', () => cursor.classList.remove('active'));
  });

  document.querySelectorAll('.magnetic').forEach((button) => {
    button.addEventListener('pointermove', (event) => {
      const box = button.getBoundingClientRect();
      button.style.transform = `translate(${(event.clientX - box.left - box.width / 2) * .11}px, ${(event.clientY - box.top - box.height / 2) * .14}px)`;
    });
    button.addEventListener('pointerleave', () => button.style.transform = '');
  });

  window.addEventListener('scroll', () => {
    const amount = Math.min(window.scrollY * .045, 55);
    document.querySelectorAll('[data-parallax]').forEach((item) => item.style.translate = `0 ${amount}px`);
  }, { passive: true });

  const canvas = document.querySelector('#flour');
  const context = canvas.getContext('2d');
  let grains = [];
  const resize = () => {
    canvas.width = innerWidth * devicePixelRatio;
    canvas.height = innerHeight * devicePixelRatio;
    context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    grains = Array.from({ length: Math.min(34, Math.floor(innerWidth / 35)) }, () => ({
      x: Math.random() * innerWidth,
      y: Math.random() * innerHeight,
      r: Math.random() * 1.3 + .3,
      speed: Math.random() * .15 + .05,
      drift: Math.random() * .18 - .09,
      alpha: Math.random() * .22 + .06
    }));
  };
  const animate = () => {
    context.clearRect(0, 0, innerWidth, innerHeight);
    grains.forEach((grain) => {
      grain.y -= grain.speed;
      grain.x += grain.drift;
      if (grain.y < -5) grain.y = innerHeight + 5;
      context.beginPath();
      context.arc(grain.x, grain.y, grain.r, 0, Math.PI * 2);
      context.fillStyle = `rgba(245,242,232,${grain.alpha})`;
      context.fill();
    });
    requestAnimationFrame(animate);
  };
  resize();
  animate();
  window.addEventListener('resize', resize);
}
