function LongestWord(sen) {
    sen =sen.match(/[a-z0-9]+/gi)
    return sen.sort((a,b)=>b.length-a.length)[0]
}

console.log(LongestWord("the $$$longest# word is coderbyte"));