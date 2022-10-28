function solve(s) {
  let codes = s.split('').map(c => c.charCodeAt(0)).sort((a,b) => a-b)
  return codes.slice(1).every((n, i, arr) =>  arr[i] == codes[i]+1)
}


const solveUp = (s) => {
  return "abcdefghijklmnopqrstuvwxyz".includes([...s].sort().join(''))
}

console.log(solve("abc"));
console.log(solve("abd"));
console.log(solve("dabc"));
console.log("\n")
console.log(solve("abc"));
console.log(solve("abd"));
console.log(solve("dabc"));
