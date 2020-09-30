function gap(g, m, n) {
    for(let i=m; i<=n-g; i++){
        if(isPrime(i)&&isPrime(i+g)&&primeInInterval(i,i+g)) return [i, i+g]
    }
        
    return null
}
const isPrime = n => {
    for(let i=2, s=Math.sqrt(n); i<=s; i++)
        if(n%i === 0) return false;
    return n > 1;
}
const primeInInterval = (x, y) =>{
    for(let i=x+1; i<y; i++)
        if(isPrime(i)) return false
    return true
}

console.log(isPrime(30097));

//console.log(gap(10,300,400));