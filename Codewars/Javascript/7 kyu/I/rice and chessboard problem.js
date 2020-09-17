function squaresNeeded(grains){
    
    for (var i = 0, total=0, contador; total < grains; i++) {
        total+=Math.pow(2,i)
        contador=i+1
    }
    return contador
}

function squaresNeeded(grains){
    return Math.ceil(Math.log2(grains+1))
}

squaresNeeded2=g=> g ? g.toString(2).length: 0

console.log(squaresNeeded2(156888));