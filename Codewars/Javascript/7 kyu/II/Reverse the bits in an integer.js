function reverseBits(n) {
  return parseInt(n.toString(2).split("").reverse().join(""),2);
}

console.log(reverseBits(417));
