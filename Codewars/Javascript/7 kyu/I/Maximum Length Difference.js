function mxdiflg(a1, a2) {
    if (!a1.length || !a2.length) return -1
    let d1 = a1.map(str => str.length)
    let d2 = a2.map(str => str.length)
    return Math.max(Math.max(...d1) - Math.min(...d2), Math.max(...d2) - Math.min(...d1))
}

function mxdiflg2(a1, a2) {
    var max = -1
    for (let A1 of a1)
        for (A2 of a2)
            max = Math.max(max, Math.abs(A1.length - A2.length))
    return max
}


var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];

console.log(mxdiflg2(s1, s2));