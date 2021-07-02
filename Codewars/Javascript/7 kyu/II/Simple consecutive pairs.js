function pairs(ar) {
  const isPair = (x, y) => x + 1 == y || x - 1 == y;
  for(var i = 1, count=0; i<ar.length; i+=2)
    if(isPair(ar[i],ar[i-1])) count++
  return count
}

const pairsUp = (arr) => {
  for(var i =0, count=0; i<arr.length; i+=2)
    if(Math.abs(arr[i]-arr[i+1])==1) count++
  return count
}


console.log(pairs([1, 2, 5, 8, -4, -3, 7, 6, 5,8]));
console.log(pairsUp([1, 2, 5, 8, -4, -3, 7, 6, 5,8]));