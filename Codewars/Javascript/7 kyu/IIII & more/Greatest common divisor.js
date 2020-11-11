function mygcd(x,y){
    let max =1;
    let mayor = Math.max(x,y)/2
    if(isPrime(x) || isPrime(y)) return 1
    for(let i=2; i<=mayor; i++)
        if(x%i==0 && y%i==0) max=i;
    return max
}

const isPrime= n => {
    for(var i=2, sqrt=Math.sqrt(n); i<sqrt; i++)
        if(n%i==0) return false;
    return n>1
}

function mygcdUp(x,y) {
    console.log(x,y);
    return y==0 ? x : mygcd(y,x%y)
}

console.log(mygcdUp(160,56));