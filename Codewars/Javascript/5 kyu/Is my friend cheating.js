function removeNb(n) {
    let sumatoria = n * (n + 1) / 2;
    for (let i = n; i > 1; i--) {
        for (let j = i - 1; j > 1; j--) {
            if (i * j == sumatoria - (i + j)) return [[j, i], [i, j]]
        }
    }
    return []
}

const removeNbUp = n => {
    var resp = [];
    for (var i = 1; i <= n; i++) {
        var x = (n * (n + 1) / 2 - i) / (i + 1);
        if (x % 1 === 0 && x <= n) resp.push([i, x])
    }
    return resp
}

console.log(removeNbUp(26));