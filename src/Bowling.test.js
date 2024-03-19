import BowlingGame from "./Bowling.js";

describe("Calcular puntaje de un juego de Bowling", () => {
  it("Deberia calcular el puntaje de el puntaje mas basico", () => {
    const game1 = new BowlingGame();
    const roll1 = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    game1.roll(roll1);
    expect(game1.score()).toEqual(20);
  });
  it("Deberia calcular el puntaje del juego", () => {
    const game2 = new BowlingGame();
    const roll1 = [1,8,2,7,6,3,5,4,4,3,3,2,4,1,9,0,2,3,4,5]
    game2.roll(roll1);
    expect(game2.score()).toEqual(76);
  });
});
