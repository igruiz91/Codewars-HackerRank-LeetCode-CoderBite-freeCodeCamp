function chooseBestSum(t, k, ls) {
    return ls.reduce((r, e) => r.concat(r.filter(c =>
        c.length < k).map(c =>
            c.concat([e]))), [[]]).filter(c => c.length === k)
        .map(c => c.reduce((a, b) => a + b))
        .filter(s => s <= t)
        .sort((a, b) => b - a)[0] || null;
}
//TODO analizar las soluciones

function chooseBestUp(t, k, ls) {
    if (k == 0) {
        return 0
    }
    if (t <= 0 || k < 0 || ls.length < k) {
        return null
    }
    var best = 0;
    for (var i = 0; i < ls.length; i++) {
        var l = ls.slice()
        l.splice(i, 1);
        var v = ls[i], c = chooseBestUp(t - v, k - 1, l);
        if (c != null && c + v > best && c + v <= t) {
            best = c + v
        }
    }
    return best > 0 ? best : null;
}

function chooseBestSumRec(t, k, ls) {
    let arr = [];

    function rec(sum, ar, n) {
        if (n == 0) {
            arr.push(sum)
        } else {
            for (let i = 0; i < ar.length; i++) {
                rec(sum + ar[i], ar.slice(i + 1), n - 1)
            }
        }
    }

    rec(0, ls, k);

    var sol = arr.sort((a, b) => b - a).find(a => a <= t);
    return typeof sol === 'undefined' ? null : sol;
}

console.log(chooseBestUp(189, 3, [50, 55, 80, 13, 27, 48, 25, 57, 58, 60]));