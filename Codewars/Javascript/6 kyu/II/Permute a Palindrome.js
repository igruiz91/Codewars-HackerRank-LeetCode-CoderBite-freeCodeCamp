function permuteAPalindrome(input) {
  let values = [...input].reduce((acc,curr) => (acc[curr] ? (acc[curr]++) : (acc[curr]=1), acc), {});
  let count=0
  for (let n of Object.values(values)) {
    if(n%2)++count
    if(count >1 ) return false
  }
  return true
}

const permuteAPalindromeUp = ([...input], odd=0) => {
  new Set(input).forEach((c) => input.filter((b) => b == c).length %2 ? odd++ : 0 );
  return odd<2
};


console.log(permuteAPalindrome("baaabcd"))
console.log(permuteAPalindromeUp("baaabcd"))
console.log(permuteAPalindrome("baa"))
console.log(permuteAPalindromeUp("baa"));
