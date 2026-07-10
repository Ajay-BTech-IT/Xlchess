import React, { useState, useEffect } from 'react';
import ChessBoard from './ChessBoard';
import { GAME_INFO, AUTOPLAY_SEQUENCE } from '../../constants/chess';

const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="text-[#6366f1] animate-pulse" aria-hidden="true">
    <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
  </svg>
);

const RefreshIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="text-[#8a99bf]" aria-hidden="true">
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
  </svg>
);

const HeroRight = () => {
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    const frame = AUTOPLAY_SEQUENCE[frameIndex];
    if (frame.isFinished) return;

    const timer = setTimeout(() => {
      if (frameIndex < AUTOPLAY_SEQUENCE.length - 1) {
        setFrameIndex(prev => prev + 1);
      }
    }, 2500); // 2.5s per frame

    return () => clearTimeout(timer);
  }, [frameIndex]);

  const currentFrame = AUTOPLAY_SEQUENCE[frameIndex];
  const isFinished = currentFrame.isFinished;

  return (
    <div
      className="lg:col-span-6 flex justify-center hero-board-wrapper"
      style={{
        opacity: 0,
        perspective: '1000px',
      }}
    >
      <div
        className="w-full max-w-[420px] md:max-w-[480.4px]"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Card */}
        <div
          className="bg-[rgb(15,29,77)] border border-[#1b235c] shadow-2xl overflow-hidden"
          style={{ borderRadius: 0 }}
        >
          <div className="p-4 bg-[rgb(15,29,77)]">
            <div className="flex flex-col gap-4">

              {/* Board */}
              <div className="relative overflow-hidden" style={{ borderRadius: 0 }}>
                <ChessBoard 
                  position={currentFrame.position} 
                  inCheck={currentFrame.inCheck} 
                  highlightedSquares={currentFrame.highlight} 
                  isFinished={isFinished}
                />
              </div>

              {/* Game info row */}
              <div className="flex items-center justify-between px-0 mt-2">
                {/* Left: game name + title */}
                <div>
                  <p className="text-xs text-[#8a99bf] font-sans font-medium uppercase tracking-wider">
                    CAN YOU FINISH {GAME_INFO.label}?
                  </p>
                  <div className="flex flex-col mt-1">
                    <span className="text-sm font-sans text-white font-semibold leading-tight">
                      White to move.
                    </span>
                  </div>
                </div>

                {/* Right: moves left badge */}
                <div 
                  className={`flex flex-col items-center px-4 py-1 rounded-xl border ${isFinished ? 'border-orange-500' : 'border-[#1b235c]'} bg-[#0f1d4d] shadow-sm transition-colors duration-300`}
                >
                  <span className={`text-xl font-mono font-bold leading-none ${isFinished ? 'text-orange-400' : 'text-[#818cf8]'}`}>
                    {currentFrame.movesLeft}
                  </span>
                  <span className="text-[9px] font-sans text-[#8a99bf] uppercase tracking-widest mt-0.5">
                    moves left
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 mt-1">
                {!isFinished ? (
                  <button
                    disabled
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-sans text-sm font-semibold bg-[#0f1d4d] border border-[#1b235c] text-[#8a99bf] opacity-50 cursor-not-allowed shadow-sm"
                  >
                    <PlayIcon />
                    Autoplay in Progress...
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => setFrameIndex(0)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-sans text-sm font-semibold bg-[#111830] border border-[#2a365c] text-white shadow-sm hover:bg-[#1a2442] transition-colors"
                    >
                      <RefreshIcon />
                      Reset Puzzle
                    </button>
                    <button
                      onClick={() => setFrameIndex(0)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-sans text-sm font-semibold bg-[#111830] border border-[#2a365c] text-white shadow-sm hover:bg-[#1a2442] transition-colors"
                    >
                      <RefreshIcon />
                      Replay Full Game
                    </button>
                  </>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroRight;
