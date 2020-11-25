function pickPeaks(arr){
    let pos =[];
    let peaks =[];
    let punto = Number.MIN_SAFE_INTEGER;
    let decreciente = false
    for(let i=0; i<arr.length; i++){
        if(arr[i]>punto){
            punto=arr[i]
            decreciente=false
        }else if(arr[i]<punto && decreciente==false){
            pos.push(i-1)
            peaks.push(punto)
            punto=arr[i]
            decreciente = true
        } 
    }
    return {pos, peaks}
}

function pickPeaks2(arr) {
    let resp ={pos:[], peaks:[]}
    for (let i = 1; i < arr.length; i++) {
        var pos;
        if(arr[i]>arr[i-1]){
            pos=i   
        } 
        else if(arr[i]<arr[i-1] && pos){
            resp.pos.push(pos)
            resp.peaks.push(arr[pos])
            pos=undefined
        }
    }
    return resp
}

console.log(pickPeaks2([1,2,5,4,3,2,3,6,4,1,2,3,3,4,5,3,2,1,2,3,5,5,4,3]));