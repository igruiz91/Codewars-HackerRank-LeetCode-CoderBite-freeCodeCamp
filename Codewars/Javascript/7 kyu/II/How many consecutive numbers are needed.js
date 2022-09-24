function consecutive(arr) {
  let max = Math.max(...arr)
  let min = Math.min(...arr)
  return arr.length ? max - min + 1 - arr.length : 0;
}


console.log(consecutive([1,2,3]))
console.log(consecutive([4, 8, 6]));
