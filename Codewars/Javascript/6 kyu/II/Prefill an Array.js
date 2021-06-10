function prefill(n, v) {
  if(parseInt(n) !== Math.abs(n)) throw new TypeError(`${n} is invalid`)
  return Number.isInteger(n) ? Array(n).fill(v) : []
}

console.log(prefill(2, "abc"));
console.log(prefill(3, prefill(2, "2d")));
console.log(prefill('0', "abc"));
