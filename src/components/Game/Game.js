import { useState } from "react";
import Board from "../Board/Board";
import WinnerModal from "../WinnerModal/WinnerModal";
import { calculateWinner } from "../../utils/calculateWinner";
import "./Game.css";

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  // true quando o jogador fechou o overlay para ver o tabuleiro
  const [modalClosed, setModalClosed] = useState(false);

  // calculateWinner retorna { winner, line } ou null
  const result = calculateWinner(squares);
  const winner = result ? result.winner : null;
  const winningLine = result ? result.line : [];
  const isDraw = !winner && squares.every((s) => s !== null);

  // O overlay só aparece com vitória ou empate, e se não foi fechado
  const showModal = (winner || isDraw) && !modalClosed;

  function handleClick(i) {
    if (squares[i] || winner) return;
    const next = squares.slice();
    next[i] = xIsNext ? "X" : "O";
    setSquares(next);
    setXIsNext(!xIsNext);
  }

  function handleRestart() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setModalClosed(false);
  }

  let status;
  if (winner) status = `Vencedor: ${winner}`;
  else if (isDraw) status = "Empate!";
  else status = `Próximo jogador: ${xIsNext ? "X" : "O"}`;

  return (
    <section className="game">
      <p className="status" role="status">{status}</p>
      <Board squares={squares} onSquareClick={handleClick} winningLine={winningLine} />
      <button className="restart" onClick={handleRestart}>
        Reiniciar jogo
      </button>

      {showModal && (
        <WinnerModal
          winner={winner}
          onRestart={handleRestart}
          onClose={() => setModalClosed(true)}
        />
      )}
    </section>
  );
}

export default Game;
