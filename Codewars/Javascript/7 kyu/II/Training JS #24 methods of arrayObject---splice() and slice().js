function threeInOne(arr) {
  let resp = []
  for (let i = 0; i < arr.length; i += 3) {
    resp.push(arr.slice(i, i + 3))
  }
  return resp.map(a => a.reduce((acc, val) => acc + val,0))
}

console.log(threeInOne([1, 2, 3, 4, 5, 6]));
