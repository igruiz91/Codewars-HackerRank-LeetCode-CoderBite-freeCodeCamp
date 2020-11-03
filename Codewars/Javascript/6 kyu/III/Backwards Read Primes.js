function backwardsPrime(start, stop){
    let resp=[]
    for(let i=start; i<=stop; i++)
        if(isPrime(i)) if(isPrime(reversePrime(i))) resp.push(i)
    return resp
}

const reversePrime = n =>{ 
    let r =`${n}`.split('').reverse().join('')
    return r==n ? 0 : Number(r)

}
const isPrime = (n) => {
    if(n%2==0) return false
    for(let i=3; i**2<=n; i+=2)
        if(n%i==0) return false
    return true
}

//console.log(reversePrime(18));
console.log(backwardsPrime(9900,10000));