function solve(a, b) {
  while (a >= b * 2 || b >= a * 2) {
    if (a == 0 || b == 0) return [a, b];
    else if (a >= b * 2) {
      a = a - b * 2;
    } else if (b >= a * 2) {
      b = b - a * 2;
    }
  }
  return [a, b];
}

function solveUp(a,b) {
  if(a==0||b==0) return [a,b]
  else if(a>=b*2) return solve(a-b*2,b)
  else if(b>=a*2) return solve(a,b-a*2)
  else return [a,b]
}

console.log(solve(6, 19));
console.log(solveUp(6, 19));
