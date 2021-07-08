function getMissingElement(superImportantArray) {
  for(let i=0; i<10; i++)
    if(superImportantArray.indexOf(i)=== -1) return i
}

const getMissingElementUp = (arr) => arr.reduce((sum, n) => sum-n, 45);


console.log(getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4]));
console.log(getMissingElementUp([0, 5, 1, 3, 2, 9, 7, 6, 4]));
