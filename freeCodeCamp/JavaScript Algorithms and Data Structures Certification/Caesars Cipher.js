function rot13(str) {
  let abc= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let decode = "NOPQRSTUVWXYZABCDEFGHIJKLM";
  return str.toUpperCase().split('').map(c => abc.indexOf(c) != -1 ? decode[abc.indexOf(c)] : c).join('')
}

console.log(rot13("SERR PBQR PNZC"))
console.log(rot13("SERR CVMMN!"));
