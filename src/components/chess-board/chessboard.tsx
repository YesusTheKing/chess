import { useState } from "react";
import type { Board } from "../../interfaces/board";
import { createInitialBoard } from "../../utils/utils";
import { ALL_SQUARES } from "../../interfaces/square";
import { SquareBoard } from "../board-square/board-square";

export function ChessBoard(){
    const [board] = useState<Board>(createInitialBoard());
    const squaresArr = ALL_SQUARES;
    return (
        <div className="container p-5 m-2">
            {squaresArr.map((row, rowIndex) => (
                <div key={rowIndex} className="row">
                    {row.map((square, colIndex) => (
                        <SquareBoard key={colIndex} piece={board[square]} square={square} />
                    ))}
                </div>
            ))}
        </div>
    );
}