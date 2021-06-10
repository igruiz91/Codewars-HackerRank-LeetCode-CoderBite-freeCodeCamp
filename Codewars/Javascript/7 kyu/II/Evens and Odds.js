function evensAndOdds(num) {
  return num % 2 ? num.toString(16) : num.toString(2);
}

const evensAndOddsUp = (n) => {
  return n.toString(n%2 ? 16 : 2)
}


console.log(evensAndOdds(7), evensAndOdds(8));
console.log(evensAndOddsUp(7), evensAndOdds(8));
