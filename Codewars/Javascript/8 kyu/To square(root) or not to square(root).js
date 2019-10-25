function squareOrSquareRoot(array) {
    return array.map(n => {
        x = Math.sqrt(n)
        return x === parseInt(x) ? x : n ** 2
    });
}

function squareOrSquareRoot2(array) {
    return array.map(x => {
        const r = Math.sqrt(x);
        return (r % 1 == 0) ? r : (x * x);
    });
}

function squareOrSquareRoot3(array) {
    return array.map(x => {
        const n = Math.sqrt(x)
        return Number.isInteger(n) ? n : x * x
    })
}

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));