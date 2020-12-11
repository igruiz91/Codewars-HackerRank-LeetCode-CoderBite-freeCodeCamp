const sum = (...x) => {
  const args = [...x];
  return args.reduce((a, b) => a + b, 0);
};



console.log(sum(1, 2, 3, 4));
console.log(sum(5));