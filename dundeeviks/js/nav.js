// Mobile Navigation Toggle
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const mainNav = document.getElementById('main-nav');

mobileNavToggle.addEventListener('click', () => {
  mainNav.classList.toggle('active');
  mobileNavToggle.textContent = mainNav.classList.contains('active') ? '✕' : '☰';
});