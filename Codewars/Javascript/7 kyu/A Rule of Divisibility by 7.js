function seven(m) {
    let count = 0
    if (m == 0) return [0, 0]
    if (m < 71) count++
    while (m > 99) {
        let n = String(m)
        let numero = n.slice(0, -1)
        let resto = n.slice(-1)
        m = Number(numero) - Number(resto * 2);
        console.log(m);
        ++count;
    }
    return [m, count]
}

function sevenUp(n) {
    let count = 0;
    while (n.toString().length > 2) {
        n = Math.floor(n / 10) - (n % 10) * 2;
        count++
    }
    return [n, count]
}

function sevenUp2(n, i = 0) {
    return n < 100 ? [n, i] : sevenUp(Math.floor(n / 10) - 2 * (n % 10), i++);
}

console.log(sevenUp2(980173));