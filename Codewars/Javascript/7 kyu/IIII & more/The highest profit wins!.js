function minMax(arr){
let min = Math.min(...arr);
let max = Math.max(...arr);
return [min, max]
}

function minMax2(arr){
    return [Math.min(...arr), Math.max(...arr)];
}

console.log(minMax([1,2,3,4,5]));