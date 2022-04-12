const isPrime = (n) => {
  if(n%2==0) return false
  for(let i=3; i*i<=n; i+=2)
    if(n%i==0) return false
  return true
}

console.log(isPrime(12))
console.log(isPrime(7))
