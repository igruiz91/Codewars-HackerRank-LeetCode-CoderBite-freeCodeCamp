/*
Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.
*/

function findLongest(array){
    let len = Number.MIN_VALUE;  
    `${array}`.split(',').map(n=> {
        if(n.length>len.length){
            len = n
        }
    })
    return Number(len)
}

function findLongestUp(arr) {
    return arr.reduce((a,b)=> (`${b}`.length > `${a}`.length) ? b:a)
}

console.log(findLongest([9000, 8, 800]));