function sum() {
  return [...arguments].reduce((a, b) => a + b, 0);
}



console.log(sum(1,2,3))
