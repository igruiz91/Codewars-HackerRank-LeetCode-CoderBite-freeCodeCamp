// Write a function that reverses characters in (possibly nested) parentheses in the input string.
// Input strings will always be well-formed with matching ()s.
// 
// Example
// For inputString = "(bar)", the output should be
// solution(inputString) = "rab";
// For inputString = "foo(bar)baz", the output should be
// solution(inputString) = "foorabbaz";
// For inputString = "foo(bar)baz(blim)", the output should be
// solution(inputString) = "foorabbazmilb";
// For inputString = "foo(bar(baz))blim", the output should be
// solution(inputString) = "foobazrabblim".
// Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".

function solution(str) {
  let start=-1; let end = -1;
    for(let i=0; i<str.length; i++) {
      if(str[i] == "(") start = i;
      if(str[i] == ")"){
        end = i;
        let reversed = str.slice(start+1, end).split("").reverse().join("")
        return solution(str.slice(0,start)+reversed+str.slice(end+1))
      }
    }
    return str
}


function solutionRegex(str){
  while(str.includes('(')){
    str = str.replace(/\(([^()]*)\)/, (_, str) => [...str].reverse().join(""));
  }
  return str
}

console.log(solution("foo(bar)baz(blim)"));
console.log(solutionRegex("foo(bar)baz(blim)"));