var fibsFizzBuzz = function (n) {
  if(n<2) return n
  let fibs = fibonacci(n);
  return fibs.map(x => {
    if(x%15==0) return "FizzBuzz"
    else if(x%3==0) return "Fizz"
    else if(x%5==0) return "Buzz"
    else return x
  })
};


const fibonacci = (n) => {
  let resp = [1,1]
  for(let i = 1; i < n-1; i++) {
    let nextFib = resp[i]+resp[i-1]
    resp.push(nextFib)
  }
  return resp
}


const fibsFizzBuzzUp = (n) => {
  let resp = [], [a, b] = [0,1]
  for(let i=0 ; i<n; i++) {
    [a, b] = [b, a+b]
    resp.push(a%15 == 0 ? "FizzBuzz" : a%5==0 ? "Buzz" : a%3==0 ? "Fizz" : a )
  }
  return resp
}

console.log(fibsFizzBuzz(5));
console.log(fibsFizzBuzzUp(5));
