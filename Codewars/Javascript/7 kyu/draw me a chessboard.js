function chessBoard(rows, columns) {
    let resp = []
    for (let i = 0; i < rows; i++) {
        let arr = []
        for (let j = 0; j < columns; j++) {
            if (i % 2 == 0) {
                if (j % 2 == 0) arr.push('O')
                else arr.push('X')
            } else {
                if (j % 2 == 0) arr.push('X')
                else arr.push('O')
            }
        }
        resp.push(arr)
    }
    return resp
}


const chessBoardUp = (rows, columns) => Array.from({ length: rows }, (_, i) => Array.from({ length: columns }, (_, j) => 'OX'[(i + j) % 2]))


let a = 2
console.log(a % 2);

console.debug(chessBoardUp(6, 4));