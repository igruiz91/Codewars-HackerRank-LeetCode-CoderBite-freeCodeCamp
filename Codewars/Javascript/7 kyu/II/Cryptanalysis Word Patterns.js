function wordPattern(word) {
  let abc ={}, count = 0
  return word.toLowerCase().split("").map(c => abc[c] !== undefined ? abc[c] : abc[c]=count++).join(".")
}


const wordPatternUp = (word) => {
  word = word.toLowerCase()
  const set = [... new Set(word)]
  return word.split("").map(c => set.indexOf(c)).join(".")
}

console.log(wordPattern("Hippopotomonstrosesquippedaliophobia"));


//
// expected '0.1.2.2.3.2.3.4.3.5.3.6.7.4.8.3.7.9.7.10.11.1.2.2.9.12.13.14.1.3.2.15.3.16.1.13'
// to equal '0.1.2.2.3.2.3.4.3.5.3.6.7.4.8.3.7.9.7.10.11.1.2.2.9.12.13.14.1.3.2.0.3.15.1.13'
