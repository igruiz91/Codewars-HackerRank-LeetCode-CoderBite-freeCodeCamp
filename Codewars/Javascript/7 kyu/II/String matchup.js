function solve(a, b) {
  let resp = []
  b.map(e => {
    let n = 0
    a.map( x => x === e ? n++ : 0 )
    resp.push(n)
  })
  return resp
}

const solveUp = (a,b) => {
  return b.map(x => a.filter(n => n === x).length)
}

const solveUp2 = (a,b) => {
  return b.map(e => a.reduce((x, y) => e === y ? ++x : x, 0 ))
}





array1 = ["abc", "abc", "xyz", "cde", "uvw"];
array2 = ["abc", "cde", "uap"];


console.log(solve(array1, array2))
console.log(solveUp(array1, array2));
console.log(solveUp2(array1, array2));