var isMonotone = function (arr) {
  return arr.filter((x,i,arr) => x>arr[i+1]).length ==0
};


const isMonotoneUp = (arr) => {
  return arr.every((n, i) => i === 0 ? true : arr[i]>=arr[i-1])
}

console.log(isMonotone([3, 2, 1]));
console.log(isMonotoneUp([3, 2, 1]));
console.log(isMonotone([1, 2, 3]));
console.log(isMonotoneUp([1, 2, 3]));
