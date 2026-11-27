import { useState } from "react";
import Board from "../Board/Board";
import { calculateWinner } from "../../utils/calculateWinner";
import "./Game.css";

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every((s) => s !== null);

  function handleClick(i) {
    // Ignora clique se a posição está ocupada ou se o jogo já acabou.
    if (squares[i] || winner) return;

    const next = squares.slice(); // cópia (não muta o estado)
    next[i] = xIsNext ? "X" : "O";
    setSquares(next);
    setXIsNext(!xIsNext);
  }

  function handleRestart() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  let status;
  if (winner) status = `Vencedor: ${winner}`;
  else if (isDraw) status = "Empate!";
  else status = `Próximo jogador: ${xIsNext ? "X" : "O"}`;

  return (
    <section className="game">
      <p className="status" role="status">{status}</p>
      <Board squares={squares} onSquareClick={handleClick} />
      <button className="restart" onClick={handleRestart}>
        Reiniciar jogo
      </button>
    </section>
  );
}

export default Game;
