function solution(crypt, solution) {
  transform = crypt.map((c) =>
    c.split("").map((s) => solution.reduce((a,b) => b[0] == s ? a+=b[1] : a+="" , "")).join("")
  ).map(Number);
  return transform[0]+transform[1] === transform[2]
}


let crypt = ["SEND", "MORE", "MONEY"];
let sol = [
  ["O", "0"],
  ["M", "1"],
  ["Y", "2"],
  ["E", "5"],
  ["N", "6"],
  ["D", "7"],
  ["R", "8"],
  ["S", "9"],
];


//console.log(sol[0]);
 console.log(solution(crypt, sol));
