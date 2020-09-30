function isAscOrder(arr) {
    let resp = true;
    arr.reduce((acc, n) => acc <= n ? acc = n : resp = false)
    return resp
}

console.log(isAscOrder([1, 2, 3, 4, 5]));