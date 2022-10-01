function diagonalSum(matrix) {
  let resp =0
  matrix.map((e,i) => resp+=e[i] )
  return resp
}

const diagonalSumUp = (m) => {
  return m.reduce((a,b,i) => a+b[i])
}

let array = [
  [1, 2],
  [3, 4],
];

let array2 = [
  [5, 9, 1, 0],
  [8, 7, 2, 3],
  [1, 4, 1, 9],
  [2, 3, 8, 2],
];

console.log(diagonalSum(array))
console.log(diagonalSum(array2))
