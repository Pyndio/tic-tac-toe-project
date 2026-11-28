import { calculateWinner } from "./calculateWinner";

test("detecta vitória em linha", () => {
  expect(calculateWinner(["X", "X", "X", null, "O", "O", null, null, null])).toEqual({
    winner: "X",
    line: [0, 1, 2],
  });
});

test("detecta vitória em diagonal", () => {
  expect(calculateWinner(["O", "X", null, "X", "O", null, null, null, "O"])).toEqual({
    winner: "O",
    line: [0, 4, 8],
  });
});

test("retorna null sem vencedor", () => {
  expect(calculateWinner(Array(9).fill(null))).toBeNull();
});
