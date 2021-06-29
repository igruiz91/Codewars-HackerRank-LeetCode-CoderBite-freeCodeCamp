function diffArray(arr1, arr2) {
  var newArr = [];
  const sD = (arr1, arr2) => arr1.map((n) => (arr2.indexOf(n) === -1 ? newArr.push(n) : n))
  sD(arr1,arr2); sD(arr2,arr1)
  return newArr
}

const diffArrayUp = (arr1,arr2) => {
  let newArr = arr1.concat(arr2)
  return newArr.filter((n,i) => newArr.lastIndexOf(n) == i && newArr.indexOf(n)===i)
};


console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))
console.log(diffArrayUp([1, 2, 3, 5], [1, 2, 3, 4, 5]))