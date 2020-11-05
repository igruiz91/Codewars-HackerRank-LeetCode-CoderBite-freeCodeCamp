function completeSeries(arr) {
    let fixed = [... new Set(arr)]
    if(fixed.length !=arr.length) return [0]
    let resp =[]
    let max = Math.max(...arr)
    for(let i=0; i<=max; i++) resp.push(i)
    return resp
}
let arr=[... new Set([1,0,4,2,4,6].sort())]

console.log(arr);
//console.log(completeSeries([1,4,2,4,6]));