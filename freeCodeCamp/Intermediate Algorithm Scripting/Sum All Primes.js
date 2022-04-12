function sumPrimes(num) {
  let resp = 0;
  for (let i = 1; i <= num; i++) {
    if (isPrime(i) || i == 2) resp += i;
  }
  return resp;
}

const isPrime = (n) => {
  if(n<2 || n%2==0) return false
  for(let i=3; i<=Math.sqrt(n); i+=2)
    if(n%i == 0) return false
  return true
};



console.log(sumPrimes(10));
