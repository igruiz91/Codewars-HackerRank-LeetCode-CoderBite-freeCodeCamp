var mem = []

function sum(n, m =n ) {
  if(n==0) return 1
  if(n<0 || m == 0) return 0
  if(mem[n] && mem[n][m]) return mem[n][m]
  let total = sum(n, m-1)+sum(n-m, m)
  if(!mem[n]) mem[n] = []
  mem[n][m] = total
  return total
}

console.log(sum(7))
//console.log(sum(10))

