function minimumSteps(numbers, value) {
  numbers = numbers.sort((a,b) => a-b)
  let steps = -1, n=0, i=0
  while(n<value){
    n+=numbers[i]
    i++
    steps++
  }
  return steps
}

const minimumStepsUp = (n, vals) => {
  const sorted = n.sort((a,b) => a-b)
  for(let i=0, sum=0; i<n.length;i++){
    sum += sorted[i];
    if (sum>= vals) return i;
  }
};

const minimumStepsUp2 = (n,v) => {
  return n.sort((a,b) => a-b).filter(x => (v-=x)>0).length
};


console.log(minimumSteps([4, 6, 3], 7));
console.log(minimumSteps([10, 9, 9, 8], 17));
console.log(minimumStepsUp([10, 9, 9, 8], 17));
console.log(minimumStepsUp2([10, 9, 9, 8], 17));
