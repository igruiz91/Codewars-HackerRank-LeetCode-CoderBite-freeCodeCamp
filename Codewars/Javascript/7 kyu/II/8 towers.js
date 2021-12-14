function towerCombination(n) {
  if(n==1) return 1
  return towerCombination(n - 1) * n  ;
}





console.log(towerCombination(1))
console.log(towerCombination(2))
console.log(towerCombination(3))
console.log(towerCombination(12))


