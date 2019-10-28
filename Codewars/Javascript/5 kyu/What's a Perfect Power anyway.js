var isPP = function (n) {
    let resp = []
    let s = ``
    for (let i = 2; i < Math.ceil(n / 2) + 1; i++) {
        let count = 1
        let x = i
        let val = 0;
        while (val < n) {
            count++
            val = x ** count
            if (val == n) {
                s += `[${i}, ${count}] `
            }
        }

    }
    if (s.length == 0) return null;
    else {
        return s
    }
}

var isPP2 = function (checking) {
    var current = 2,
        power = 2,
        max = Math.floor(checking / 2);
    while (current <= max) {
        power = 2;
        while (Math.pow(current, power) <= checking) {
            if (checking === Math.pow(current, power)) {
                return [current, power];
            } else {
                power += 1;
            }
        }
        current += 1;
    }
    return null;
}

var isPP = function (n) {
    for (let i = 2; i * i <= n; i++) {
        for (let j = 2; Math.pow(i, j) <= n; j++) {
            if (Math.pow(i, j) == n) return [i, j]
        }
    }
    return null
}

console.log(isPP(81));