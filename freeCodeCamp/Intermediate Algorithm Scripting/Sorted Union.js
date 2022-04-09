function uniteUnique(...arr) {
  return [...new Set(arr.flat())];
}


function uniteUnique2 () {
  return [...arguments].flat().filter((item, index, array) => array.indexOf(item) === index); 
};

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique2([1, 3, 2], [5, 2, 1, 4], [2, 1]));
