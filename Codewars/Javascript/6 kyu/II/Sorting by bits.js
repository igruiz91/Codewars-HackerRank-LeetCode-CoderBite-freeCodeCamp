function sortByBit(arr) {
  const countBits = (n) => [...n.toString(2)].reduce((a,b) => a+ +b,0)
  return arr.sort((a, b) => countBits(a)-countBits(b) || a - b);
}



console.log(sortByBit([1, 8, 3, 3, 5, 6, 9, 7]));
