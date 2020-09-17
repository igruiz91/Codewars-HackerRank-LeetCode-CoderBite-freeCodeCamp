function partsSums(ls) {
    let resp = [0]
    let acum = 0
    let len = ls.length - 1
    for (let i = len; i >= 0; i--) {
        acum += ls[i]
        resp.unshift(acum)
    }
    return resp
}

function partsSums(ls) {
    let arr = [0];
    ls.reverse().map(v => arr.push(arr[arr.length - 1] + v));
    return arr.reverse();
}

console.log(partsSums([0, 1, 3, 6, 10]));