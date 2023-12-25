function solequa(n) {
  const solutions = [];

 for (let x = 2; x < Math.ceil(Math.sqrt(n)) + 1; x++) {

  }
  return solutions.sort((a, b) => b[0] - a[0]);
};


//x2 - 4 * y2 = n

console.log(solequa(90005));
// console.log(solequa(12));
// console.log(solequa(5));

/* (x - 2 * y) * (x + 2 * y) = 90005 *-1


*/
