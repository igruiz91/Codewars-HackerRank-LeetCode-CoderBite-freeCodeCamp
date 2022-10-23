function sumSquares(a) {
  return a.reduce((r, x) => r += x**2,0)
}

console.log(sumSquares([1, 2, 3, 4, 5]));
