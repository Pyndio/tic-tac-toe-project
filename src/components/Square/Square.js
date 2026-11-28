import "./Square.css";

// isWinning: true quando a casa faz parte da linha vencedora
function Square({ value, onSquareClick, isWinning }) {
  const className = isWinning ? "square square--winning" : "square";

  return (
    <button className={className} onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default Square;
