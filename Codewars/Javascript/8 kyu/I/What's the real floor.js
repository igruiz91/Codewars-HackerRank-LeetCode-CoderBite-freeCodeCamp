function getRealFloor(n) {
    return n < 13 ? n - 1 : n - 2
}

console.log(getRealFloor(15));