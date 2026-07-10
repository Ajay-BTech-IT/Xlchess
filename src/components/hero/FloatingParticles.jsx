import React from 'react';
import { FLOATING_PIECES } from '../../constants/chess';

const PARTICLE_STYLES = [
  { top: '10%', left: '5%',  animDelay: '0s',    animDur: '8s',  size: '18px', opacity: 0.4 },
  { top: '20%', left: '85%', animDelay: '1.2s',  animDur: '10s', size: '14px', opacity: 0.3 },
  { top: '60%', left: '3%',  animDelay: '2.4s',  animDur: '9s',  size: '20px', opacity: 0.35 },
  { top: '75%', left: '90%', animDelay: '0.8s',  animDur: '11s', size: '16px', opacity: 0.3 },
  { top: '40%', left: '92%', animDelay: '3.1s',  animDur: '7s',  size: '12px', opacity: 0.25 },
  { top: '85%', left: '15%', animDelay: '1.7s',  animDur: '12s', size: '18px', opacity: 0.3 },
  { top: '30%', left: '2%',  animDelay: '4.2s',  animDur: '9s',  size: '14px', opacity: 0.2 },
  { top: '55%', left: '88%', animDelay: '2.9s',  animDur: '10s', size: '16px', opacity: 0.25 },
];

const FloatingParticles = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
    {FLOATING_PIECES.map((symbol, i) => {
      const s = PARTICLE_STYLES[i];
      return (
        <span
          key={i}
          className="absolute select-none hero-particle"
          style={{
            top: s.top,
            left: s.left,
            fontSize: s.size,
            opacity: s.opacity,
            color: '#6366f1',
            animationDelay: s.animDelay,
            animationDuration: s.animDur,
          }}
        >
          {symbol}
        </span>
      );
    })}
  </div>
);

export default FloatingParticles;
