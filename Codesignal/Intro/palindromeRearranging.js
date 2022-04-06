// Given a string, find out if its characters can be rearranged to form a palindrome.
// Example
// For inputString = "aabb", the output should be
// solution(inputString) = true.
// We can rearrange "aabb" to make "abba", which is a palindrome.


function solution(inputString) {
  for(var i=0, dic={},odds=0; i<inputString.length; i++)
    if(dic[inputString[i]]) dic[inputString[i]]++;
    else dic[inputString[i]] = 1;
  for (const v of Object.values(dic))
    if(v%2 !== 0){
      if(odds === 1) return false
      odds++;
    }
  return true;
}

function solutionTop(input) {
  return input.split('').sort().join('').replace(/(\w)\1/g, "").length < 2;
}


console.log(solution("aabb"));
console.log(solution("aaxzbb"));
console.log(solutionTop("aaxzbb"));
