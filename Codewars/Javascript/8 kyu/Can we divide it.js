function isDivideBy(a, b, c) {
    let arr = [a, b, c]
    for (let i = 0; i <= arr.length; i++) {
        console.log(arr[i]);
        if (arr[i] % arr[0] != 0 || arr[i] % arr[1] != 0 || arr[i] % arr[2] != 0) return false
    }
    return true
}

console.log(isDivideBy(-12, 2, -6));