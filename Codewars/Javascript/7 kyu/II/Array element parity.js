function solve(arr) {
  return arr.filter(a => !arr.includes(-a))[0]
}


const solveUp = (arr) => {
  return arr.find(e => !arr.includes(-e))
}


console.log(solve([-3, 1, 2, 3, -1, -4, -2]));
console.log(solveUp([-3, 1, 2, 3, -1, -4, -2]));