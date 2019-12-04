function multTriangle(n) {
    let resp = [];
    let arr = Array.from(Array(n), (x,i)=> i+1)
    for(let i=0; i<arr.length;i++){
        let v = [arr[i]];
        let contador=2;
        while(arr[i]!=(i+1)**2){
            arr[i]=arr[i]*contador
            v.push(arr[i]);
            contador++
        }
        resp.push(v)
    }
    return resp
}

console.log(multTriangle(3));