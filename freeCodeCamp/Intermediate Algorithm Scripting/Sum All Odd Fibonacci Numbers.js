function sumFibs(num) {
  if(num <= 2) return 1;
  else return sumFibs(num - 1) + sumFibs(num - 2);
}

const sumFibsOdd = (num) => {
  let arr = [0,1];
  let sumOdd = 1
  for(let i=2; i<=num; i++){
    let fib = arr.slice(-2).reduce((a,b)=>a+b)
    if(fib%2 !== 0 && fib<=num) sumOdd += fib
    arr.push(fib)
  }
  return sumOdd
}

const sumFibUpgrade = (n) => {
  let a = 0, b = 1;
  for(let i = 2; i<=n; i++){
    fib = a + b;
    a = b;
    b= fib;
  }
  return b
}

console.log(sumFibs(4));
console.log(sumFibUpgrade(4));
console.log(sumFibsOdd(10));
