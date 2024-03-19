class BowlingGame {
  constructor() {
    this.rolls = new Array(21).fill(0); // Array to hold rolls, similar to Java code
    this.currentRoll = 0; // Keep track of the current roll index
  }

  roll(pins) {
    this.rolls[this.currentRoll++] = pins; // Store the pins for the current roll
  }

  score() {
    let score = 0;
    let frameIndex = 0;

    for (let frame = 0; frame < 10; frame++) {
      if (this.isStrike(frameIndex)) {
        score += 10 + this.strikeBonus(frameIndex);
        frameIndex++;
      } else if (this.isSpare(frameIndex)) {
        score += 10 + this.rolls[frameIndex + 2];
        frameIndex += 2;
      } else {
        score += this.sumOfBallsInFrame(frameIndex);
        frameIndex += 2;
      }
    }

    return score;
  }

  isStrike(frameIndex) {
    return this.rolls[frameIndex] === 10;
  }

  isSpare(frameIndex) {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10;
  }

  sumOfBallsInFrame(frameIndex) {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1];
  }

  spareBonus(frameIndex) {
    return this.rolls[frameIndex + 2];
  }

  strikeBonus(frameIndex) {
    return this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2];
  }
}

export default BowlingGame;