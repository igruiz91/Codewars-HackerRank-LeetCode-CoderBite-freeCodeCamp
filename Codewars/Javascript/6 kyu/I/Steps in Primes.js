function step(g, m, n) {
    for (let i = m; i <= n; i++)
        if (isPrime(i) && isPrime(i + g)) return [i, i + g]
    return null
}

const isPrime = n => {
    if (n < 2) return false
    for (let i = 2; i * i < n; i++)
        if (n % i == 0) return false
    return true
}

function isPrimeUp(n) {
    var r = Math.sqrt(n) || 0;
    for (var i = 0; i <= r && n % i; i++);
    return i > r
}

function stepUp(g, m, n) {
    for (var i = m; i <= n - g; i++)
        if (isPrimeUp(i) && isPrimeUp(i + g)) return [i, i + g]
    return null
}

console.log(step(4, 100, 110));