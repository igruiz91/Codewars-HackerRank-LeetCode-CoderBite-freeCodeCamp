function sumCubes(n) {
    let arr = Array.from(Array(n), (_, i) => i + 1)
    return arr.reduce((a, b) => a + Math.pow(b, 3))
}

const sumCubesUp = n => (n * (n + 1) / 2) ** 2;

const sumCubesUp2 = n => {
    if (n == 1) return n ** 3
    else return n ** 3 + sumCubesUp2(n - 1)
}

console.log(sumCubes(2));
console.log(sumCubesUp(2));
console.log(sumCubesUp2(2));