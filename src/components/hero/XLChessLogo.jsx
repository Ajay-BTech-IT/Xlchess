import React from 'react';

// Knight SVG - matching the XLChess purple knight logo
const KnightSVG = () => (
  <svg
    viewBox="0 0 100 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    <defs>
      <linearGradient id="knightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#818cf8" />
        <stop offset="100%" stopColor="#6366f1" />
      </linearGradient>
    </defs>
    {/* Knight chess piece shape */}
    <path
      d="M 30,95 L 70,95 L 70,90 L 30,90 Z"
      fill="url(#knightGrad)"
    />
    <path
      d="M 25,90 L 75,90 L 75,85 L 25,85 Z"
      fill="url(#knightGrad)"
    />
    {/* Knight head/body */}
    <path
      d="M 42,85 C 42,85 38,75 35,68 C 32,61 28,56 28,48 C 28,35 35,25 45,20 C 40,18 36,15 35,10 C 38,10 42,13 44,15 C 46,13 49,10 52,10 C 52,15 50,18 48,22 C 58,24 68,32 68,48 C 68,55 65,62 60,68 C 56,73 52,82 52,85 Z"
      fill="url(#knightGrad)"
    />
    {/* Eye */}
    <circle cx="57" cy="38" r="3" fill="#1e1b4b" />
    {/* Nostril/mouth detail */}
    <path
      d="M 35,55 C 33,52 32,48 33,44"
      stroke="#4f46e5"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />
    {/* Mane detail */}
    <path
      d="M 44,22 C 40,28 37,34 38,40 C 39,46 42,50 42,56"
      stroke="#a5b4fc"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      opacity="0.6"
    />
  </svg>
);

const XLChessLogo = () => (
  <div className="flex items-center select-none hero-logo" style={{ opacity: 0 }}>
    <div className="flex flex-col items-start">
      {/* Knight icon */}
      <div style={{ height: 110, width: 'auto' }}>
        <div style={{ width: 90, height: 110 }}>
          <KnightSVG />
        </div>
      </div>
      {/* XLCHESS wordmark */}
      <div className="mt-1">
        <div
          className="font-sans font-black tracking-[0.18em] text-white"
          style={{ fontSize: 20, letterSpacing: '0.18em' }}
        >
          XLCHESS
        </div>
        <div
          className="flex items-center gap-2 mt-0.5"
          style={{ color: '#8892a4' }}
        >
          <div className="h-px flex-1 bg-[#8892a4]" style={{ maxWidth: 28 }} />
          <span className="text-[10px] font-sans font-medium tracking-widest uppercase">
            Excel at Chess
          </span>
          <div className="h-px flex-1 bg-[#8892a4]" style={{ maxWidth: 28 }} />
        </div>
      </div>
    </div>
  </div>
);

export default XLChessLogo;
