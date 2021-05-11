function sumDifferencesBetweenProductsAndLCMs(pairs) {
  const gcd = (a, b) => {
    while (a != b) a > b ? (a -= b) : (b -= a);
    return a === 0 ? 1: a;
  };
  return pairs.reduce((s,p) => s + p.reduce((a,b) => a*b-(a*b/gcd(a,b))),0)
}





console.log(
  sumDifferencesBetweenProductsAndLCMs([
    [15, 18],
    [4, 5],
    [12, 60],
  ])
);

console.log(
  sumDifferencesBetweenProductsAndLCMs([
    [1, 1],
    [0, 0],
    [13, 91],
  ])
);