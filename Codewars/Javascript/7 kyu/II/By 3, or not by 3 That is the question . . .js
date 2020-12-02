function divisibleByThree(str) {
  return [...str].reduce((a,b) => a + +b, 0)%3==0
}

console.log(divisibleByThree("123"));
