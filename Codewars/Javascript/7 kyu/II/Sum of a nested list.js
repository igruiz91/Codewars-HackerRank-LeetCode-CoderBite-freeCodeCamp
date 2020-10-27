const sumNested = (arr) => {
  return arr
    .toString()
    .split(",")
    .reduce((a, b) => +b + a, 0);
};

const sumNestedUp = (arr) => {
  if(Array.isArray(arr)){
    return arr.reduce((acc, curr) => acc+ sumNested(curr), 0)
  }else return arr
}


console.log(sumNested([1, [2, [3, [4]]]]));
console.log(sumNestedUp([1, [2, [3, [4]]]]));