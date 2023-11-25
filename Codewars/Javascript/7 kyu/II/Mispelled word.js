var mispelled = function (word1, word2) {
  let diff = Math.abs(word1.length - word2.length);
  if (diff> 1) return false;
  if (diff === 1 ) [word1, word2] = fixLength(word1, word2);
  for(let i = 0, count = 0; i < word1.length; i++){
    if(word1[i] !== word2[i]) count++;
    if (count > 1) return false
  }
  return true
}
const fixLength = (a,b) => {
  if(a.length > b.length){
    if(a[0]!=b[0]) a= a.slice(1)
    else a = a.slice(0, a.length-1)
  }else{
    if(a[0]!=b[0]) b = b.slice(1)
    else b= b.slice(0, b.length-1)
  }
  return[a,b]
}

const mispelledUp = (word1,word2) => {
  if(Math.abs(word1.length - word2.length)>1) return false
  if(~word1.indexOf(word2) || ~word2.indexOf(word1)) return true
  return word1.split('').filter((e,i) => e!=word2[i]).length == 1

}

// console.log(fixLength('versed1', 'versed12'))
console.log(mispelled('versed', 'asrsed'))
console.log(mispelledUp('versed', 'asrsed'))
// console.log(mispelled("versed", "applb"));
// console.log(mispelled("versed", "v5rsed"));
// console.log(mispelled("1versed", "versed"));
// console.log(mispelled("versed", "versed1"));
// console.log(mispelled("versed", "aversed"));
// console.log(mispelled("aaversed", "versed"));
// console.log(mispelled("versed", "aaversed"));
// console.log(mispelled("vertex", "texver")); //false
// console.log(mispelled('rpC' ,'oOQ'))
// console.log(mispelled('abcdefg', 'bcd'))
// console.log(mispelled("bcd", "abcdefg"));
// console.log(mispelled("abcdefg", "dcb"));
// console.log(mispelled('a','' ))
