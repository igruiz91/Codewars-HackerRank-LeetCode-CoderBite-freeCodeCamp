function solution(digits){
  let resp =[];
  let len = `${digits}`;
  for(let i=0; i<len.length-4; i++){
      resp.push(Number(len.slice(i,i+5)))
  }
  return Math.max(...resp)
}

console.log(solution(1234567890));