function shortestDistance(a, b, c) {
    return Math.min(
        Math.sqrt(a * a + (b + c) ** 2), Math.sqrt(b * b + (a + c) ** 2), Math.sqrt(c * c + (a + b) ** 2)
    )
}

console.log(shortestDistance(1, 2, 3));