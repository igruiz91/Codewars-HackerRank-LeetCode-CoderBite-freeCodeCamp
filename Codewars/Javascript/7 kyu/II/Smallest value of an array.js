function min(arr, toReturn) {
  let min = Math.min(...arr);
  if(toReturn == 'value') return min
  return arr.indexOf(min)
}


const minUp = (arr, re) => {
  let min = Math.min.apply(null, arr)
  return re === 'value' ? min : arr.indexOf(min)
}


console.log(min([1,2,3,4,5], 'value'))
console.log(minUp([1, 2, 3, 4, 5], "value"));