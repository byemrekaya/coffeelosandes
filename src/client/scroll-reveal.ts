export function initScrollReveal(): void {
  if (typeof document === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const els = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (!els.length) return;

  const reveal = (el: HTMLElement) => {
    el.classList.add('revealed');
  };

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) reveal(e.target as HTMLElement);
      });
    },
    { rootMargin: '0px 0px 18% 0px', threshold: 0 }
  );

  els.forEach((el) => {
    obs.observe(el);
    requestAnimationFrame(() => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      if (r.top < vh && r.bottom > 0) reveal(el);
    });
  });
}
