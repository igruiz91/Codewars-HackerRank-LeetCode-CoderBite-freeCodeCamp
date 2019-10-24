function sortArray(array) {
    let odds = array.filter(n => n%2).sort((a,b) => a-b)
    return array.map(n => (n%2 !=0)? n=odds.shift() : n )
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));