function largestPower(n){
    let k=0
    while(3**k<n) k++
    return k-1
}

function largestPow3(n) {
    return Math.ceil(Math.log10(n)/Math.log10(3))-1    
}

console.log(largestPow3(20));