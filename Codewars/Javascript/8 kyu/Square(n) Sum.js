function squareSum(numbers) {
    return numbers.reduce((a, n) => a + n * n, 0)
}


//Ejemplo de divide y venceras
function squareSum2(n) {
    return n.map(square).reduce(sum)
}

function square(n) {
    return n * n;
}

function sum(a, b) {
    return a + b
}

console.log(squareSum2([2, 3, 4, 5]));