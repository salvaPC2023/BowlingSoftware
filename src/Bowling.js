class BowlingGame {
  constructor() {
    this.rolls = [];
  }

  roll(pins) {
    this.rolls.push(pins);
  }

  score() {
    let totalScore = 0;
    let rollIndex = 0;

    for (let frame = 0; frame < 10; frame++) {
      if (this.isStrike(rollIndex)) {
        totalScore += 10 + this.strikeBonus(rollIndex);
        rollIndex += 1;
      } else if (this.isSpare(rollIndex)) {
        totalScore += 10 + this.rolls[rollIndex + 2];
        rollIndex += 2;
      } else {
        totalScore += this.rolls[rollIndex] + this.rolls[rollIndex + 1];
        rollIndex += 2;
      }
    }

    return totalScore;
  }

  isStrike(rollIndex) {
    return this.rolls[rollIndex] === 10;
  }

  isSpare(rollIndex) {
    return this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10;
  }

  strikeBonus(rollIndex) {
    return this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
  }
}

export default BowlingGame;
