function seatsInTheater(nCols, nRows, col, row) {
    return (nRows - row) * ((nCols - col) + 1)
}

console.log(seatsInTheater(60, 100, 60, 1));