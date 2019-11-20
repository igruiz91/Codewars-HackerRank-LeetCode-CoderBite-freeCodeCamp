function diamond(n){
    let resp ='';
    for(let i=1; i<=n; i+=2){
        resp+='*'.repeat(i)+'\n'
    }
    return resp;
}

console.log(diamond(3));