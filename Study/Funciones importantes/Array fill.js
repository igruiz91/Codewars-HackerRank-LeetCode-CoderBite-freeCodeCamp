const ArrayFromIndex = (len) => {
  return Array.from({ length: len }, (_, i) => i + 1);
}


const ArrayFill = (len) => {
  return Array(len).fill()//add value to fill
}


const ArrayFrom = (len) => {
  return Array.from(Array(len), (_,i) => i)
}


console.log(ArrayFromIndex(10));
console.log(ArrayFrom(10));
console.log(ArrayFill(10));
