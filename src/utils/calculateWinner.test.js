import { calculateWinner } from "./calculateWinner";

test("detecta vitória em linha", () => {
  expect(calculateWinner(["X", "X", "X", null, "O", "O", null, null, null])).toBe("X");
});

test("detecta vitória em diagonal", () => {
  expect(calculateWinner(["O", "X", null, "X", "O", null, null, null, "O"])).toBe("O");
});

test("retorna null sem vencedor", () => {
  expect(calculateWinner(Array(9).fill(null))).toBeNull();
});
