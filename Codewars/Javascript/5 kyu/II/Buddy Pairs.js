function buddy(start, limit) {
  let mcm_start = mcm(start)
  let mcm_limit = mcm(limit);
  if(textMultiples(mcm_start, limit) && textMultiples(mcm_limit, start)) return
}

const mcm = (n) => {
  multiples = []
  for (let i = 1; i <=n/2; i++) {
    if(n%i == 0) multiples.push(i);
  }
  return multiples;
}

const testMultiples = (arr, n) => {
  let sum = arr.reduce((acc, num) => acc += num,0)
  return sum==n+1

}


// console.log(mcm(4952)); // [ 1, 2, 4, 8, 619, 1238, 2476 ]
// console.log(testMultiples([1,3, 5, 15, 25], 48));
// let a = [1, 2, 4, 8, 619, 1238, 2476].reduce((a,b) => a+=b, 0);
// console.log(a)
