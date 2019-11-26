function sumOfDifferences(arr=[]) {
    if(arr.length<=1) return 0
    let resp=[];
    arr = arr.sort((a,b)=> b-a)
    for(let i = 0; i<arr.length-1; i++)
        resp.push(arr[i]-arr[i+1])
    return resp.reduce((a,b)=> a+b)
}

function sumOfDifferencesUp(arr) {
    return arr.length>1 ? Math.max(...arr)-Math.min(...arr) : 0
}

console.log(sumOfDifferencesUp([10,3,1]));