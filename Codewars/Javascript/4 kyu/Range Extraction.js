function solution(list) {
  let resp = '', count=0
  list = list.sort((a,b) => a-b)
  let range = []
  for(let i=0; i<list.length; i++){
    if(list[i] == list[i+1]-1){
      count++
      range.push(list[i])
    }else{
      if (count >= 2) {
        range.push(list[i])
        resp += `${range.shift()}-${range.pop()},`;
      }else if(count>0){
        range.push(list[i])
        resp+=range.join(',')+','
      }else{
        resp += list[i]+',';
      }
      range = []
      count=0
    }
  }
  return resp.slice(0,-1)
}

const solutionUp = (list) => {
  for(let i =0; i<list.length; i++){
    let j = i
    while(list[j]-list[j+1]== -1) j++
    if(j!=i && j-i>1) list.splice(i, j-i+1, list[i]+'-'+ list[j])
  }
  return list.join()
}

let testArr = [
  -6,
  -3,
  -2,
  -1,
  0,
  1,
  3,
  4,
  5,
  7,
  8,
  9,
  10,
  11,
  14,
  15,
  17,
  18,
  19,
  20,
];

console.log(solution(testArr));
console.log(solutionUp(testArr));
