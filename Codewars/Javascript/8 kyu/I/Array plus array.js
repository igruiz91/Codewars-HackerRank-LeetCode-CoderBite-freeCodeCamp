function arrayPlusArray(...arrays) {
    return [].concat(...arrays).reduce((a,b)=> a+b,0)
}

function arrayPlusArrayUp(array1, array2) {
   return [...array1, ...array2].reduce((a,b)=> a+b,0) 
}

console.log(arrayPlusArrayUp([1,2,3],[1,2,3]));