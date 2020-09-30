function perimeter(n) {
    if(n<=1) return n
    return perimeter(n-1)+perimeter(n-2)
}

const fibs = n => {
    let resp = [1,1], suc = [1,1];
    for(let i=2 ; i<=n; i++){
        let element = suc[0]+suc[1]
        resp.push(element)
        suc.shift()
        suc.push(element)
    }
    return resp.reduce((a,b) => a+b)*4
} 


function perimeterUp(n) {
    let arr = [1,1];
    for(let i=0; i<n-1; i++)
        arr.push(arr[arr.length-1]+arr[arr.length-2]);
    return arr.reduce((a,b)=>a+b)*4
}
console.log(perimeterUp(5));
console.log(fibs(5));
