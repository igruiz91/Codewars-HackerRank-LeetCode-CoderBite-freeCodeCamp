function duplicates(arr) {
  return [...new Set(arr.filter((e,i,a) => a.indexOf(e)!=a.lastIndexOf(e) && i!=a.indexOf(e)))]
}

console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]));
console.log(duplicates(["1", 2, 4, "4", 3, "3", 1, 5, 3, 3, 3, 3]));
