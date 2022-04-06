// You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.
// 
// Example
// 
// For inputArray = [1, 1, 1], the output should be
// solution(inputArray) = 3.


function solution(inputArray) {
  for(var i=1, count=0; i<inputArray.length;i++){
    let prev = inputArray[i - 1], curr = inputArray[i];
    if(curr<=prev){
      let val = Math.abs(prev - curr + 1);
      inputArray[i] += val;
      count += val;
    }
  }
  return count;
}

let test = [2, 3, 3, 5, 5, 5, 4, 12, 12, 10, 15];

console.log(solution([-1000, 0, -2, 0]));
console.log(solution(test));