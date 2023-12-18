function f(x, cc) {
  for (var [key, value] of Object.entries(cc)) {
    console.log(key, value);
  }
}

console.log(f(3, { a: 3, b: 4, c: 5 }));
