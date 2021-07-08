function circleOfNumbers(n, fn) {
  return fn === n/2 ? 0 : fn>n/2 ? fn-n/2 : n/2+fn
}


const circleOfNumbersUp = (n,x) => (x+n/2)%n;


console.log(circleOfNumbers(10,2))
console.log(circleOfNumbersUp(10, 2));
console.log(circleOfNumbers(10, 7));
console.log(circleOfNumbersUp(10, 7));