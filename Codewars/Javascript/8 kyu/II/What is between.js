function between(a, b) {
    return Array.from({ length: b - a + 1 }, (n, i) => a + i)
}

console.log(between(1, 6));