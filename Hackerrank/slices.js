function miniMaxSum(arr) {
    arr=arr.sort((a,b)=>a-b);
    return arr.slice(0,-1).reduce((a,b)=>a+b) +" "+ arr.slice(1).reduce((a,b)=>a+b)
}

console.log(miniMaxSum([1, 2, 3, 4, 5]));