document.body.classList.add('loading');
window.addEventListener('load', () => window.setTimeout(() => {
  document.querySelector('.wipe')?.classList.add('done');
  document.body.classList.remove('loading');
}, 650));

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (!entry.isIntersecting) return;
  entry.target.classList.add('visible');
  observer.unobserve(entry.target);
}), { threshold: .13 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const copy = {
  pain: 'Pains, baguettes et spécialités boulangères disponibles selon la fournée.',
  sweet: 'Viennoiseries, pâtisseries et douceurs proposées selon la production du jour.',
  snack: 'Sandwichs et offre salée pour une pause rapide à Saint-Bonnet.'
};
const productCopy = document.querySelector('#product-copy');
document.querySelectorAll('.product').forEach((product) => {
  product.addEventListener('click', () => {
    document.querySelectorAll('.product').forEach((item) => item.classList.remove('active'));
    product.classList.add('active');
    productCopy.animate([{ opacity: 0, transform: 'translateY(8px)' }, { opacity: 1, transform: 'none' }], { duration: 350 });
    productCopy.textContent = copy[product.dataset.product];
  });
});

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('.magnetic').forEach((button) => {
    button.addEventListener('pointermove', (event) => {
      const box = button.getBoundingClientRect();
      button.style.transform = `translate(${(event.clientX - box.left - box.width / 2) * .12}px, ${(event.clientY - box.top - box.height / 2) * .15}px)`;
    });
    button.addEventListener('pointerleave', () => button.style.transform = '');
  });
}
