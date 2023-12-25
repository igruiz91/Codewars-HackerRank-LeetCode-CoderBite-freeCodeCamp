function isOddHeavy(n) {
  let odds = n.filter(x => x%2)
  let evens = n.filter(y => y%2==0)
  if(odds.length == 0) return false
  return odds.every(x => Math.max(...evens));
}


// console.log(isOddHeavy([0, 2, 19, 4, 4]))//, true);
// console.log(isOddHeavy([1, -2, -1, 2]))//, false);
console.log(isOddHeavy([0]))//, false);
console.log(isOddHeavy([2]))//, false);
