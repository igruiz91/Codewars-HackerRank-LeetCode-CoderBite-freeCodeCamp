function arraySum(arr) {
  let sum = 0
  arr.map(element => {
    if(Array.isArray(element)){
      sum+=arraySum(element)
    }else if(typeof(element) ==="number"){
      sum+=element
    }
  })
  return sum
}


function arraySumUp(arr) {
  return arr.reduce((n, x) => n + (Array.isArray(x) ? arraySumUp(x) : isNaN(x) ? 0 : x), 0)
}

console.log(arraySumUp([1, 2, [1, 2]]));
console.log(arraySum([1, 2, [1, 2]]));


