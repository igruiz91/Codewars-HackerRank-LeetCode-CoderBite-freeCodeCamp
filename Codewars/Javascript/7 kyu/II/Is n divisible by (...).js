function isDivisible(...args) {
  return args.slice(1).every(n => args[0]%n == 0)
}


console.log(isDivisible(8, 3, 4, 2, 5));
