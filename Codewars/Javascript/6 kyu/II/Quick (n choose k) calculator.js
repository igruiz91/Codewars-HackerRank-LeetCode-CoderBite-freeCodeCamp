function choose(n, k) {
  const sumatoria = n => n*(n+1)/2
  //return sumatoria(n) / (sumatoria(k) * sumatoria(n - k));
  console.log(sumatoria(10),
  sumatoria(5),
  sumatoria(10-5))
}
// k==n!/(k!*(n-k)!)

console.log(choose(10, 5));
