function countPrimes(min, max){
    let count=0 
    for(let i=min; i<=max; i++){
        if(isPrime(i)) count++
    }
    return count
}

function isPrime(n) {
    if(n<2 || (n%2==0 && n!=2)) return false;
    for(let i=3; i*i<=n; i+=2){
        if(n%i==0) return false;
    }
    return true
}

//console.log(isPrime(19999));
console.log(countPrimes(3, 11));