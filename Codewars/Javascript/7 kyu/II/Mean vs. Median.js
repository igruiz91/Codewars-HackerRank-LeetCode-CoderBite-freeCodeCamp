function meanVsMedian(numbers) {
  let len = numbers.length;
  let mean = numbers.reduce((acc, val ) => acc+val, 0)/len
  numbers = numbers.sort((a, b) => a-b)
  let mid = Math.floor(len/2)
  return mean > numbers[mid] ? "mean" : mean < numbers[mid] ? "median" : "same";

}


console.log(meanVsMedian([7, 14, -70]));
console.log(meanVsMedian([-10, 20, 5]));
