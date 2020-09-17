function findMultiples(integer, limit) {
    let resp = [];
    for (let i = integer; i <= limit; i++)
        if (!(i % integer)) resp.push(i)
    return resp
}

const findMultiplesUp = (n, l) => Array.from({ length: l / n }, (a, i) => i * n + n)

console.log(findMultiplesUp(5, 25));