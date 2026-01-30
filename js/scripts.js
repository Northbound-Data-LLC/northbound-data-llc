/**
 * Northbound Data - Main JavaScript
 * Handles mobile navigation, scroll animations, and page load orchestration
 */

document.addEventListener('DOMContentLoaded', function() {
  // Mobile Navigation Toggle
  initMobileNav();

  // Scroll Animations
  initScrollAnimations();

  // Active Nav Link
  setActiveNavLink();

  // Nav Shadow on Scroll
  initNavShadow();

  // Animated Stat Counters
  initStatCounters();

  // Page load orchestration
  initPageLoad();
});

/**
 * Page Load Orchestration
 * Triggers hero elements with staggered timing on load
 */
function initPageLoad() {
  // Small delay to ensure paint, then trigger above-fold fade-ins
  requestAnimationFrame(function() {
    setTimeout(function() {
      var heroFadeIns = document.querySelectorAll('.hero .fade-in, .hero.fade-in, .page-header .fade-in, .article__header.fade-in');
      heroFadeIns.forEach(function(el) {
        el.classList.add('visible');
      });
    }, 100);
  });
}

/**
 * Mobile Navigation
 */
function initMobileNav() {
  const toggle = document.querySelector('.nav__toggle');
  const mobileNav = document.querySelector('.nav__mobile');

  if (!toggle || !mobileNav) return;

  toggle.addEventListener('click', function() {
    const isActive = toggle.classList.toggle('active');
    mobileNav.classList.toggle('active');

    // Prevent body scroll when nav is open
    document.body.style.overflow = isActive ? 'hidden' : '';

    // Update ARIA attributes
    toggle.setAttribute('aria-expanded', isActive);
  });

  // Close mobile nav when clicking a link
  const mobileLinks = mobileNav.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      toggle.classList.remove('active');
      mobileNav.classList.remove('active');
      document.body.style.overflow = '';
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Close mobile nav on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
      toggle.classList.remove('active');
      mobileNav.classList.remove('active');
      document.body.style.overflow = '';
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

/**
 * Scroll Animations using Intersection Observer
 */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.fade-in');

  if (!animatedElements.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animatedElements.forEach(el => observer.observe(el));
}

/**
 * Set Active Navigation Link
 */
function setActiveNavLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav__links a, .nav__mobile-links a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');

    // Handle both absolute and relative paths
    if (currentPath.endsWith(href) ||
        (href === 'index.html' && (currentPath === '/' || currentPath.endsWith('/')))) {
      link.classList.add('active');
    }
  });
}

/**
 * Nav Shadow on Scroll
 */
function initNavShadow() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  function updateShadow() {
    if (window.scrollY > 10) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
  }

  window.addEventListener('scroll', updateShadow, { passive: true });
  updateShadow();
}

/**
 * Animated Stat Counters
 */
function initStatCounters() {
  const counters = document.querySelectorAll('.stat__value[data-target]');
  if (!counters.length) return;

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach(function(counter) { observer.observe(counter); });
}

function animateCounter(el) {
  var target = parseInt(el.getAttribute('data-target'), 10);
  var suffix = el.getAttribute('data-suffix') || '';
  var duration = 1800;
  var start = performance.now();

  function update(now) {
    var elapsed = now - start;
    var progress = Math.min(elapsed / duration, 1);
    // Ease-out cubic for smooth deceleration
    var eased = 1 - Math.pow(1 - progress, 3);
    var current = Math.round(eased * target);
    el.textContent = current + suffix;
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

/**
 * Smooth scroll for anchor links (fallback for browsers without CSS scroll-behavior)
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;

    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
