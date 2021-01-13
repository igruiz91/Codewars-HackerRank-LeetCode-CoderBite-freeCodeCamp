function largestPairSum(numbers) {
  return numbers.sort((a,b) => b-a).splice(0,2).reduce((a,b) => a+b)
}


const largestPairSumUp = (numbers) => {
  const [a,b, ...c] = numbers.sort((a,b) => b-a)
  console.log(c);
  return a+b
}

console.log(largestPairSum([10, 14, 2, 23, 19]));
console.log(largestPairSum([99, 2, 2, 23, 19]));
console.log(largestPairSumUp([99, 2, 2, 23, 19]));