let str = 'abcbdaaa'   //c
let str2 = 'abbaaax'  //x
let str3 = 'abbzddaaax' //z 
let str4 = "abacabaabacaba"; //z 


function firstNotRepeatingCharacter(s) {
  let arr = s.split("");
  let resp = arr.filter(
    (c, i, a) => a.lastIndexOf(c) == i && arr.indexOf(c) == i
  );
  return resp.length ? resp[0] : "_";
}

const firstNotRepeatingCharacterUp = (str) => {
  let hash = {}
  str.map(c => hash[c] ? hash[c]++ : hash[c] = 1)
  for(let i = 0; i<str.length; i++){
    if(hash.str[i] == 1) return str[i]
  }
  return '_'
};


console.log(firstNotRepeatingCharacter(str), firstNotRepeatingCharacter(str));
console.log(firstNotRepeatingCharacter(str2), firstNotRepeatingCharacter(str2));
console.log(firstNotRepeatingCharacter(str3), firstNotRepeatingCharacter(str3));
console.log(firstNotRepeatingCharacter(str4), firstNotRepeatingCharacter(str4));
