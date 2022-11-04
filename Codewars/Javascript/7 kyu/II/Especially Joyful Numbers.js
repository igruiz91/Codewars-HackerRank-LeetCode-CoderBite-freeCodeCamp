function numberJoy(n) {
  let x =[...`${n}`].reduce((a,b) => a + +b,0)
  return [...`${x}`].reverse().join('')*x == n
}

console.log(numberJoy(1729))
