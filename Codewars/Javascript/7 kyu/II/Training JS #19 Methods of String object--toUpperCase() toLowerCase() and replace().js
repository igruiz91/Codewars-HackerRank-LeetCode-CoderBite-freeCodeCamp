function alienLanguage(str) {
  return str
    .split(" ")
    .map((w) => w.replace(/^(\w+)(\w)/g, (lc,c,d) => c.toUpperCase()+d.toLowerCase())).join(' ')
}

const alienLanguageUp = (str) => { 
  return str.toUpperCase().replace(/.\b/g, c=> c.toLowerCase())
 }

console.log(alienLanguage("My name is John"));
console.log(alienLanguageUp("My name is John"));
