/**
 * Northbound Data - Main JavaScript
 * Handles mobile navigation and scroll animations
 */

document.addEventListener('DOMContentLoaded', function() {
  // Mobile Navigation Toggle
  initMobileNav();

  // Scroll Animations
  initScrollAnimations();

  // Active Nav Link
  setActiveNavLink();
});

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
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Optional: unobserve after animation
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
