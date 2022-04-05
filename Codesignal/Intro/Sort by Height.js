// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!
// 
// Example
// 
// For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
// solution(a) = [-1, 150, 160, 170, -1, -1, 180, 190]

function solution(a) {
  for(let i=0; i<a.length; i++){
    if(a[i]==-1) continue
    for(let j=i+1; j<a.length;j++)
      if(a[j]<a[i] && a[j]!=-1) [a[i],a[j]] = [a[j],a[i]]
  }
  return a
}

function solutionTop(a){
  let sorted = a.filter(e =>e != -1).sort((a,b) => a - b)
  return a.map((e) => (e == -1 ? -1 : sorted.shift()));
}


console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]));
console.log(solutionTop([-1, 150, 190, 170, -1, -1, 160, 180]));