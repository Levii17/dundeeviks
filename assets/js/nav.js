// Mobile Navigation Toggle
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const mainNav = document.getElementById('main-nav');

// Toggle mobile menu
mobileNavToggle.addEventListener('click', () => {
  mainNav.classList.toggle('active');
  mobileNavToggle.textContent = mainNav.classList.contains('active') ? '✕' : '☰';
});

// Close mobile menu when clicking nav links
document.querySelectorAll('#main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    if (mainNav.classList.contains('active')) {
      mainNav.classList.remove('active');
      mobileNavToggle.textContent = '☰';
    }
  });
});