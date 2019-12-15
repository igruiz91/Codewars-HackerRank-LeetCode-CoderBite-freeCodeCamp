function nextSmaller(n) {
    const convertNumber = num => `${num}`.split('').sort().join('')
    if (n < 10) return -1
    digits = convertNumber(n)
    if ([... new Set(digits)].length == 1) return -1
    do {
        n--;
    } while (convertNumber(n) != digits)
    return n > 10 ? n : -1
}


const nextSmallerNew = n => {
    let num = `${n}`.split('')
    let contador = 0, pos = num.length - 2
    while (num[num.length - 1] > num[pos]) {
        contador++
        pos--
    }
    [num[num.length - 1], num[pos]] = [num[pos], num[num.length - 1]]
    return Number(num.slice(0, pos).concat(num.slice(-(num.length - pos - 1)).sort((a, b) => b - a)).join(''))
}
//6215484505231
//6215484505213
//621548450523

console.log(nextSmallerNew(1321812));