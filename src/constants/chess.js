// 1. Position before Qxd7+
const pos0 = {
  // Black pieces
  a8: 'bR', c8: 'bB', g8: 'bR', a7: 'bP', b7: 'bP', c7: 'bP', d7: 'bP', f7: 'bP', g7: 'bP', h7: 'bP',
  e8: 'bK', b6: 'bB', f3: 'bQ', e7: 'bN',
  // White pieces
  d1: 'wR', a3: 'wB', e4: 'wB', a4: 'wQ', g1: 'wK',
  a2: 'wP', b2: 'wP', c2: 'wP', f2: 'wP', f6: 'wP', g2: 'wP', h2: 'wP'
};

// 2. Qxd7+ Kxd7
const pos1 = { ...pos0, a4: null, d7: 'wQ' }; // White Qxd7+
const pos2 = { ...pos1, e8: null, d7: 'bK' }; // Black Kxd7

// 3. Bf5+ Ke8
const pos3 = { ...pos2, e4: null, f5: 'wB' }; // White Bf5+
const pos4 = { ...pos3, d7: null, e8: 'bK' }; // Black Ke8

// 4. Bd7+ Kf8
const pos5 = { ...pos4, f5: null, d7: 'wB' }; // White Bd7+
const pos6 = { ...pos5, e8: null, f8: 'bK' }; // Black Kf8

// 5. Bxe7#
const pos7 = { ...pos6, a3: null, e7: 'wB' }; // White Bxe7#

const hl = (from, to, color) => ({
  [from]: color === 'w' ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.3)',
  [to]: color === 'w' ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.5)'
});

export const AUTOPLAY_SEQUENCE = [
  { position: pos0, movesLeft: 4, inCheck: null, highlight: {} },
  { position: pos1, movesLeft: 4, inCheck: 'e8', highlight: hl('a4', 'd7', 'w') }, // Qxd7+
  { position: pos2, movesLeft: 3, inCheck: null, highlight: hl('e8', 'd7', 'b') }, // Kxd7
  { position: pos3, movesLeft: 3, inCheck: 'd7', highlight: hl('e4', 'f5', 'w') }, // Bf5+
  { position: pos4, movesLeft: 2, inCheck: null, highlight: hl('d7', 'e8', 'b') }, // Ke8
  { position: pos5, movesLeft: 2, inCheck: 'e8', highlight: hl('f5', 'd7', 'w') }, // Bd7+
  { position: pos6, movesLeft: 1, inCheck: null, highlight: hl('e8', 'f8', 'b') }, // Kf8
  { position: pos7, movesLeft: 1, inCheck: 'f8', highlight: hl('a3', 'e7', 'w'), isFinished: true }, // Bxe7#
];

export const BOARD_POSITION = pos0;

export const HIGHLIGHTED_SQUARES = {};

export const FILES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
export const RANKS = [8, 7, 6, 5, 4, 3, 2, 1];

export const SQUARE_COLORS = {
  light: '#EEEED2',
  dark: '#769656',
};

export const FLOATING_PIECES = ['♞', '♝', '♜', '♟', '♞', '♝', '♜', '♟'];

export const GAME_INFO = {
  label: 'THE EVERGREEN GAME',
  title: 'Anderssen vs Dufresne, 1852',
};
