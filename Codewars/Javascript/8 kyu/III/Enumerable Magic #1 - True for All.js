function all(arr, fun) {
  console.log(arr, fun);
  if (!arr.length) return true;
  return arr.reduce((acc, curr) => (fun(curr) ? true : false));
}

const allUp = (arr, func) => {
  return arr.every(func);
};

const filter = (n) => {
  return n % 2;
};

const plus = (n) => {
  return n > 9;
};

console.log(all([2, 4, 6, 10], filter));
console.log(all([2, 4, 6, 10], plus));
