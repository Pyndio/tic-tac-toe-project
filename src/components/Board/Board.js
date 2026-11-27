import Square from "../Square/Square";
import "./Board.css";

function Board({ squares, onSquareClick }) {
  return (
    <div className="board">
      {squares.map((value, i) => (
        <Square key={i} value={value} onSquareClick={() => onSquareClick(i)} />
      ))}
    </div>
  );
}

export default Board;
