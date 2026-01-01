import { PieceImages, type Piece } from "../../interfaces/piece";
import type { Square } from "../../interfaces/square";
import { isDarkSquare } from "../../utils/utils";

export function SquareBoard(props: {piece: Piece | null,square: Square}){
    const element = props.piece ? (<img className="z-0 chess-piece" src={PieceImages[props.piece.color][props.piece.type]} alt={props.piece.type} />) : null;
    const isDark = isDarkSquare(props.square);
    const bgColor = isDark ? "bg-secondary" : "bg-light";
    return (
        <div className={`chess-square col-md-1 d-flex justify-content-center align-items-center position-relative cursor-pointer ${bgColor}`}>
            <div className="content position-relative z-1">
                {element}
            </div>
            <div className="indicator position-absolute z-3 top-0 start-0 m-1">
                {props.square}
            </div>
            
        </div>
    );
}