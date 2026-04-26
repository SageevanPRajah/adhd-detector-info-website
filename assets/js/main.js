// Hamburger
const ham = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (ham) ham.addEventListener('click', () => navLinks.classList.toggle('open'));

// Active link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  const href = a.getAttribute('href').split('/').pop();
  if (href === currentPage) a.classList.add('active');
});

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.style.opacity = 1; e.target.style.transform = 'translateY(0)'; } });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .team-card, .timeline-item, .slide-card').forEach(el => {
  el.style.opacity = 0; el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// Contact form
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('.btn-submit');
    btn.textContent = 'Message Sent ✓';
    btn.style.background = '#2e7d32';
    setTimeout(() => { btn.textContent = 'Send Message'; btn.style.background = ''; form.reset(); }, 3000);
  });
}
