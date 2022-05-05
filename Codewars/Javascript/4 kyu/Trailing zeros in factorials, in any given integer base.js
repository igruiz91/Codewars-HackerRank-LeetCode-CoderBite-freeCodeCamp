function trailingZeros(n, base) {
  let count = 0;
  for(let i=5; n/i>=1; i*=5) {
    count+=n/i
    console.log(n, i, count)
  }
  return count
}


console.log(trailingZeros(20,10));
console.log(trailingZeros(100,10));
console.log(trailingZeros(15,10));
