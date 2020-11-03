function palindrome(num) {
  let valueUp = num,
    valueDown = num, count = 0
  if (num < 1 || typeof num != "number") return "Not valid";

  while (!isPalindrome(valueUp)) {
    valueUp++;
    count++
  }
  while (!isPalindrome(valueDown) && valueDown>10) {
    valueDown--;
    count--
  }
  return count>0 ? valueDown : valueUp
}

const isPalindrome = (n) => {
  n = `${n}`;
  if(n.length == 1) return false
  for (let i = 0, j = n.length-1; i <= j; i++, j--) {
    if (n[i] != n[j]) return false;
  }
  return true;
};

function palindromeUp(num){
  if(!Number.isInteger(num) || num < 0) return "Not valid";
  for(i = 0 ; 1==1; i++){
    if(isPalindrome(num+i)) return num+i
    if(isPalindrome(num-i)) return num-i
  }
}


console.log(palindrome(8));
console.log(palindrome(281));
console.log(palindrome(1029));
console.log(palindromeUp(1029));
console.log(palindrome(1221));
console.log(palindrome("BGHHGB"));
console.log(palindrome("11029"));
console.log(palindrome(-1029));