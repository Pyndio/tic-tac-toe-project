import Square from "../Square/Square";
import "./Board.css";

// winningLine: array com os índices das casas vencedoras (vazio se não há vencedor)
function Board({ squares, onSquareClick, winningLine = [] }) {
  return (
    <div className="board">
      {squares.map((value, i) => (
        <Square
          key={i}
          value={value}
          onSquareClick={() => onSquareClick(i)}
          isWinning={winningLine.includes(i)}
        />
      ))}
    </div>
  );
}

export default Board;
