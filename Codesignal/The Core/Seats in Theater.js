function seatsInTheater(nCols, nRows, col, row) {
  return ((nCols-col)*(nRows-row))
}


console.log(seatsInTheater(16,11,5,3));
console.log(seatsInTheater(13,6,8,3));