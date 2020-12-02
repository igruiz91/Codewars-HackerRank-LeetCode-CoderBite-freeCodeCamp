function any(arr, fun) {
  return arr.some(e => fun(e))
}

function fn(x) {
  return x>1
}

console.log(any([1,2,3], fn ))

