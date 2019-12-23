function nearestSq(n){
    var menor = n => { while(Math.sqrt(n,2)%1 != 0){n--} return n}
    var mayor = n => { while(Math.sqrt(n,2)%1 != 0){n++} return n}
    let x= menor(n)
    let y= mayor(n)
    return (n-x)<(y-n) ? x : y
}

function nearestSqUp(params) {
    return Math.round(n**0.5)**2
}

console.log(nearestSq(10));