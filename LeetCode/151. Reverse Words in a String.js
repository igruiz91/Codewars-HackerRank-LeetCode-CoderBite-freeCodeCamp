var reverseWords = function (s) {
  s = s.replace(/\s{2,}/g, " ")
  return s.trim().split(' ').reverse().join(' ');
};


let s = " the sky is blue";
let s2 = "  hello world  ";

console.log(reverseWords(s2))
console.log(reverseWords(s))
