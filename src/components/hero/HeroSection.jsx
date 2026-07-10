import React from 'react';
import HeroLeft from './HeroLeft';
import HeroRight from './HeroRight';
import GlobalBackground from './GlobalBackground';
import useHeroAnimations from '../../hooks/useHeroAnimations';
import '../../styles/hero.css';

/**
 * HeroSection
 * ──────────────────────────────────────────────────────────────
 * Replicates the XLChess landing page hero:
 *   Left  — logo, animated headline, blur-in body copy, CTA
 *   Right — interactive chess board card (Anderssen vs Dufresne, 1852)
 *
 * Animations orchestrated via GSAP (loaded via CDN in index.html).
 * Falls back to instant visibility if GSAP is unavailable.
 */
const HeroSection = () => {
  useHeroAnimations();

  return (
    <section id="hero" className="hero-section" aria-label="Hero">

      {/* Global Background Particles */}
      <GlobalBackground />

      {/* Content container */}
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-center items-center min-h-screen pt-24 pb-28">
          <HeroLeft />
          <HeroRight />
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
