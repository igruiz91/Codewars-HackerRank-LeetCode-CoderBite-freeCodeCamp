function countAdjacentPairs(searchString) {
  let arr = searchString.toLowerCase().split(' ')
  let resp = 0
  let temp = ""
  for( let i = 0; i < arr.length-1; i++){
    if( arr[i] === arr[i+1] && arr[i]!=temp) {
      resp++
      temp = arr[i]
    }
    else temp = arr[i]
  }
  return resp
}



console.log(countAdjacentPairs("dog DOG cat"));
console.log(countAdjacentPairs("dog dog dog dog cat cat"));
console.log(countAdjacentPairs("cat cat dog dog cat cat"));
