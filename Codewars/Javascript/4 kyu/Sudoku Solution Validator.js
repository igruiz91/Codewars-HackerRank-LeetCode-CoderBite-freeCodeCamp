const sum45 = (n) => {
  return n === 45;
};

function validSolution(board) {
  let sumh = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let sumv = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let sums = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      sumh[i] += board[i][j];
      sumv[j] += board[i][j];
      sums[Math.floor(i / 3)][Math.floor(j / 3)] += board[i][j];
    }
  }
  for (let i = 0; i < 3; i++) {
    if (!sums[i].every(sum45)) return false;
  }
  return sumh.every(sum45) && sumv.every(sum45);
}

const validSolutionUp = (board) => {
  let validSet = (s) => s.size == 9 && !s.has(0);
  let rowSet = (i) => board[i].reduce((s, index) => s.add(index), new Set());
  let colSet = (i) => board.reduce((s, index) => s.add(index[i]), new Set());
  let boxSet = ([r, c]) =>
    board
      .slice(r, r + 3)
      .reduce(
        (s, index) =>
          index.slice(c, c + 3).reduce((s, index) => s.add(index), s),
        new Set()
      );
  let boxCorner = (i) => [Math.floor(i / 3) * 3, (i % 3) * 3];
  for (var i = 0; i < 9; i++) {
    if (!validSet(rowSet(i)) || !validSet(colSet(i)) || !validSet(boxSet(boxCorner(i))))
      return false;
  }
  return true;
};

let board1 = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
];


console.log(validSolutionUp(board1));