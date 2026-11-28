import { render, screen } from "@testing-library/react";
import Board from "./Board";

test("destaca apenas as casas da linha vencedora", () => {
  const squares = ["X", "X", "X", "O", "O", null, null, null, null];
  render(<Board squares={squares} onSquareClick={() => {}} winningLine={[0, 1, 2]} />);

  const casas = screen.getAllByRole("button");
  [0, 1, 2].forEach((i) => expect(casas[i]).toHaveClass("square--winning"));
  expect(casas[3]).not.toHaveClass("square--winning");
});
