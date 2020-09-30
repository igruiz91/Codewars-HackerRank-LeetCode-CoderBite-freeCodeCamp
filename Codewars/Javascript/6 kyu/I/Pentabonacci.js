function countOddPentaFib2(n) {
    let arr = []
    for (let i = 1; i <= n; i++) {
        arr.push(calcPentaFib(i))
    }
    return arr.filter(n => n % 2)
}
function calcPentaFib(n) {
    if (n == 0) return 0;
    else if (n == 1 || n == 2) return 1;
    else if (n == 3) return 2;
    else if (n == 4) return 4;
    else {
        return calcPentaFib(n - 1) + calcPentaFib(n - 2) + calcPentaFib(n - 3) + calcPentaFib(n - 4) + calcPentaFib(n - 5)
    }
}

const pentaFib = (n) => {
    let cachedValues = [0, 1, 1, 2, 4];

    if (n < 0) return 0;
    if (n < 5) return cachedValues[n];

    let result = cachedValues.filter(value => value % 2 != 0);

    for (let i = 5; i <= n; i++) {
        let elemento = cachedValues.reduce((acc, n) => acc + n);
        if (elemento % 2 != 0) {
            result.push(elemento);
        }
        cachedValues.push(elemento)
        cachedValues.shift()
    }
    return result
}

const countPentaFiboOdd = function (n) {
    let count = Math.floor(n / 6) * 2;
    const rest = n % 6;
    if (rest < 3) {
        count += rest;
    } else {
        count += 2;
    }
    if (n > 1) count--;
    return count
}

function countOddPentaFib(n) {
    return ~~((n - 1) / 6) + ~~((n - 2) / 6) + 1
}

console.log(pentaFib(60));