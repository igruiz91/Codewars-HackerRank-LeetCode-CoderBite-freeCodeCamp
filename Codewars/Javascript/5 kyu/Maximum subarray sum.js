var maxSequence = (arr)=> {
    for(var i=0, sum=0; i<arr.length; i++)
        for(let j=1; j<=arr.length; j++){
            let sumaSubarreglo = arr.slice(i,j).reduce((a,b)=>a+b,0);
            if(sum<sumaSubarreglo) sum = sumaSubarreglo;
        }
    return sum
}

var maxSequenceUp = arr => {
    var i, min=0, ans=0, sum=0;
    for(i=0; i<arr.length; i++){
        sum+= arr[i];
        min=Math.min(sum, min);
        ans = Math.max(ans, sum-min)
    }
    return ans
}

console.log(maxSequenceUp([-2, 1, -3, 4, -1, 2, 1, -5, 4]));