function solve(arr) {
  let resp = []
  arr = arr.sort((a,b) => a - b)
  while(arr.length){
    resp.push(arr.pop())
    resp.push(arr.shift());
  }
  return resp.filter(Number)
}

const solveUp = (arr) => {
  return  [...Array(arr.sort((a,b) => a-b).length)].map((_, i) => i%2 ? arr.shift() : arr.pop())
};

console.log("solve -> solve", solveUp([15, 11, 10, 7, 12]));


//solve([15,11,10,7,12]) = [15,7,12,10,11]