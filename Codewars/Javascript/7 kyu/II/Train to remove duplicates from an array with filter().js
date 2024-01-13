function unique(arr) {
  return arr.filter((e,i) => arr.indexOf(e) ==i)
}


console.log(unique([1, 1, 1, 2, 2, 3]));
