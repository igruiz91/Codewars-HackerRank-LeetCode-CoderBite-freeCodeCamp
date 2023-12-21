function missingWord(nums, str) {
  convertedStr = str.replace(/ /g, '').toLowerCase();
  if(nums.some(n => n>convertedStr.length)) return "No mission today"
  return nums.sort((a,b) => a-b).map((n) => convertedStr[n]).join("");
}

console.log(missingWord([5, 0, 3], "I love you"))
console.log(missingWord([29, 31, 8], "The quick brown fox jumps over the lazy dog")) //bay
console.log(missingWord([12, 4, 6], "Good Morning"));
