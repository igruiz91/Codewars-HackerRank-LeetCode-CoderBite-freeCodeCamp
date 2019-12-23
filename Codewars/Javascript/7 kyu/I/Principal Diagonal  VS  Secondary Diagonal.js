function diagonal(matrix) {
    let principal = 0, secondary = 0;
    matrix.map((v, i) => {
        principal += v[i]
        secondary += v[v.length - 1 - i]
    })
    return principal > secondary ? 'Principal Diagonal win!' : secondary > principal ? 'Secondary Diagonal win!' : 'Draw!'
}



var matrix = [
    [1, 2, 2, 5, 1],
    [4, 1, 6, 1, 1],
    [1, 8, 5, 6, 2],
    [1, 5, 2, 1, 2],
    [1, 8, 2, 6, 1]
]

console.log(diagonal(matrix));