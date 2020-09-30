function lostSheep(friday, saturday, total) {
    return ((friday.length == 0) && (saturday.length == 0)) ? 0 : total - friday.concat(saturday).reduce((a, b) => a + b)
}

function lostSheep2(friday, saturday, total) {
    return friday.concat(saturday).reduce((s, l) => s - l)
}

console.log(lostSheep2([1, 2, 3, 5], [1, 2], 21));