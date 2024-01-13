function twoArePositive(a, b, c) {
  return [...arguments].filter(n => n>0).length == 2
}




console.log(twoArePositive(2, 4, -3));
