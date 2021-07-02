function minimumNumber(numbers) {
  let sum = numbers.reduce((a,b) => a+ b , 0)
  return nextPrime(sum)
}

const minimumNumberUp = (n) => {
  let sum = n.reduce((a, b) => a + b);
  for(i=sum; ;i++)
    if(isPrime(i)) return i-sum 
};



function isPrime(x) {
  if(x%2==0 || x<2) return false
  for(let i=3; i*i<=x; i+=2)
    if(x%i==0) return false
  return true
}
const nextPrime = (x) => {
  let count = 0
  while(!isPrime(x)){
    x++
    count++
  }
  return count
}



console.log(minimumNumber([2, 12, 8, 4, 6]));
console.log(minimumNumberUp([2, 12, 8, 4, 6]));
console.log(minimumNumber([50, 39, 49, 6, 17, 28]))
console.log(minimumNumberUp([50, 39, 49, 6, 17, 28]));
