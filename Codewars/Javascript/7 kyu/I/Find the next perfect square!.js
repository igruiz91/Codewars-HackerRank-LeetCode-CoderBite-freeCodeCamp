function findNextSquare(sq) {
    sq = Math.sqrt(sq)
    return Number.isInteger(sq) ? Math.pow(sq+1,2) :-1;
}

console.log(findNextSquare(122));