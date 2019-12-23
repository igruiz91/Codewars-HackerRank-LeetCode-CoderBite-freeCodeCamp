function minSum(arr) {
    arr= arr.sort((a,b)=>b-a)
    for(var i=0, resp=0, j=arr.length-1;i<arr.length/2; i++){
        resp+=arr[i]*arr[j];
        j--
    }
    return resp
}


const minSumUp = arr => arr.sort((a,b)=> a-b).slice(0, arr.length/2).reduce((a,b,i) => a+= b*arr[arr.length-i-1], 0)


console.log(minSumUp([12,6,10,26,3,24]));