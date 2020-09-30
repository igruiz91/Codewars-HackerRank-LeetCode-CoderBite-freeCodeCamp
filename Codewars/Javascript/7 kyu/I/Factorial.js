function factorial2(n){
    let resp=1
    if(n<0) throw new RangeError
    for(let i=n; i>1; i--){
        resp*=i
    }
    return resp
}

function factorial(n) {
    if(n<0 || n>12) throw new RangeError
    return n<=1 ? 1 : n * factorial(n-1);
}

console.log(factorial(12));