function binaryPyramid(m, n) {
  let resp = []
  for (let i = m; i <= n; i++)
    resp.push(i.toString(2))
  return resp.reduce((a, b) => a+ +b,0).toString(2)
}


console.log(binaryPyramid(1, 4));
console.log(binaryPyramid(1, 6));
