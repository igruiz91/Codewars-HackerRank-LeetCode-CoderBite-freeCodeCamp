function sumOfMinimums(arr) {
    return arr.map(n => Math.min(...n)).reduce((a,b)=>a+b)
}

let arr = [[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]
console.log(sumOfMinimums(arr));