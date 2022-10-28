function isVeryEvenNumber(n) {
  const convert = (x) => { return `${x}`.split('').reduce((a,b) => a+ +b,0) }
  return n > 9 ? convert(n) : n % 2 == 0;
}

const isVeryEvenNumberUp = (n) => {
  return !n-- || (n-1)%9%2 === 1
}


console.log(isVeryEvenNumber(12))
console.log(isVeryEvenNumberUp(12));
