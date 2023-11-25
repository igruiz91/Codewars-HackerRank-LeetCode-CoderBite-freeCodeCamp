function sumNoDuplicates(numList) {
  return numList.filter((n,i,arr) => arr.indexOf(n) == i && arr.lastIndexOf(n) == i).reduce((a,b) => a + b);
}

const sumNoDuplicatesUp = (list) => {
  return list.reduce((a,b) => list.indexOf(b) === list.lastIndexOf(b) ? a + b : a, 0)
};

console.log(sumNoDuplicates([1, 1, 2, 3]));
console.log(sumNoDuplicatesUp([1, 1, 2, 3]));
console.log(sumNoDuplicates([1, 1,2, 2, 3]));
console.log(sumNoDuplicatesUp([1, 1, 2, 2, 3]));

