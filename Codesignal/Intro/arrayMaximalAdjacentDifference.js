function solution(inputArray) {
  return inputArray.reduce((max, curr, i, arr) =>{
    curr= Math.abs(curr - arr[i+1]);
    return curr > max ? (max = curr) : max;
  },0)
}

function solutionTop(arr) {
  return Math.max(...arr.slice(1).map((n,i) => Math.abs(n-arr[i])))
}

console.log(solution([2, 4, 1, 0]));
console.log(solution([-1, 4, 10, 3, -2]));
console.log(solutionTop([-1, 4, 10, 3, -2]));
