import type { BoardState } from "./board";
import type { Move } from "./moves";
import type { Color } from "./piece";

export type GameState = 'playing' | 'check' | 'checkmate' | 'stalemate' | 'draw';

export interface GameSnapshot {
    board: BoardState;
    turn: Color;
    lastMove: Move | null;
}