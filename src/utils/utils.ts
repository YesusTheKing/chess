import type { Color, Piece, PieceType } from "../interfaces/piece";
import { ALL_SQUARES, type Square } from "../interfaces/square";

export const getFile = (square: Square) => {
  return square[0];
}

export const getRank = (square: Square) => {
  return parseInt(square[1]);
}

export const createEmptyBoard = () => {
    const board: Record<Square, null> = {} as Record<Square, null>;
    for (const square of ALL_SQUARES.flat()) {
      board[square] = null;
    }
    return board;
}

export const createPiece = (pieceType: PieceType, color: Color, square: Square) => {
    return { type: pieceType, color, square, hasMoved: false } as Piece;
}