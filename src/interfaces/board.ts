import type { Piece } from "./piece";
import type { Square } from "./square";

export type Board = Record<Square, Piece | null>;

export type BoardState = Board;