const head = (arr) => arr[0]
const init = (arr) => arr.slice(0,-1)
const tail = (arr) => arr.slice(1)
const last = (arr) => arr.slice(-1)



console.log(last([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(tail([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(init([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
