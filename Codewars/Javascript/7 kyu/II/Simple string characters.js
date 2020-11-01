function solve(s) {
  let uppers = s.match(/[A-Z]/g).length
  let lowers = s.match(/[a-z]/g).length
  let digits = s.match(/\d/g).length
  let nonAlpha = s.match(/\W/g).length
  return [uppers, lowers, digits, nonAlpha];
}


const solveUp = (str) => {
  return [/[A-Z]/, /[a-z]/, /\d/, /[\W]/].map((regx) => str.split(regx));
}

console.log(solve("Codewars@codewars123.com"));
console.log(solveUp("Codewars@codewars123.com"));


//[1,18,3,2]