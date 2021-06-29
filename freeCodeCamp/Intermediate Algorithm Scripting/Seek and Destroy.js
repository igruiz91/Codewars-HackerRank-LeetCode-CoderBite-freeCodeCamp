function destroyer(arr, ...args) {
  return arr.filter((n) => !args.includes(n));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))