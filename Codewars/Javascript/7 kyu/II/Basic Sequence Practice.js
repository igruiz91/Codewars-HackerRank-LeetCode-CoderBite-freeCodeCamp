function sumOfN(n) {
  let resp=[], len = Math.abs(n) 
  for(let i=0, sum=0; i<=len; i++){
    sum+=i
    resp.push(sum)
  }
  return n>0 ? resp : resp.map(n => n==0 ? n :  n*-1)
}


console.log(sumOfN(-4));