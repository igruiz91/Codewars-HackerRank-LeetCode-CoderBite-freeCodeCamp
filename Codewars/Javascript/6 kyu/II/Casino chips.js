function solve(arr) {
  let [a,b,c] = arr.sort((a,b) => a-b)
  return Math.min(a+b, Math.floor((a+b+c)/2))
}


console.log(solve([8, 2, 8]));
