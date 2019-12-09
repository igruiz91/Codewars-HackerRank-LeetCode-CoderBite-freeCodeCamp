function cubeOdd(arr) {
    if (arr.some(n => isNaN(n))) return undefined;
    let resp = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) resp += arr[i] ** 3
    }
    return resp
}

const cubeOddNew = arr => {
    let sum = arr.reduce((a, b) => (b % 2 == 0) ? a + 0 : a + b ** 3, 0)
    return isNaN(sum) ? undefined : sum
}

var cubeOddUp = arr => arr.some(x => +x !== x) ? undefined : arr.filter(n => n % 2).reduce((a, b) => a + b ** 3, 0)

console.log(cubeOddUp([-3, -2, 2, 3]));