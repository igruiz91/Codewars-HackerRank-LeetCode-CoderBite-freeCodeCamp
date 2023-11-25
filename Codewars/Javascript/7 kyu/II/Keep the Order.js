function keepOrder(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= val) return i;
  }
  return arr.length;
}

const keepOrderUp = (arr, val) => {
  return arr.filter(a => a<val).length
}

console.log(keepOrder([1, 2, 3, 4, 7], 5));
console.log(keepOrderUp([1, 2, 3, 4, 7], 5));
