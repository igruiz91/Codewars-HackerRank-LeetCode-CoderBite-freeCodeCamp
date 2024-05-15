function minimum(a, x) {
  let rest = a%x
  return rest>x/2 ? x-rest : rest
}


const minimumUp = (a,x) => {
  return Math.min(x-a%x, a%x)

console.log(minimum(10, 6));
console.log(minimum(1, 1));
