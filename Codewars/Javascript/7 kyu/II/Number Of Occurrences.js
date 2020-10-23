Array.prototype.numberOfOccurrences = function (n) {
  return this.filter(e => e==n).length
};



let arr = [4, 0, 4];

console.log(arr.numberOfOccurrences(4));
