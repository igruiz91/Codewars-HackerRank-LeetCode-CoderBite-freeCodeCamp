var posibles;

function maxApoyo(n, r, a) {
    for (var i = r + 1; i < n - 1; i++) {
        var suma = [...a, i].reduce((a, s) => a + s);
        console.log(suma);
        suma == n ? posibles.push([...a, i]) : suma < n ? maxApoyo(n, i, [...a, i]) : 0
        console.log(posibles);
    }
}

function maximumProduct(n) {
    var max = 0;
    var pmax = 0;
    posibles = [];
    maxApoyo(n, 1, [], posibles);
    // console.log(posibles);
    for (p in posibles) {
        mul = posibles[p].reduce((a, m) => a * m);
        if (mul > max) {
            pmax = p;
            max = mul;
        }
    }
    return max
}

//console.log(esPrimo());
//console.log(dividirNumero(11));

console.log(maxApoyo());
console.log(maximumProduct(20));