function elementsSum2(arr,d){
    let resp=[]
    let cont = arr.length-1;
    for (let i = 0; i < arr.length; i++) {
        let n = arr[i][cont]
        if(n == undefined){
            resp.push(0)
        }else resp.push(n)
        cont--     
    }
    console.log(resp);
    return resp.reduce((a,b)=>a+b)
}

function elementsSum(arr,d = 0){
    return arr.reduce((sum, sub, i) => sum += (sub=sub[arr.length-1-i], sub==0 ? 0 : sub || d), 0);
  }

console.log(elementsSum([[3, 2, 1, 0], [4, 6, 5, 3, 2], []]));