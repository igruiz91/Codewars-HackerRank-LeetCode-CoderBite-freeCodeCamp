// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.
// 
// Given a ticket number n, determine if it's lucky or not.
// 
// Example
// 
// For n = 1230, the output should be
// solution(n) = true;
// For n = 239017, the output should be
// solution(n) = false.

function solution(n) {
    let strN= `${n}`;
    if(strN.length%2!=0) return
    let firstHalf= strN.slice(0,strN.length/2)
    let secondHalf= strN.slice(strN.length/2)
    let sum = (str) => str.split('').reduce((a,b) => + b + a, 0 )
    return sum(firstHalf)==sum(secondHalf)
}

function solutionTop(n) {
  n = `${n}`.split('').map(Number);
  return n.reduce((sum, num, i) => i < n.length / 2 ? (sum += num) : (sum -= num)) === 0;
}

console.log(solution(1230))
console.log(solutionTop(1230));
console.log(solution(239017));
console.log(solutionTop(239017));
