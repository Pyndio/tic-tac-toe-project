import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Game from "./Game";

test("mostra tabuleiro e próximo jogador (T01)", () => {
  render(<Game />);
  expect(screen.getAllByRole("button")).toHaveLength(10); // 9 casas + reiniciar
  expect(screen.getByText("Próximo jogador: X")).toBeInTheDocument();
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
  [0, 3, 1, 4, 2].forEach((i) => userEvent.click(c[i])); // X vence
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
  expect(screen.getByText("Empate!")).toBeInTheDocument();
});
