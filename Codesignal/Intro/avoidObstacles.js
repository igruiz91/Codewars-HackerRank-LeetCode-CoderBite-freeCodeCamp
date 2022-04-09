// You are given an array of integers representing coordinates of obstacles situated on a straight line.
// Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.
// Find the minimal length of the jump enough to avoid all the obstacles.
// Example
// For inputArray = [5, 3, 6, 7, 9], the output should be
// solution(inputArray) = 4.

function solution(arr) {
  var i=2;
  while(true){
    if(arr.every(n => n%i != 0)) break
    i++
  };
  return i;
}

const solutionTop = (arr) => { 
  for(var n=2;;n++){
    if(arr.every(x=>x%n!=0)) return n;
  }
}

const solutionTop2 = (arr) => { 
  var i=2;
  while(arr.some(x=> x%i == 0)) i++
  return i
}

console.log(solution([5, 8, 9, 13, 14]));
console.log(solutionTop([5, 8, 9, 13, 14]));
console.log(solutionTop2([5, 8, 9, 13, 14]));

