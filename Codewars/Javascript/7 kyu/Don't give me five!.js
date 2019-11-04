function dontFive(s, e) {
    let resp = []
    for (let i = s; i <= e; i++) {
        if (i % 5 == 0 || haveFive(i)) continue;
        resp.push(i)
    }
    return resp
}

function haveFive(n) {
    let have = false;
    `${n}`.split('').map(n => +n % 5 == 0 ? have = true : null)
    return have
}

//console.log(haveFive(12346));

console.log(dontFive(44, 58));