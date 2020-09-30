function sum (numbers) { 
    return numbers.reduce((a,b)=>a+b,0)
};

console.log(sum([1, 5.2, 4, 0, -1]));