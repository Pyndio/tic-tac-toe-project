import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Game from "./Game";

test("mostra tabuleiro e próximo jogador (T01)", () => {
  render(<Game />);
  // 9 casas + botão de reiniciar (o overlay não existe no início)
  expect(screen.getAllByRole("button")).toHaveLength(10);
  expect(screen.getByText("Próximo jogador: X")).toBeInTheDocument();
  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
});

test("alterna X e O e não sobrescreve casa ocupada (T02-T04)", () => {
  render(<Game />);
  const casas = screen.getAllByRole("button");
  userEvent.click(casas[0]);
  expect(casas[0]).toHaveTextContent("X");
  userEvent.click(casas[0]);
  expect(casas[0]).toHaveTextContent("X");
  expect(screen.getByText("Próximo jogador: O")).toBeInTheDocument();
});

test("identifica vitória, bloqueia jogadas e reinicia (T05-T07)", () => {
  render(<Game />);
  const c = screen.getAllByRole("button");
  [0, 3, 1, 4, 2].forEach((i) => userEvent.click(c[i]));
  expect(screen.getByText("Vencedor: X")).toBeInTheDocument();
  userEvent.click(c[8]);
  expect(c[8]).toHaveTextContent("");
  userEvent.click(screen.getByText("Reiniciar jogo"));
  expect(screen.getByText("Próximo jogador: X")).toBeInTheDocument();
});

test("identifica empate (T08)", () => {
  render(<Game />);
  const c = screen.getAllByRole("button");
  [0, 1, 2, 4, 3, 5, 7, 6, 8].forEach((i) => userEvent.click(c[i]));
  // "Empate!" aparece no status e no overlay, então conferimos cada um
  expect(screen.getByRole("status")).toHaveTextContent("Empate!");
  expect(screen.getByRole("dialog")).toHaveTextContent("Empate!");
});

test("ilumina as 3 casas da linha vencedora", () => {
  render(<Game />);
  const c = screen.getAllByRole("button");
  [0, 3, 1, 4, 2].forEach((i) => userEvent.click(c[i]));
  [0, 1, 2].forEach((i) => expect(c[i]).toHaveClass("square--winning"));
  [3, 4, 5, 6, 7, 8].forEach((i) => expect(c[i]).not.toHaveClass("square--winning"));
});

test("mostra overlay de vitória e fecha com Ver tabuleiro", () => {
  render(<Game />);
  const c = screen.getAllByRole("button");
  [0, 3, 1, 4, 2].forEach((i) => userEvent.click(c[i]));

  expect(screen.getByRole("dialog")).toBeInTheDocument();
  expect(screen.getByText("🎉 Jogador X venceu!")).toBeInTheDocument();

  userEvent.click(screen.getByText("Ver tabuleiro"));
  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  // as casas continuam iluminadas depois de fechar
  expect(c[0]).toHaveClass("square--winning");
});

test("botão Jogar novamente reinicia o jogo", () => {
  render(<Game />);
  const c = screen.getAllByRole("button");
  [0, 3, 1, 4, 2].forEach((i) => userEvent.click(c[i]));

  userEvent.click(screen.getByText("Jogar novamente"));
  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  expect(screen.getByText("Próximo jogador: X")).toBeInTheDocument();
  expect(c[0]).toHaveTextContent("");
});
