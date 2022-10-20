function evenChars(string) {
  return string.length < 3 || string.length > 100
    ? "invalid string"
    : string.split("").filter((c, i) => i % 2 != 0);
}



console.log(evenChars("abcdefghijklm"));
console.log(evenChars("c"));
