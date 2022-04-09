function translatePigLatin(str) {
  let vowels=/^[aeiou]/.test(str)
  if(!vowels){
    let first = str.split(/[aeiou]/)[0];
    let second = str.slice(first.length);
    return second + first + 'ay';
  }
  return str+'way';
}


console.log(translatePigLatin("glove"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("onsonant"));