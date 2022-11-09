var makeGood = function (s) {
  if (s.length == 1) return s;
  let copy = s.slice();
  for (let i = 0; i < s.length - 1; i++) {
    if (
      (s[i].toUpperCase() != copy[i] && s[i].toUpperCase()) == s[i + 1] ||
      (s[i + 1].toUpperCase() != copy[i + 1] && s[i] == s[i + 1].toUpperCase())
    ) {
      if (s.length === 2) return "";
      s = s.substring(0, i) + s.substring(i + 2);
      return makeGood(s);
    }
  }
  return s;
};

console.log(makeGood("leEeetcode"));
console.log(makeGood("abBAcC"));
console.log(makeGood("abBAcC"));
console.log(makeGood("Pp"));
console.log(makeGood("PP"));
