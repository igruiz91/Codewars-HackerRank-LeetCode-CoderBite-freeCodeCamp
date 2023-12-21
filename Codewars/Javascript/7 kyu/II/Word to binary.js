function wordToBin(str) {
  return str.split('').map(c=> ("0000000"+c.charCodeAt(0).toString(2)).slice(-8));
}


const wordToBinUp = (x) => {
  return [...x].map(c=> c.codePointAt().toString(2).padStart(8, '0'))
}

console.log(wordToBin("man"))
console.log(wordToBinUp("man"))
