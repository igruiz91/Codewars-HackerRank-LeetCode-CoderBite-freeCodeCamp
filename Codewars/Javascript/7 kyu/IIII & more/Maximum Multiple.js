function maxMultiple(divisor, bound) {
    while (bound % divisor != 0)
        bound--
    return bound
}

const maxMultipleUp = (d, b) => b - b % d


console.log(maxMultipleUp(37, 200));