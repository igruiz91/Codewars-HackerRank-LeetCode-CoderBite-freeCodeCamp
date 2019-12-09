function sumMul(n,m){
    let resp =0;
    for(let i=n; i<m;i++)
        if(i%n==0) resp+=i
    return resp
}

console.log(sumMul(2,9));