function countdown(n) {
  if (n <= 0) return [];
  else{
    const count = countdown(n - 1);
    count.unshift(n);
    return count;
  }
}

function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}


console.log(countdown(5))
console.log(countup(5));