function pattern(n){
    let resp=[]
    for(let i=1; i<=n; i++)
        resp.push(`${i}`.repeat(i))
    return resp.join('\n');
}

console.log(pattern(2));