function climb(n) {
  let resp = [];
  while (n >= 1) {
    resp.push(n);
    n = Math.floor(n / 2);
  }
  return resp.reverse();
}


const climbUp = (n) => {
  for(var resp =[]; n ;n= ~~(n/2)) resp.unshift(n)
  return resp
}


console.log(climbUp(100));
console.log(climbUp(12345));
