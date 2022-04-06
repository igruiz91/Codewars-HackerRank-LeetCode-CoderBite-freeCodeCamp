// Several people are standing in a row and need to be divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.
// 
// You are given an array of positive integers - the weights of the people. Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete.
// 
// Example
// 
// For a = [50, 60, 60, 45, 70], the output should be
// solution(a) = [180, 105].



function solution(a) {
  for(var i=0, t1 =0, t2=0; i<a.length; i++){
    if(i%2==0) t1+=a[i];
    else t2+=a[i];
  }
  return [t1, t2]
}

function solutionTop(a){
  return a.reduce((a,b,i) => (a[i&1] += b, a) ,[0,0])
}

function solutionTop2(a) {
  let resp = [0,0]
  for(var i in a)
    resp[i%2] += a[i]
  return resp
}


console.log(solution([50, 60, 60, 45, 70]));
console.log(solutionTop([50, 60, 60, 45, 70]));
console.log(solutionTop2([50, 60, 60, 45, 70]));
