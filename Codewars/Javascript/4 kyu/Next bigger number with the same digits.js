function nextBigger(n) {
    const digitos = `${n}`.split('').sort((a, b) => a - b).join('');
    if (n <= 11 || n == mayorPosible) return -1
    else {
        do {
            n++
        } while (digitosNumero(n) != digitos)
    }
    return n
}

function mayorPosible(n) {
    return Number(`${n}`.split('').sort((a, b) => b - a).join(''))
}

function digitosNumero(n) {
    return `${n}`.split('').sort((a, b) => a - b).join('')
}


console.log(nextBigger(513));
console.log(nextBigger(2063));
console.log(nextBigger(1497));