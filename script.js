/**
 * christopher-portfolio / script.js
 * ─────────────────────────────────
 * Handles:
 *  1. Navigation — scroll-aware styling + mobile menu toggle
 *  2. Hero entry animations
 *  3. Scroll-reveal for section elements
 *  4. Project case-study accordion toggle
 *  5. Active nav link highlighting
 */

'use strict';

/* ─── Utility ──────────────────────────────────────────── */

/** Throttle a function call to once per animation frame */
function throttleRaf(fn) {
  let rafId = null;
  return function (...args) {
    if (rafId) return;
    rafId = requestAnimationFrame(() => {
      fn.apply(this, args);
      rafId = null;
    });
  };
}

/** Check whether user prefers reduced motion */
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

/* ─── 1. Navigation ──────────────────────────────────── */

const nav       = document.getElementById('nav');
const navBurger = document.getElementById('navBurger');
const navLinks  = document.getElementById('navLinks');

/**
 * Add/remove `.scrolled` class based on scroll position.
 * The class triggers a slightly more opaque background.
 */
function handleNavScroll() {
  const scrolled = window.scrollY > 40;
  nav.classList.toggle('scrolled', scrolled);
}

window.addEventListener('scroll', throttleRaf(handleNavScroll), { passive: true });

// Run once on load
handleNavScroll();

/**
 * Mobile hamburger toggle
 */
navBurger.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('nav--open');
  navBurger.setAttribute('aria-expanded', String(isOpen));
});

/**
 * Close mobile menu when a nav link is clicked
 */
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('nav--open');
    navBurger.setAttribute('aria-expanded', 'false');
  });
});

/**
 * Close mobile menu on outside click
 */
document.addEventListener('click', e => {
  if (!nav.contains(e.target) && nav.classList.contains('nav--open')) {
    nav.classList.remove('nav--open');
    navBurger.setAttribute('aria-expanded', 'false');
  }
});

/* ─── 2. Hero entry animations ───────────────────────── */

/**
 * Trigger hero text reveals with a short stagger.
 * If user prefers reduced motion just make everything visible immediately.
 */
function initHeroAnimations() {
  const targets = document.querySelectorAll(
    '.hero__name-line, .hero__title, .hero__subtitle, .hero__actions, .hero__metrics'
  );

  if (prefersReducedMotion) {
    targets.forEach(el => el.classList.add('visible'));
    return;
  }

  // Small delay to allow first paint before revealing
  setTimeout(() => {
    targets.forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 80);
    });
  }, 120);
}

initHeroAnimations();

/* ─── 3. Scroll-reveal for general sections ─────────── */

/**
 * Observe every element that carries `[data-scroll-reveal]`
 * and add `.visible` when it enters the viewport.
 */
function initScrollReveal() {
  const targets = document.querySelectorAll('.section:not(.hero), .project-card, .skill-group, .timeline__item, .impact-card, .architecture-stage, .section-header');
  
  // Configuration for cleaner reveals
  const revealConfig = {
    root: null,
    rootMargin: '0px 0px -100px 0px',
    threshold: 0.15,
  };

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    targets.forEach(el => {
      el.classList.add('visible');
    });
    return;
  }

  // Implement local staggering for grids and lists
  const containers = document.querySelectorAll(
    '.projects__grid, .skills__groups, .timeline, .impact-strip__grid, .architecture-pipeline'
  );

  containers.forEach(container => {
    const children = container.querySelectorAll(
      '.project-card, .skill-group, .timeline__item, .impact-card, .architecture-stage'
    );
    children.forEach((el, index) => {
      // Cap stagger to 3 items to keep perceived performance high
      const delay = (index % 3) * 0.1; 
      el.style.transitionDelay = `${delay}s`;
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    revealConfig
  );

  targets.forEach(el => observer.observe(el));
}

initScrollReveal();

/* ─── 4. Project case-study accordion ───────────────── */

/**
 * Toggle the hidden `<div class="case-study">` for each project card.
 * Uses the `aria-expanded` and `hidden` attributes for accessibility.
 */
function initCaseStudyToggles() {
  const expandBtns = document.querySelectorAll('.project-card__expand-btn');

  expandBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const panel = document.getElementById(targetId);
      const isOpen = btn.getAttribute('aria-expanded') === 'true';
      const card = btn.closest('.project-card');

      btn.setAttribute('aria-expanded', String(!isOpen));
      card.classList.toggle('is-expanded', !isOpen);

      if (isOpen) {
        panel.style.maxHeight = '0px';
        panel.style.opacity = '0';
        setTimeout(() => {
          panel.hidden = true;
        }, 400); // Match CSS transition duration
      } else {
        panel.hidden = false;
        // Small timeout to allow 'hidden' to be removed before animating
        requestAnimationFrame(() => {
          panel.style.maxHeight = panel.scrollHeight + 'px';
          panel.style.opacity = '1';
        });
      }
    });
  });
}

initCaseStudyToggles();

/* ─── 5. Active nav link highlighting ───────────────── */

/**
 * Track which section is currently in view and highlight
 * the corresponding nav link with an `.active` class.
 */
function initActiveNavLinks() {
  const sections = document.querySelectorAll('section[id]');
  const links    = navLinks.querySelectorAll('a');

  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute('id');
        links.forEach(link => {
          const href = link.getAttribute('href').replace('#', '');
          link.classList.toggle('active', href === id);
        });
      });
    },
    {
      rootMargin: '-20% 0px -70% 0px',
      threshold: [0, 0.25, 0.5, 0.75, 1],
    }
  );

  sections.forEach(section => observer.observe(section));
}

initActiveNavLinks();

/* ─── 6. Smooth scroll polyfill for older browsers ──── */

/**
 * If the browser doesn't support smooth scrolling natively,
 * implement it for anchor clicks.
 */
if (!CSS.supports('scroll-behavior', 'smooth')) {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

/* ─── 7. Current year in footer (optional) ──────────── */
const footerCopy = document.querySelector('.footer__copy');
if (footerCopy) {
  const year = new Date().getFullYear();
  footerCopy.textContent = footerCopy.textContent.replace('2025', String(year));
}
