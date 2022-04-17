function Eratosthenes(n){
  let isPrime = Array(n+1).fill(1)
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if(isPrime[i]){
      for (let j = i*i; j <= n; j+=i) {
        isPrime[j] = 0;
      }
    }
  }
  return isPrime.map((n,i) => n ? i : n).slice(2).filter(n => n>0)
}


console.log(Eratosthenes(99))
