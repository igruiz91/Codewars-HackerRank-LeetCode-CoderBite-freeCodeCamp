function maxProduct(a) {
  let max=Math.max(...a)
  let prev =0
  for(let i = 0, count=0; i < a.length; i++){
    if (a[i]== max && count==1) prev = a[i]
    else if (a[i]==max) count++
    else if (a[i]>prev) prev = a[i]
  }
  return max*prev
}

const maxProductUp = (a) => { 
  let max = a[0]
  let prevMax = a[0]
  for(let i = 0 ; i < a.length; i++){
    if(a[i]>max) {
      prevMax = max
      max = a[i]
    }
    else {
      if(a[i]>prevMax) prevMax = a[i]
    }
  }
  return max*prevMax
}




console.log(maxProduct([2, 1, 5, 0, 4, 3]));
