function numObj(s) {
  return s.map(n => ({ [n]: String.fromCharCode(n)}))
}

console.log(numObj([118, 117, 120]));
