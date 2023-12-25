function equableTriangle(a, b, c) {
  let p = (a+b+c)
  let s = p/2
  return Math.sqrt(s*(s-a)*(s-b)*(s-c)) === p
}

console.log(equableTriangle(5, 12, 13));
console.log(equableTriangle(6, 8, 10));
console.log(equableTriangle(2,3,4));

