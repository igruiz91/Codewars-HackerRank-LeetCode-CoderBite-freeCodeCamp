function bingo(a) {
  let lib = {"b":2,"i":9, "n":14, "g":7, "o":15}
  for(var x of Object.values(lib)){
    if(!a.includes(x)) return "LOSE"
  }
  return "WIN"
}

const bingoUp = (a) => {
  return [2,7,9,14,15].every(n => a.includes(n)) ? "WIN" : "LOSE"
}

console.log(bingo([21,13,2,7,5,14,7,15,9,10]))
console.log(bingoUp([21, 13, 2, 7, 5, 14, 7, 15, 9, 10]));
