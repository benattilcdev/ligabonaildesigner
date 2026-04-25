// Scroll suave fake (pode melhorar depois)
document.querySelector('.scroll').addEventListener('click', () => {
  window.scrollTo({
    top: 700,
    behavior: 'smooth'
  });
});