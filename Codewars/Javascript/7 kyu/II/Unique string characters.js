function solve(a, b) {
  let x = [...a].filter(e => !b.includes(e))
  let y = [...b].filter((e) => !a.includes(e));
  return x.concat(y).join('')
}

const solveUp = (a,b) => {
  return (a+b).split('').filter(x => a.includes(x) ^ b.includes(x)).join('')
}



console.log(solve("xyab", "xzca"));
console.log(solveUp("xyab", "xzca"));