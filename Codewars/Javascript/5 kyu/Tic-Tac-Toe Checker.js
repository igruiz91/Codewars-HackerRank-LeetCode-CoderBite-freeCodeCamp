function isSolved(board) {
    var horizontal = new Set(), vertical = new Set(),
        diagonalR = new Set(), diagonalL = new Set(), contador = 0;
    for (let i = 0; i < 3; i++) {
        diagonalR.add(board[i][i])
        diagonalL.add(board[i][2 - i])
        for (let j = 0; j < 3; j++) {
            horizontal.add(board[i][j])
            vertical.add(board[j][i])
            if (board[i][j] == 0) contador++
        }
        if (horizontal.size == 1 && !horizontal.has(0)) return horizontal.has(1) ? 1 : 2;
        if (vertical.size == 1 && !vertical.has(0)) return vertical.has(1) ? 1 : 2;
        horizontal.clear()
        vertical.clear()
    }
    if (diagonalL.size == 1 && !diagonalL.has(0)) return diagonalL.has(1) ? 1 : 2;
    if (diagonalR.size == 1 && !diagonalR.has(0)) return diagonalR.has(1) ? 1 : 2;
    return contador > 0 ? -1 : 0
}

const isSolvedUp = board => {
    board = board.join('-').replace(/,/g, '')
    console.log(board);
    if (/111|1...1...1|1....1....1/.test(board)) return 1
    if (/222|2...2...2|2....2....2/.test(board)) return 2
    return (/0/.test(board)) ? -1 : 0
}

//120-012-001
//1..1..1

var c = [
    [1, 1, 0],
    [1, 1, 2],
    [1, 2, 2]]

var o = [
    [1, 2, 0],
    [0, 1, 2],
    [0, 0, 1]]

console.log(isSolvedUp(c));