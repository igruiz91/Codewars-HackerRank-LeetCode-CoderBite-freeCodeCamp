function ArithmeticSequenceSum(a, r, n) {
  let resp = 0;
  for (let i = 1; i < n; i++) resp += a + i * r;
  return resp + a;
}

const ArithmeticSequenceSum = (a, r, n) => a * n + (r * n * (n - 1)) / 2;

console.log(ArithmeticSequenceSum(3, 2, 20));
