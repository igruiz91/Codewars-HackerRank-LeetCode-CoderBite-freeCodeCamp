// Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.
// 
// Given two arrays a and b, check whether they are si

function solution(a, b) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      if(count ==1) return false
      for (let j = b.length-1; j >i; j--) {
        if (a[i] === b[j] && a[j] == b[i]) {
          [b[i],b[j]] = [b[j], b[i]];
          break
        }
      }
      count++;
    } 
  }
  return true;
}


function solutionTop(a,b) {
  for(var i=0, arr=[]; i<a.length; i++)
    if(a[i] !== b[i]) arr.push(a[i],b[i])
  return arr.length<5 && new Set(arr).size<3;
}



let a = [1, 2, 3], b = [2, 1, 3]

console.log(solution(a,b))
console.log(solutionTop(a,b))
