function solution(n, firstNumber) {
  let mid = n/2;
  return firstNumber == mid
    ? 0
    : firstNumber > mid
    ? firstNumber - mid
    : mid + firstNumber;
}

const solutionTop = (n,f) => {
  return (n/2+f)%n
}


console.log(solution(10,2))
console.log(solution(10,7))
console.log(solution(10,5))
console.log(solutionTop(10,2))
console.log(solutionTop(10,7))
console.log(solutionTop(10,5))
