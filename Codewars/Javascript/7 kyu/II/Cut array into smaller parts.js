function makeParts(arr, chunkSize) {
  let resp = []
  while( arr.length > chunkSize){
    let chunk = arr.slice(0, chunkSize);
    arr=arr.slice(chunkSize)
    resp.push(chunk)
  }
  resp.push(arr)
  return resp
}



const makePartsUp = (arr, chunkSize) => {
  let resp = []
  while(arr.length>0)
    resp.push(arr.splice(0, chunkSize))
  return resp
}

console.log(makeParts([1, 2, 3, 4, 5], 2));
console.log(makePartsUp([1, 2, 3, 4, 5], 2));
