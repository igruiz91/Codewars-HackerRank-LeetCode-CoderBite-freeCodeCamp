var lib ={
  "g":"a","G":"A",
  "a":"g","A":"G",
  "d":"e","D":"E",
  "e":"d","E":"D",
  "r":"y","R":"Y",
  "y":"r","Y":"R",
  "p":"o","P":"O",
  "o":"p","O":"P",
  "l":"u","L":"U",
  "u":"l","U":"L",
  "k":"i","K":"I",
  "i":"k","I":"K",
}

function encode(str) {
  return str.split('').map(c => lib[c] ? lib[c] : c).join("");
}

function decode(str) {
  return encode(str);
}


const encodeUp = (str) => {
  return str.replace(/./g, c=> lib[c] || c )
}
const decodeUp = encodeUp

console.log(encode("ABCD"))
console.log(encode("Ala has a cat"));
console.log(encode("gaderypoluki"));
console.log(encode("agedyropulik"));
console.log("")
console.log(encodeUp("ABCD"))
console.log(encodeUp("Ala has a cat"));
console.log(encodeUp("gaderypoluki"));
console.log(decodeUp("agedyropulik"));

