const sumArrays = (arr) => {
  let left = arr.slice(0,arr.length/2)
  let right = arr.slice(arr.length/2, arr.length)
  let newArr = []
  if (left.length != right.length) left.unshift(0)
  for(let i=0; i<left.length; i++){
    newArr.push(left[i]+right[i])
  }
  return newArr
}

function splitAndAdd(arr, n) {
  for(let i=0; i<n; i++){
    arr = sumArrays(arr)
    if(arr.length == 1) break
  }
  return arr
}





console.log(splitAndAdd([4, 2, 5, 3, 2, 5, 7], 2));