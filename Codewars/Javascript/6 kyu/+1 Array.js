function upArray(arr) {
    if (arr.length == 0) return null
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0 || arr[i] > 9)
            return null
    }
    console.log(arr);
    let arr = []
    return `${arr}`.split('').map(a => +a)
}

console.log(upArray([2, 3, -9]));

