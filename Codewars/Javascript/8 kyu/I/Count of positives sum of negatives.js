function countPositivesSumNegatives(input) {
    let count=0,sumN=0;
    input.map(n => n<0 ? sumN+=n : count++)
    return [count, sumN]
}

function countPositivesSumNegativesUp(input) {
    return input && input.length ? [input.filter(n => n>0).length, input.reduce((a,b)=> b<0 ? a+b :a+0, 0)] : [];
}


let arr= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

console.log(countPositivesSumNegativesUp(arr));