import BowlingGame from "./Bowling.js";

describe("Calcular puntaje de un juego de Bowling", () => {
  it("Deberia calcular el puntaje de el tiro mas basico", () => {
    const game = new BowlingGame();
    for (let i = 0; i < 20; i++) {
      game.roll(1);
    }
    expect(game.score()).toEqual(20);
  });
});
