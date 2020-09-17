function Xbonacci(signature,n){
    let resp = signature;
    console.log(resp);
    let xbon =signature;
    for(let i=resp.length; i<n; i++){
        let e = xbon.reduce((a,b)=>a+b)
        resp.push(e)
        console.log(resp);
        xbon.unshift()
    }
    return resp
}


const XbonacciNew = (signature,n) =>{
    let memo=[...signature];
    let resp = [], len=signature.length;
    for(let i=0; i<n-len; i++){
        let suma = memo.reduce((a,b)=> (a+b),0)
        resp.push(suma)
        memo.push(suma)
        memo.shift()
    }
    return len<=n ? signature.slice(0,n):signature.concat(resp)
}

const XbonacciUp = (sig, n) => {
    let len = sig.length;
    for(let i=0; i<n; i++)
        sig[i]=sig.slice(i-len).reduce((a,b)=>a+b)
    return sig.slice(0,n)
}

console.log(XbonacciNew([1,0,0,0,0,0,0,0,0,0],20));