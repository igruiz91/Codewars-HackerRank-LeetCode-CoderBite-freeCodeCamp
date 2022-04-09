function sumAll(arr) {
  let min = Math.min(...arr), max = Math.max(...arr);
  let sum=0
  for(let i= min; i<=max; i++)
    sum+=i
  return sum
}

function sumAllNew(arr){
  arr = arr.sort((a, b) => a - b);
  return (arr[0]+arr[1])*(arr[1]-arr[0]+1)/2
}


const sumAllUp = (arr) => {
  const [min, max] = arr.sort((a,b) => a-b);
  return ((min+max)*(max-min+1))/2
};



console.log(sumAllNew([10, 5]))
console.log(sumAll([1, 4]))
console.log(sumAllUp([1, 4]))
