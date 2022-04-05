function solution(inputArray) {
  return inputArray.filter(arr => arr.length === Math.max(...inputArray.map(e => e.length)))
}


console.log(solution(["aba", "aa", "ad", "vcd", "aba"]));
