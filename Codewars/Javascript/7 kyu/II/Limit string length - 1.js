function solution(str, limit) {
  return str.length > limit ? str.slice(0, limit)+'...' : str;
}


console.log(solution("Testing String", 3));
console.log(solution("Test", 8));
