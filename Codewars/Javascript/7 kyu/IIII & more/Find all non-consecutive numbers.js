function allNonConsecutive (arr) {
    let results = []
    for(let i=1; i<arr.length; i++){
        if(arr[i] !=arr[i-1]+1) results.push({'i': i, 'n': arr[i]})
    }
    return results
}

function allNonConsecutive2(arr) {
    return arr.reduce((a,n,i)=> i>0 && n-1 !== arr[i-1] ? [...a, {i,n}]: a, [])
}

console.log(allNonConsecutive2([1,2,3,4,6,7,8,10]));