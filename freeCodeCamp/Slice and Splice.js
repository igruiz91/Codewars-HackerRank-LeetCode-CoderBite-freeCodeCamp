function frankenSplice(arr1, arr2, n) {
    return arr2.slice(0,n).concat(arr1,arr2.slice(n))
}
  
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));