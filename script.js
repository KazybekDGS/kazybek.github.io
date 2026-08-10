// Простые эффекты — сайт работает и без JavaScript.
document.querySelectorAll('a[href="#"]').forEach(link => {
  link.addEventListener('click', e => e.preventDefault());
});
