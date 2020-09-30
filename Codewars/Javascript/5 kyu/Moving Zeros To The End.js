var moveZeros = function (arr) {
    console.log(arr)
    let len = arr.length;
    let resp = [];
    let contador = 0
    for (let i = 0; i < len; i++) {
        if (arr[i] === 0) {
            contador++
        } else {
            resp.push(arr[i])
        }
    }
    for (let j = 0; j < contador; j++) {
        resp.push(0)
    }
    return resp
}

function moveZeros2(arr) {
    return arr.filter(n => n !== 0).concat(arr.filter(z => z === 0))
}
console.log(moveZeros2([false, 1, 0, 1, 2, 0, 1, 3, "a"]));