/**
 * IntersectionObserver-based reveal for [data-reveal] elements.
 * Respects prefers-reduced-motion.
 */
export function initScrollReveal(): void {
  if (typeof document === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const els = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (!els.length) return;

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('revealed');
      });
    },
    { rootMargin: '0px 0px -60px 0px', threshold: 0.08 }
  );

  els.forEach((el) => obs.observe(el));
}
