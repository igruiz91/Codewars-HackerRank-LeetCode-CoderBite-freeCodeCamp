function sumArray(array) {
    //if (!Array.isArray(array)) return 0
    return array ? array.sort((a, b) => a - b).slice(1, -1).reduce((a, b) => a + b, 0) : 0
}


console.log(sumArray());