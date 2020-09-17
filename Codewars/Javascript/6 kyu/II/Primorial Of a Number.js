function numPrimorial(n){
    let primes = [2], i=3;
    while(primes.length<n){
        if(isPrime(i)) primes.push(i)
        i+=2
    }
    return primes.reduce((a,b) => a*b)
}

const isPrime = n =>{
    for(let i = 3; i*i<=n; i+=2)
        if(n%i==0) return false
    return true
}

console.log(numPrimorial(3));
console.log(numPrimorial(5));
console.log(numPrimorial(6));