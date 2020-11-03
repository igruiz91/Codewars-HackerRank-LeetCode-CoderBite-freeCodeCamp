
const isPalindrome = (str) => {
  for (let i = 0, j = str.length - 1; i < str.length / 2; i++) {
    if (str[i] != str[j]) return false;
    j--;
  }
  return true;
};
longestPalindrome = function (s) {
  let len = s.length, max = 0;
  if (len == 0) return 0;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len + 1; j++) {
      let sub = s.slice(i, j)
      if (sub.length > max && isPalindrome(sub)) {
        max = sub.length;
      }
    }
  }
  return max
};



//console.log(isPalindrome('ababa'));

var longestPalindromeTryExecutionTime = function (s) {
  const isPalindrome = (str) =>
    str == str.split("").reverse().join("") && str.length > 1;
  if (isPalindrome(s)) return s.length;
  let resp = [];
  for (let i = 0; i < s.length - 1; i++)
    for (let j = i + 1; j < s.length; j++) {
      let sub = s.slice(i, j);
      if (isPalindrome(sub)) resp.push(sub);
    }
  return resp.length != 0
    ? resp.sort((a, b) => b.length - a.length)[0].length
    : 1;
};


let parrafo = `FourscoreandsevenyearsagoourfathersbroughtforthonthiscontinentanewnationconceivedinLibertyanddedicatedtothepropositionthatallmenarecreatedequalNowweareengagedinagreatcivilwartestingwhetherthatnationoranynationsoconceivedandsodedicatedcanlongendureWearemetonagreatbattlefieldofthatwarWehavecometodedicateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfittingandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravemenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorpowertoaddordetractTheworldwilllittlenotenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheunfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattaskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth`;


console.log(longestPalindrome("a"));
console.log(longestPalindrome("aa"));
console.log(longestPalindrome("baa"));
console.log(longestPalindrome("aab"));
console.log(longestPalindrome("baabcd"));
console.log(longestPalindrome("baablkj12345432133d"));
console.log(longestPalindrome("I like racecars that go fast"));
console.log(longestPalindrome("abcdefghba"));
console.log(longestPalindrome(parrafo));


//console.log(longestPalindrome("somerandomword"));
