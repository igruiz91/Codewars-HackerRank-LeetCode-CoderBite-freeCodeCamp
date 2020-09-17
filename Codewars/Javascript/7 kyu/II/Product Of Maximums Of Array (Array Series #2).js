function maxProduct(numbers, size){
    return numbers.sort((a,b)=>b-a).slice(0,size).reduce((a,b) =>a*b)
}

console.log(maxProduct([4,3,5], 2));