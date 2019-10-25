function addBinary(a, b) {
    return (a + b).toString(2)
}
function addBinary2(a, b) {
    return ((a + b) >>> 0).toString(2);
}
function addBinary3(a, b) {
    var c = a + b;
    var res = '';
    while (c >= 1) {
        var res = c % 2 + res;
        c = Math.floor(c / 2);
    }
    return res;
}

console.log(addBinary(1, 2));