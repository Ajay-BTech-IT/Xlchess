import React from 'react';
import ChessPiece from './ChessPiece';
import { FILES, RANKS, SQUARE_COLORS } from '../../constants/chess';

const isLightSquare = (fileIdx, rankIdx) => (fileIdx + rankIdx) % 2 === 0;

const ChessBoard = ({ position, inCheck, highlightedSquares, isFinished }) => {
  return (
    <div className="relative w-full aspect-square overflow-hidden" style={{ borderRadius: 0 }}>
      {/* Board grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(8, 1fr)',
          width: '100%',
          height: '100%',
          position: 'relative',
          boxShadow: 'rgba(0,0,0,0.6) 0px 8px 24px',
        }}
      >
        {RANKS.map((rank, rankIdx) =>
          FILES.map((file, fileIdx) => {
            const square = `${file}${rank}`;
            const isLight = isLightSquare(fileIdx, rankIdx);
            const baseColor = isLight ? SQUARE_COLORS.light : SQUARE_COLORS.dark;
            const highlight = highlightedSquares[square];
            const piece = position[square];
            const isKingInCheck = inCheck === square;

            return (
              <div
                key={square}
                data-square={square}
                style={{
                  aspectRatio: '1/1',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative',
                  backgroundColor: baseColor,
                }}
              >
                {/* Highlight overlay */}
                {highlight && (
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: highlight,
                      zIndex: 1,
                    }}
                  />
                )}

                {/* Check overlay (red background for King) */}
                {isKingInCheck && (
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'radial-gradient(ellipse at center, red 0%, transparent 70%)',
                      zIndex: 1,
                      opacity: 0.8,
                    }}
                  />
                )}

                {/* Piece */}
                {piece && (
                  <div 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      position: 'relative', 
                      zIndex: 2,
                      filter: piece.startsWith('w') 
                        ? 'drop-shadow(rgba(255, 255, 255, 0.4) 6px 6px 8px)' 
                        : 'drop-shadow(rgba(0, 0, 0, 0.5) 6px 6px 8px)'
                    }}
                  >
                    <ChessPiece type={piece} />
                  </div>
                )}

                {/* File label (bottom row = rank 1) */}
                {rank === 1 && (
                  <span
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      bottom: 2,
                      left: 2,
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontSize: 11,
                      fontWeight: 700,
                      color: isLight ? SQUARE_COLORS.dark : SQUARE_COLORS.light,
                      opacity: 0.92,
                      pointerEvents: 'none',
                      userSelect: 'none',
                      zIndex: 25,
                      lineHeight: 1,
                    }}
                  >
                    {file}
                  </span>
                )}

                {/* Rank label (leftmost column = file a) */}
                {file === 'a' && (
                  <span
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      top: 2,
                      left: 2,
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontSize: 11,
                      fontWeight: 700,
                      color: isLight ? SQUARE_COLORS.dark : SQUARE_COLORS.light,
                      opacity: 0.92,
                      pointerEvents: 'none',
                      userSelect: 'none',
                      zIndex: 25,
                      lineHeight: 1,
                    }}
                  >
                    {rank}
                  </span>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ChessBoard;
