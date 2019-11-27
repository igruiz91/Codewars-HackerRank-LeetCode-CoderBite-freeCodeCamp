function countZeros(n) {
    let resp=''
    for(let i=1; i<=n; i++)
        resp+=i
    return resp.split('0').length-1
}

console.log(countZeros(100));