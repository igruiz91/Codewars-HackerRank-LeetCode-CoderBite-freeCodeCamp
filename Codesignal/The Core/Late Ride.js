function solution(n) {
  let h = Math.floor(n/60)
  let m = (n%60)
  return `${h}${m}`.split('').reduce((a,b) => a+ +b, 0)
}


console.log(solution(808))
