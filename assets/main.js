/**
 * Portfolio — vanilla JS
 * Filter tabs · project expand/collapse · scroll-reveal · scrolled nav
 *
 * No dependencies. Total: ~2KB minified equivalent.
 */
(() => {
  'use strict';

  // ── Footer year ──────────────────────────────────────────────
  const yr = document.getElementById('year');
  if (yr) yr.textContent = String(new Date().getFullYear());

  // ── Nav: add scrolled class past 40px ────────────────────────
  const nav = document.getElementById('nav');
  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      nav.classList.toggle('is-scrolled', window.scrollY > 40);
      ticking = false;
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ── Project filters ──────────────────────────────────────────
  const filters = document.querySelectorAll('.filter');
  const cards = document.querySelectorAll('.pcard');
  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      const f = btn.dataset.filter;
      filters.forEach(b => b.classList.toggle('is-on', b === btn));
      cards.forEach(card => {
        const tags = (card.dataset.filter || '').split(' ');
        const show = f === 'All' || tags.includes(f);
        card.style.display = show ? '' : 'none';
      });
    });
  });

  // ── Project expand/collapse ──────────────────────────────────
  document.querySelectorAll('.pcard__head').forEach(head => {
    head.addEventListener('click', (e) => {
      // Don't intercept clicks on links inside the card
      if (e.target.closest('a')) return;
      const card = head.closest('.pcard');
      const body = card.querySelector('.pcard__body');
      const toggle = card.querySelector('.pcard__toggle');
      const label = card.querySelector('.pcard__toggle-label');
      const open = !card.classList.contains('is-open');
      card.classList.toggle('is-open', open);
      body.hidden = !open;
      toggle.setAttribute('aria-expanded', String(open));
      if (label) label.textContent = open ? 'Close' : 'Read case study';
    });
  });

  // ── Reveal-on-scroll (IntersectionObserver) ─────────────────
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });

    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-in'));
  }

  // ── Smooth-scroll offset fix for anchor jumps (browser scroll-padding handles most) ──
  // Nothing to do — scroll-padding-top in CSS handles sticky-nav offset.
})();
