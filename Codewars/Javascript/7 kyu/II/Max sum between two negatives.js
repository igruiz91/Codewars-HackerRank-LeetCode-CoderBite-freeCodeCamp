function maxSumBetweenTwoNegatives(a) {
  let resp = 0;
  let valid = a.filter((n) => n < 0).length > 1;
  while (a[a.length - 1] >= 0) {
    a.pop();
  }
  for (let i = 0; i < a.length; i++) {
    let sum = 0;
    if (a[i] < 0) {
      i++;
      while (a[i] >= 0) {
        sum += a[i];
        i++;
      }
      i--;
      if (sum > resp) resp = sum;
    }
  }
  return valid ? resp : -1;
}

const maxSumBetweenTwoNegativesUp = (a) => {
  let resp = -1, sum = -1;
  for(let x of a){
    if(x<0 && sum == -1) sum =0
    else if(sum>=0 && x<0){
      resp = Math.max(sum, resp)
      sum=0
    }
    else if(sum>=0){
      sum+=x
    }
  }
  return resp
};

console.log(maxSumBetweenTwoNegatives([4, -1, 6, -2, 3, 5, -7, 7]));
console.log(maxSumBetweenTwoNegatives([5, -1, -2]));
console.log(maxSumBetweenTwoNegatives([1, -2]));
console.log(maxSumBetweenTwoNegatives([7, -5, 6, 6, -5, -2, 3, 5, 6, 3]));
console.log(maxSumBetweenTwoNegativesUp([7, -5, 6, 6, -5, -2, 3, 5, 6, 3]));
