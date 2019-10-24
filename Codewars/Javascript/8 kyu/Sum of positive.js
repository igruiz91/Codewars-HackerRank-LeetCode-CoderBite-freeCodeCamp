function positiveSum2(arr) {
    return arr.reduce((a,b) => { 
        return b>0 ? a+b : a+0},0)
}

function positiveSum(arr) {
    return arr.reduce((a,b)=> a+ (b>0 ? b: 0),0)
}

console.log(positiveSum([-2,2,3,4,-5]));
