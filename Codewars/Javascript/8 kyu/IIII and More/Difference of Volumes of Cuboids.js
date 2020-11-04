function findDifference(a, b) {
    return Math.abs(a.reduce((a,b)=> a*b)- b.reduce((a,b) => a*b))
}

console.log(findDifference([9, 7, 2], [5, 2, 2]));