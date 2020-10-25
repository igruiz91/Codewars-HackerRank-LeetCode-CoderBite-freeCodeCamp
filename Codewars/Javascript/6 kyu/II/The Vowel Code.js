let vowels = ["`", "a", "e", "i", "o", "u"];

function encode(string) {
  return string.replace(/[aeiou]/g, (v) => "_aeiou".indexOf(v));
}

function decode(string) {
  return string.replace(/\d/g, (d) => "_aeiou".charAt(d));
}

console.log(encode("hello"));
console.log(decode("h1ll3"));
