function isIntArray(arr) {
  return arr ? arr.every((e) => Number.isInteger(e)) : false;

}

console.log(isIntArray([1, 2, 3]));


