var isPalindrome = function (s) {
  let cleanString = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleanString == cleanString.split('').reverse().join('')
};

var isPalindromeUp = function(s){
  let cl = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0, right = cl.length-1;
  while (left < right) {
    if(cl[left] !== cl[right]) return false;
    left++;
    right--;
  }
  return true;
}


let s = "A man, a plan, a canal: Panama";
let s2 = " "
let s3 = "0P"
console.log(isPalindrome(s))
console.log(isPalindrome(s2))
console.log(isPalindrome(s3))
console.log("-----------------")
console.log(isPalindromeUp(s))
console.log(isPalindromeUp(s2))
console.log(isPalindromeUp(s3))
