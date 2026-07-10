import React from 'react';

// Word-by-word animated headline line
const AnimatedWords = ({ words, className, isGradient }) => (
  <span className={`block ${className || ''}`} aria-label={words.join(' ')}>
    {words.map((word, i) => (
      <span
        key={i}
        aria-hidden="true"
        className="hero-word inline-block"
        style={{ opacity: 0, transform: 'translateY(20px)', marginRight: i < words.length - 1 ? '0.3em' : 0 }}
        data-delay={i * 0.1}
      >
        {word}
      </span>
    ))}
  </span>
);

const HeroLeft = () => {
  return (




    <div className="lg:col-span-6 space-y-5 md:space-y-8 text-left">

      {/* Logo */}
      <div className="flex items-center select-none hero-logo" style={{ opacity: 0 }}>
        <img
          alt="XLChess logo"
          className="object-contain"
          draggable="false"
          src="/final logo.png"
          style={{ height: '160px', width: 'auto' }}
        />
      </div>

      {/* Headline */}
      <h1
        className="font-sans font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.1] md:leading-[1.05] hero-headline"
        style={{ opacity: 0 }}
      >
        <AnimatedWords words={['Build', 'the', 'Future', 'of']} />
        <span
          className="block text-transparent bg-clip-text hero-gradient-text"
          style={{
            backgroundImage: 'linear-gradient(to right, #6366f1, #818cf8, #a78bfa)',
            opacity: 0,
            transform: 'translateY(20px)',
          }}
        >
          Online Chess
        </span>
      </h1>

      {/* Subtext */}
      <div
        className="font-sans max-w-xl leading-relaxed space-y-3 hero-subtext"
        style={{ opacity: 0, transform: 'translateY(16px)' }}
      >
        <p className="text-xl sm:text-2xl font-medium text-white/90">
          Making the Best Move on the Way to the Top
        </p>
        <p
          className="text-base sm:text-lg"
          style={{ color: '#8892a4' }}
          aria-label="A complete chess platform to play, learn, compete, and grow—built to 
          become the world's #1 destination for chess."
        >
          {[
            'A', 'complete', 'chess', 'platform', 'to', 'play,', 'learn,',
            'compete,', 'and', 'grow—built', 'to', 'become', 'the',
            "world's", '#1', 'destination', 'for', 'chess.',
          ].map((word, i) => (
            <span
              key={i}
              aria-hidden="true"
              className="hero-body-word inline-block"
              style={{ opacity: 0, filter: 'blur(4px)', marginRight: '0.3em' }}
              data-delay={i * 0.04}
            >
              {word}
            </span>
          ))}
        </p>
      </div>

      {/* CTA Button */}
      <div
        className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 hero-cta"
        style={{ opacity: 0, transform: 'translateY(16px)' }}
      >
        <a
          href="#interactive-demo"
          id="hero-cta-primary"
          className="inline-flex items-center justify-center font-sans font-semibold text-[17px] rounded-lg transition-all duration-200 group btn-glow relative overflow-hidden"
          style={{
            background: '#6366f1',
            color: '#fff',
            width: 140,
            height: 64,
            padding: '0 10px',
            boxShadow: '0 20px 40px rgba(99,102,241,0.25)',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Shine overlay */}
          <span className="cta-shine absolute inset-0 pointer-events-none" />

          <img
            alt="Play"
            draggable="false"
            src="/play icon.png"
            style={{
              width: '62px',
              height: '62px',
              objectFit: 'contain',
              flexShrink: 0,
              filter: 'drop-shadow(rgba(99, 102, 240, 0.55) 0px 0px 9.9625px)'
            }}
          />

          <span className="ml-2 font-sans font-semibold text-[17px] flex overflow-hidden" style={{ lineHeight: 1 }}>
            {'Play'.split('').map((ch, i) => (
              <span key={i} className="play-char inline-block">{ch}</span>
            ))}
          </span>
        </a>
      </div>

    </div>
  );
};

export default HeroLeft;
