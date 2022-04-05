function sudoku(grid) {
  const fillArray = () => Array.from({ length: 9 }, () => new Set());
  let row = fillArray(); let col = fillArray(); let box = fillArray();
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (grid[i][j] != ".") {
        let num = grid[i][j];
        let k = parseInt(i / 3) * 3 + parseInt(j / 3);
        if (row[i].has(num) || col[j].has(num) || box[k].has(num)) return false;
        row[i].add(num);
        col[j].add(num);
        box[k].add(num);
      }
    }
  }
  return true;
}

let grid = [
  [".", ".", ".", "1", "4", ".", ".", "2", "."],
  [".", ".", "6", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", "1", ".", ".", ".", ".", ".", "."],
  [".", "6", "7", ".", ".", ".", ".", ".", "9"],
  [".", ".", ".", ".", ".", ".", "8", "1", "."],
  [".", "3", ".", ".", ".", ".", ".", ".", "6"],
  [".", ".", ".", ".", ".", "7", ".", ".", "."],
  [".", ".", ".", "5", ".", ".", ".", "7", "."],
];

console.log(sudoku(grid));
