const arrayMadness = (a, b) => a.reduce((a, b) => a + b ** 2, 0) > b.reduce((a, b) => a + b ** 3, 0)


let a = [5, 3, 2, 4, 1], b = [15]
console.log(arrayMadness(a, b));