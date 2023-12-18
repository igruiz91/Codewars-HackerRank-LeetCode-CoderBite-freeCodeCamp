function f(x, cc) {
  let found = false;
  for(var [key, value] of Object.entries(cc)) {
    if (found) return value
    if (value == x) found = true
  }
  return Object.values(cc)[0]
}

obj = { a: 3, b: 4, c: 5 }

console.log(f(3, obj));
console.log(f(5, obj));
