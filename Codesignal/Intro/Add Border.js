// Given a rectangular matrix of characters, add a border of asterisks(*) to it.
// Example
// For:
// picture = ["abc",
//            "ded"]
// the output should be:
// solution(picture) = ["*****",
//                       "*abc*",
//                       "*ded*",
//                       "*****"]
function solution(picture) {
  let resp ="";
  picture = picture.map(str => `*${str}*`)
  let len = picture[0].length;
  let borders = "*".repeat(len);
  picture.unshift(borders)
  picture.push(borders)
  return picture
}

function solutionTop(p){
  let len = p[0].length + 2,
      borders = "*".repeat(len);
  return [borders, ...p.map((str) => `*${str}*`), borders];
}


let picture = ["abc", 
               "ded"];

console.log(solution(picture));
console.log(solutionTop(picture));