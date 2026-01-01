export type PieceType = "p" | "r" | "n" | "b" | "q" | "k";

export type Color = "w" | "b";

export interface Piece {
  type: PieceType;
  color: Color;
  hasMoved: boolean;
}
export const PieceImages: Record<Color, Record<PieceType, string>> = {
    w: {
        p: "/white_pawn.svg",
        r: "/white_rook.svg",
        n: "/white_knight.svg",
        b: "/white_bishop.svg",
        q: "/white_queen.svg",
        k: "/white_king.svg",
    },
    b: {
        p: "/black_pawn.svg",
        r: "/black_rook.svg",
        n: "/black_knight.svg",
        b: "/black_bishop.svg",
        q: "/black_queen.svg",
        k: "/black_king.svg",
    },
};