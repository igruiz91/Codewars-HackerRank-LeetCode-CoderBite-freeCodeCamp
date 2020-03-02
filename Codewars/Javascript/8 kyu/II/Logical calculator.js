function logicalCalc(array, op){
    const operations ={AND: (a,b)=> a && b, OR: (a,b)=> a || b, XOR: (a,b)=> a !== b}
    return array.reduce(operations[op])
}

console.log(logicalCalc([true, true, true, false], "AND"));