function findOdd(arr) {
    let count ={};
    arr.map(n=> {
        count[n] = count[n] ? count[n]+1 : 1
    })
    return Object.keys(count).find(key => count[key]%2 ==1)
}

const findOddUp = (arr) => arr.reduce((a,b)=> a^b) 

console.log(findOddUp([ 20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5 ], 5));