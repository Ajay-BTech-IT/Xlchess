import { useEffect } from 'react';

/**
 * Orchestrates the hero section entrance animation sequence.
 * Uses GSAP loaded via window.gsap (CDN).
 * Falls back to CSS transitions if GSAP is not available.
 */
const useHeroAnimations = () => {
  useEffect(() => {
    const gsap = window.gsap;
    if (!gsap) {
      // Fallback: make everything visible immediately
      document.querySelectorAll(
        '.hero-logo, .hero-headline, .hero-gradient-text, .hero-subtext, .hero-cta, .hero-board-wrapper'
      ).forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
        el.style.filter = 'none';
      });
      document.querySelectorAll('.hero-word, .hero-body-word').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
        el.style.filter = 'none';
      });
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // 1. Logo slides in from left
    tl.fromTo(
      '.hero-logo',
      { opacity: 0, x: -30, scale: 0.9 },
      { opacity: 1, x: 0, scale: 1, duration: 0.8 },
      0
    );

    // 2. Headline words stagger up
    tl.fromTo(
      '.hero-headline',
      { opacity: 0 },
      { opacity: 1, duration: 0.01 },
      0.3
    );

    tl.fromTo(
      '.hero-word',
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: (i, target) => {
          const delay = parseFloat(target.dataset.delay || 0);
          return delay;
        },
      },
      0.35
    );

    // 3. Gradient "Online Chess" line
    tl.fromTo(
      '.hero-gradient-text',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
      0.75
    );

    // 4. Subtext container fades in
    tl.fromTo(
      '.hero-subtext',
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.5 },
      0.9
    );

    // 5. Body words blur-in stagger
    tl.fromTo(
      '.hero-body-word',
      { opacity: 0, filter: 'blur(4px)' },
      {
        opacity: 1,
        filter: 'blur(0px)',
        duration: 0.4,
        stagger: (i, target) => {
          const delay = parseFloat(target.dataset.delay || 0);
          return delay;
        },
      },
      0.95
    );

    // 6. CTA button slides up
    tl.fromTo(
      '.hero-cta',
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.5 },
      1.4
    );

    // 7. Board card swings in from right with 3D perspective
    tl.fromTo(
      '.hero-board-wrapper',
      { opacity: 0, x: 40, rotationY: -8 },
      { opacity: 1, x: 0, rotationY: 0, duration: 1.0, ease: 'power2.out' },
      0.2
    );

    // 8. Floating particles fade in after board
    tl.fromTo(
      '.hero-particle',
      { opacity: 0 },
      {
        opacity: (i) => [0.4, 0.3, 0.35, 0.3, 0.25, 0.3, 0.2, 0.25][i % 8],
        duration: 1,
        stagger: 0.15,
      },
      1.0
    );

    // 9. CTA play chars animate on hover (using GSAP for the "Play" letter bounce)
    const ctaEl = document.getElementById('hero-cta-primary');
    if (ctaEl) {
      const chars = ctaEl.querySelectorAll('.play-char');
      ctaEl.addEventListener('mouseenter', () => {
        gsap.fromTo(
          chars,
          { y: 0 },
          { y: -3, duration: 0.2, stagger: 0.04, yoyo: true, repeat: 1, ease: 'power1.inOut' }
        );
      });
    }

    return () => {
      tl.kill();
    };
  }, []);
};

export default useHeroAnimations;
