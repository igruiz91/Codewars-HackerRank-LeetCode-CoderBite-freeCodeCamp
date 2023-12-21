function compareVersions(version1, version2) {
  v1 = version1.split(".").map((n) => +n);
  v2 = version2.split(".").map((n) => +n);
  len = Math.max(v1.length, v2.length)
  for(let i = 0; i < len; i++){
    if (Number(v1[i] || 0) <Number(v2[i] || 0)) return false
    else if (Number(v1[i] || 0) >Number(v2[i] || 0)) return true
  }
  return true
}



// console.log(compareNums("10.5", "10.10"))

console.log(compareVersions("11", "10"))        // returns true
console.log(compareVersions("11", "11"));       // returns true
console.log(compareVersions("10.4.6", "10.4")); // returns true
console.log(compareVersions("10.4", "11"))      // returns false
console.log(compareVersions("10.4", "10.10") )  // returns false
console.log(compareVersions("10.4.9", "10.5"))  // returns false
