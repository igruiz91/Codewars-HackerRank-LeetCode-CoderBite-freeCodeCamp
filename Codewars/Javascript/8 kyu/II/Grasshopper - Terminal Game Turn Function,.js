function doTurn() {
  rollDice();
  move();
  combat();
  getCoins();
  buyHealth();
  printStatus();
}

console.log(doTurn());
