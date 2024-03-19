class BowlingGame {
  constructor() {
    this.rolls = [];
  }

  roll(pins) {
    this.rolls.push(...pins);
  }

  score() {
    let totalScore = 0;
    for (let i = 0; i < this.rolls.length; i++) {
      totalScore += this.rolls[i];
    }
    return totalScore;
  }
}

export default BowlingGame;