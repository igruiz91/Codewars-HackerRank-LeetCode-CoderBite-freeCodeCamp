class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }

  guess(n) {
    if (n != this.number) {
      this.lives -= 1;
      if (this.lives < 0) throw new Error();
      return false;
    }
    return true;
  }
}
