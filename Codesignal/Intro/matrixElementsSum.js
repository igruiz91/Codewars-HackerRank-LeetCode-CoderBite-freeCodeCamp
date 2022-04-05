function solution(matrix) {
  let resp=0
  for(let i=0; i<matrix[0].length; i++) {
    for(let j=0; j<matrix.length; j++) {
      let num = matrix[j][i]
      if(num == 0) break;
      resp += num;
    }
  }
  return resp
}

let matrix = [
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
];

let matrix2 = [
[1,0,3], 
[0,2,1], 
[1,2,0]]

console.log(solution(matrix));
console.log(solution(matrix2));