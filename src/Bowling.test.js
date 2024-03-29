import BowlingGame from "./Bowling.js";

describe("Calcular puntaje de un juego de Bowling", () => {
  it("Deberia calcular el puntaje de el puntaje mas basico", () => {
    const game1 = new BowlingGame();
    const roll1 = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
    roll1.forEach(score => game1.roll(score));
    expect(game1.score()).toEqual(20);
  });
  it("Deberia calcular el puntaje del juego", () => {
    const game2 = new BowlingGame();
    const roll2 = [1,8,2,7,6,3,5,4,4,3,3,2,4,1,9,0,2,3,4,5];
    roll2.forEach(score => game2.roll(score));
    expect(game2.score()).toEqual(76);
  });
  it("Deberia calcular el puntaje del juego con el spare", () => {
    const game3 = new BowlingGame();
    const roll3 = [5, 5, 4, 5, 8, 2, 1, 3, 0, 4, 5, 2, 6, 4, 2, 3, 7, 2, 4, 4];
    roll3.forEach(score => game3.roll(score));
    expect(game3.score()).toEqual(83);
  });
  it("Deberia calcular el puntaje del juego con el strike", () => {
    const game4 = new BowlingGame();
    const roll4 = [1, 4, 5, 5, 6, 4, 2, 5, 10, 0, 1, 7, 3, 6, 4, 10, 2, 8];
    roll4.forEach(score => game4.roll(score));
    expect(game4.score()).toEqual(118);
  });
});
