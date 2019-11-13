function primeFactors(n){
    let str='';
    let resp =[];
    let prim=2;
    while(n>=prim){
        if(n%prim==0){
            resp.push(prim)
            n/=prim
        }
        else{
            prim = nextPrime(prim)
        }
    }
    resp = respObj(resp)
    for(const [key, value] of Object.entries(resp)){
        value>1 ? str+=`(${key}**${value})` : str+=`(${key})`
    }
    return str
}

const respObj = (arr) => {
    let obj={}
    arr.map(n => obj[n]? obj[n]++ : obj[n]=1)
    return obj
}
const nextPrime = (n) => {
   for(let i=n+1; i<Number.MAX_SAFE_INTEGER; i++)
       if(isPrime(i)) return i
}
const isPrime =(n)=> {
    if(n<2) return false
    else{
        for(let i=2; i*i<=n; i++)
            if(n%i==0) return false
    }
    return true
}

//console.log(respObj([1,2,3,2]));
//console.log(nextPrime(1234));
//console.log(isPrime(491));

console.log(primeFactors(86240));

// let a = { '2': 5, '5': 1, '7': 2, '11': 1 }
// let x = JSON.stringify(a)

//console.log(x);