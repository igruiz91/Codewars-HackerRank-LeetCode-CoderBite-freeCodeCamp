function fearNotLetter(str) {
  let last = str.slice(1).split('').filter((c,i) => c.charCodeAt(0)-1 != str[i].charCodeAt(0));
  return last[0] ? String.fromCharCode(last[0].charCodeAt(0) - 1) : undefined;
}


console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
