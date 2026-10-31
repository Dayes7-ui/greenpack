// ===== Mobile nav toggle =====
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });
}

// ===== Mega menu: click-to-open on touch/mobile, hover handles desktop via CSS =====
document.querySelectorAll('.nav-item.has-mega').forEach(item => {
  const trigger = item.querySelector('.nav-trigger');
  trigger.addEventListener('click', (e) => {
    if (window.innerWidth <= 820) {
      e.preventDefault();
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.nav-item.has-mega').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    }
  });
});

// Close mobile menu when a mega-menu link is followed
document.querySelectorAll('.mega a').forEach(link => {
  link.addEventListener('click', () => {
    if (mainNav) mainNav.classList.remove('open');
    if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('.main-nav > a').forEach(link => {
  link.addEventListener('click', () => {
    if (mainNav) mainNav.classList.remove('open');
    if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ===== Scroll reveal =====
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));

// ===== Contact form (placeholder — wire up to your own backend/email service) =====
const form = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    formNote.textContent = "Thanks — we'll get back to you within a day.";
    form.reset();
  });
}

// ===== Coming Soon notify form =====
const notifyForm = document.getElementById('notifyForm');
const notifyNote = document.getElementById('notifyNote');
if (notifyForm) {
  notifyForm.addEventListener('submit', (e) => {
    e.preventDefault();
    notifyNote.textContent = "You're on the list — we'll email you when it's live.";
    notifyForm.reset();
  });
}

// ===== Footer year =====
document.querySelectorAll('#year').forEach(el => {
  el.textContent = new Date().getFullYear();
});
