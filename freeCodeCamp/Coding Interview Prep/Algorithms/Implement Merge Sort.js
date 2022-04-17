function mergeSort(arr) {
  const merge = (left, right) => {
    let result = [], i = 0, j = 0;
    while (left.length>i && right.length>j) {
      if(left[i]<right[j]){
        result.push(left[i]);
        i++
      }else{
        result.push(right[j]);
        j++
      }
    }
    return [...result, ...left.slice(i), ...right.slice(j)]
  }
  if(arr.length<=1) return arr
  const mid = Math.floor(arr.length/2)
  const left = arr.slice(0, mid)
  const right = arr.slice(mid)
  return merge(mergeSort(left), mergeSort(right))
}

let arr  = [1, 5, 3, 6, 2, 4];

console.log(mergeSort(arr))
