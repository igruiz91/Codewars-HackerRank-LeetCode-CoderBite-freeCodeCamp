function vowel2index(str) {
  return str.replace(/[aeiou]/gi, (v,i) => i+1)
}


console.log(vowel2index("this is my string"));