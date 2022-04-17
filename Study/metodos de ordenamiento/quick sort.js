function quickSort(arr) {
  let len = arr.length;
  if (len <= 1) return arr
  const pivot = arr[len-1]
  let left = [], right = []
  for(let i = 0; i<len-1; i++)
    arr[i]<pivot ? left.push(arr[i]) :  right.push(arr[i])

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([1,2,4,3,10,9,7,8]))
