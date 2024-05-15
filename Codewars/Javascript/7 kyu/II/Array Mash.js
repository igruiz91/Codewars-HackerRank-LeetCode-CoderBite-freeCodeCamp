function arrayMash(array1, array2) {
  let len = Math.max(array1.length, array2.length);
  let resp = []
  for(let i=0 ; i<len ; i++) {
    if(array1.length<=i) {
      resp.push(array2[i])
      continue
    }
    if(array2.length<=i) {
      resp.push(array1[i])
      continue
    }
    resp.push(array1[i])
    resp.push(array2[i])
  }
  return resp
}


const arrayMashUp = (arr1,arr2) => {
  return arr1.reduce((a,b,i) => a.concat(b,arr2[i]), [])
};


// console.log(arrayMash([1, 4], ["a", "b", "c"]));
console.log(arrayMashUp([1, 4,3], ["a", "b", "c"]));
