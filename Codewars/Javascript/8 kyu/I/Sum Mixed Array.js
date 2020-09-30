function sumMix2(x) {
    return x.map(n => +n).reduce((a, b) => a + b)
}

function sumMix(x) {
    return x.reduce((a, b) => +b + a, 0)
}


console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]));