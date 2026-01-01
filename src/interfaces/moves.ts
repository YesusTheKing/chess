import type { Piece } from "./piece";
import type { Square } from "./square";

export interface Move {
  from: Square;     // e.g., "e2"
  to: Square;       // e.g., "e4"
  piece: Piece;     // the piece being moved
  capturedPiece?: Piece; // optional, if a piece was captured
  isCastling?: boolean;  // optional, king-side or queen-side
  isEnPassant?: boolean; // optional, for en passant
  isPromotion?: boolean; // optional, for pawn promotion
}
