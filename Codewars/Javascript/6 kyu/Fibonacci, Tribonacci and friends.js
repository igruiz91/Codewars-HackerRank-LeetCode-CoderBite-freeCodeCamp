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

console.log(Xbonacci([0,0,0,0,1],10));