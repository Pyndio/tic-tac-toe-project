import "./WinnerModal.css";

// winner: "X" ou "O"; se for null, mostra a mensagem de empate
function WinnerModal({ winner, onRestart, onClose }) {
  const title = winner ? `🎉 Jogador ${winner} venceu!` : "Empate!";

  return (
    <div className="modal-overlay">
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <h2 id="modal-title" className="modal-title">{title}</h2>
        <div className="modal-buttons">
          <button className="modal-play" onClick={onRestart}>
            Jogar novamente
          </button>
          {/* No empate não há casas iluminadas, então o botão só aparece com vencedor */}
          {winner && (
            <button className="modal-close" onClick={onClose}>
              Ver tabuleiro
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default WinnerModal;
