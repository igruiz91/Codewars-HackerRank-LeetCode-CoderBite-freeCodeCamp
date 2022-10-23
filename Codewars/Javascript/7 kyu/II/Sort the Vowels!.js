function sortVowels(s) {
  if(typeof(s) != 'string') return ''
  let vowel = new RegExp(/[aeiou]/i)
  return s.split("").reduce((resp, curr) => vowel.test(curr) ? (resp += `|${curr}\n`) : resp+=`${curr}|\n`, "").slice(0,-1);
}

const sortVowelsUp = (s) => {
  return typeof s != 'string' ? '' : [...s].map(c => /[aeiou]/i.test(c) ? `|${c}` : `${c}|`).join('\n')
 }

console.log(sortVowels('Codewars'));
console.log(sortVowelsUp('Codewars'));
