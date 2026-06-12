/* =====================================================
   AST — Annan Software Team | Global JS
===================================================== */

// === NAVBAR SCROLL ===
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// === MOBILE NAV ===
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
hamburger?.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
  const bars = hamburger.querySelectorAll('span');
  bars[0].style.transform = mobileNav.classList.contains('open') ? 'rotate(45deg) translate(5px,5px)' : '';
  bars[1].style.opacity   = mobileNav.classList.contains('open') ? '0' : '1';
  bars[2].style.transform = mobileNav.classList.contains('open') ? 'rotate(-45deg) translate(5px,-5px)' : '';
});

// Close mobile nav on link click
document.querySelectorAll('.mobile-nav a').forEach(a => {
  a.addEventListener('click', () => {
    mobileNav.classList.remove('open');
  });
});

// === ACTIVE NAV LINK ===
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    a.classList.add('active');
  }
});

// === FADE UP OBSERVER ===
const fadeEls = document.querySelectorAll('.fade-up');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
fadeEls.forEach(el => observer.observe(el));

// === COUNTER ANIMATION ===
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const suffix = el.dataset.suffix || '';
  const duration = 1600;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(current) + suffix;
  }, 16);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('[data-target]').forEach(el => counterObserver.observe(el));

// === PROJECT FILTER ===
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('[data-category]');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.filter;
    projectCards.forEach(card => {
      if (cat === 'all' || card.dataset.category === cat) {
        card.style.display = '';
        card.style.opacity = '0';
        requestAnimationFrame(() => {
          card.style.transition = 'opacity 0.3s ease';
          card.style.opacity = '1';
        });
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// === EMAILJS CONTACT FORM ===
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

contactForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const btn = contactForm.querySelector('button[type="submit"]');
  btn.textContent = 'Sending...';
  btn.disabled = true;

  try {
    await emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', contactForm);
    contactForm.style.display = 'none';
    formSuccess.style.display = 'block';
  } catch (err) {
    btn.textContent = 'Send Message';
    btn.disabled = false;
    alert('Something went wrong. Please try again or reach us on WhatsApp.');
  }
});
