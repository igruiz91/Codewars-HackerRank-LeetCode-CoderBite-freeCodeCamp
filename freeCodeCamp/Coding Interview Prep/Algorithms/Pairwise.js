function pairwise(arr, arg) {
  let resp = []
  for(let i=0; i<arr.length; i++)
    for(let j=i+1; j<arr.length; j++){
      if(arr[i]+arr[j] ==arg && !resp.includes(i) && !resp.includes(j)){
        resp.push(i,j)
        break
      }
    }
  return resp.reduce((a,b)=>a+b,0)
}

console.log(pairwise([1, 4, 2, 3, 0, 5], 7));
console.log(pairwise([1, 1, 2], 3));
console.log(pairwise([1, 1, 1], 2));
console.log(pairwise([0, 0, 0, 0, 1, 1], 1));



