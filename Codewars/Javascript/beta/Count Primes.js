function countPrimes(min, max){
    let arr = new Uint8Array(max), resp =[2]
    for(var i=3; i<=max; i+=2){
        if(!arr[i]){ 
            if(i>=min) resp.push(i)
            for(let j=i*i; j<max; j+=i) arr[j]=1
        }
    }
    return resp.length
}

function isPrime(n){
    if(n==2) return true
    if(n%2==0 || n<2) return false
    for(let i=3; i*i<=n; i+=2)
        if(n%i==0) return false
    return true
}

console.log(countPrimes(0, 11));