function palindrome(str) {
  str = str.toLowerCase().replace(/[^a-z|\d]/gi, "");
  return str === [...str].reverse().join("");
}

console.log(palindrome("_eye2"));
console.log(palindrome("race car"));
