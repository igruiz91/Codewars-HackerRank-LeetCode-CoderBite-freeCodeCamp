function oddRow(n) {
    let resp =[]
    for(let i=n*(n-1)+1; resp.length<n ; i+=2 )
        resp.push(i)
    return resp
}

const oddRowUp = n => {
    const num = n*(n-1)+1;
    return Array.from({length: n}, (_,i)=> num+i+i)
}
console.log(oddRowUp(19));