const calc = (n) => {
  return n ? calc(n - 1) * n : 1;
};


console.log(calc(7))