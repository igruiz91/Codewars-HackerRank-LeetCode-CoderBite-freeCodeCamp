function solution(divisor, bound) {
  while(bound>0){
    if(bound%divisor == 0) return bound
    bound--
  }
}


const solutionUp = (d,b) => {
  return b-(b%d)
}

console.log(solution(3,10))
console.log(solutionUp(3, 10));
