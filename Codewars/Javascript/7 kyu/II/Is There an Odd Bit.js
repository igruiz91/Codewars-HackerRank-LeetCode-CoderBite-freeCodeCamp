function anyOdd(x) {
  str_x = x.toString(2).split('').reverse()
  return str_x.filter((c, i) => c == "1" && i % 2 == 1).length > 0 ? 1 : 0;
}



console.log(anyOdd(2))
console.log(anyOdd(5))
console.log(anyOdd(128))
console.log(anyOdd(24082));
console.log(anyOdd(1365));


