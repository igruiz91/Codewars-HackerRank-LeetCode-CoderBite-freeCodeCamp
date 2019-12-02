// return true if number is equal to -0, else return false
function minusZero(n){ 
    return 1/n === -Infinity
  }
  

console.log(minusZero(0));
console.log(minusZero(1));
console.log(minusZero(-0));
console.log(minusZero(-0.2));
