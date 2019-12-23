function array_diff(a, b) {
    return a.filter(n => b.includes(n))
}

function array_diff2(a, b) {
    return a.filter(x => b.indexOf(x) == -1);
}

console.log(array_diff2([1, 2, 2, 2, 3], [2]));