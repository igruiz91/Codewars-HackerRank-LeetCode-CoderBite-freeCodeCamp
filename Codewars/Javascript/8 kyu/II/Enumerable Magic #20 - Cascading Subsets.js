function eachCons(array, n) {
  let resp =[]
  for (let i = 0; i <= array.length-n; i++) {
    let piece = [];
    for (let j = i; j < i + n; j++) {
      piece.push(array[j])
    }
    resp.push(piece)
  }
  return resp
}

const eachConsUp = (arr,n) => {
  let resp =[]
  for (let i = 0; i <= arr.length-n; i++) {
    resp.push(arr.slice(i, i+n))
  }
  return resp
};

console.log(eachCons([1,2,3,4],3))
console.log(eachConsUp([1, 2, 3, 4], 3));
