import type { Board } from "../interfaces/board";
import type { Color, Piece, PieceType } from "../interfaces/piece";
import { ALL_SQUARES, type Square } from "../interfaces/square";

export const getFile = (square: Square) => {
  return square[0];
}

export const getRank = (square: Square) => {
  return parseInt(square[1]);
}

const createEmptyBoard = () => {
    const board: Board = {} as Board;
    for (const square of ALL_SQUARES.flat()) {
      board[square] = null;
    }
    return board;
}

export const createInitialBoard = () => {
  const board = createEmptyBoard();

  // --- White pieces ---
  board.a1 = createPiece('r', 'w', 'a1');
  board.b1 = createPiece('n', 'w', 'b1');
  board.c1 = createPiece('b', 'w', 'c1');
  board.d1 = createPiece('q', 'w', 'd1');
  board.e1 = createPiece('k', 'w', 'e1');
  board.f1 = createPiece('b', 'w', 'f1');
  board.g1 = createPiece('n', 'w', 'g1');
  board.h1 = createPiece('r', 'w', 'h1');

  for (const file of ['a','b','c','d','e','f','g','h'] as const) {
    board[`${file}2`] = createPiece('p', 'w', `${file}2`);
  }

  // --- Black pieces ---
  board.a8 = createPiece('r', 'b', 'a8');
  board.b8 = createPiece('n', 'b', 'b8');
  board.c8 = createPiece('b', 'b', 'c8');
  board.d8 = createPiece('q', 'b', 'd8');
  board.e8 = createPiece('k', 'b', 'e8');
  board.f8 = createPiece('b', 'b', 'f8');
  board.g8 = createPiece('n', 'b', 'g8');
  board.h8 = createPiece('r', 'b', 'h8');

  for (const file of ['a','b','c','d','e','f','g','h'] as const) {
    board[`${file}7`] = createPiece('p', 'b', `${file}7`);
  }

  return board;
}

export const createPiece = (pieceType: PieceType, color: Color, square: Square) => {
    return { type: pieceType, color, square, hasMoved: false } as Piece;
}

export const isDarkSquare = (square: Square): boolean => {
  const file = square.charCodeAt(0) - "a".charCodeAt(0);
  const rank = Number(square[1]) - 1;

  return (file + rank) % 2 === 0;
};
