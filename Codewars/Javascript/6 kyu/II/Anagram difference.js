function anagramDifference(w1, w2) {
  let count1=Array(26).fill(0)
  let count2=Array(26).fill(0)
  let i = 0, resp = 0
  while(i<w1.length) {
    count1[w1[i].charCodeAt() - 97]+=1;
    i+=1
  }
  i=0
  while (i < w2.length) {
    count2[w2[i].charCodeAt() - 97] += 1;
    i+=1
  }
  for(let i = 0 ;i<26;i++) {
    resp+= Math.abs(count1[i]-count2[i])
  }
  return resp
}


function anagramDifferenceUp(w1, w2){
  let stack = {}
  let resp = 0
  for(let c of w1){
    stack[c] > 0 ? stack[c]++ : stack[c]=1
  }
  for (let c of w2) {
    stack[c] > 0 ? stack[c]-- : resp++;
  }
  return resp+Object.values(stack).reduce((a,b) => a+b, 0)
}


function anagramDifferencet(w1, w2) {
  const stack = {};

  for (var c1 of w1) {
    stack[c1] > 0 ? stack[c1]++ : (stack[c1] = 1);
  }

  let counter = 0;

  for (var c2 of w2) {
    stack[c2] > 0 ? stack[c2]-- : counter++;
  }

  const result =
    counter + Object.values(stack).reduce((sum, curr) => sum + curr, 0);

  return result;
}

// console.log(anagramDifference("a", " "));
console.log(anagramDifferenceUp("a", " "));
console.log(anagramDifferencet("a", " "));
// console.log(anagramDifference("codewars", " hackerrank"));
console.log(anagramDifferenceUp("codewars", " hackerrank"));
console.log(anagramDifferencet("codewars", " hackerrank"));
