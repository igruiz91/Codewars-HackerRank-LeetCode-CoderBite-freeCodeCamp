function sumDigits(number) {
    return `${Math.abs(number)}`.split('').map(n => +n).reduce((a, b) => a + b)
}


console.log(sumDigits(1234567890))