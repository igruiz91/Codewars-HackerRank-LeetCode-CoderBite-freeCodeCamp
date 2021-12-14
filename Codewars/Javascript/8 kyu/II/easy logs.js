function logs(x, a, b) {
  return Math.log(a) / Math.log(x) + Math.log(b) / Math.log(x);
}

const logsUp = (x,a,b) => Math.log(a*b)/Math.log(x)



console.log(logs(10, 2, 3));
console.log(logsUp(10, 2, 3));