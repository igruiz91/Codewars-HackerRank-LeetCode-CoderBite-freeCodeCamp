function countWords(str) {
    return str.trim() === '' ? 0 : str.includes('﻿') ? str.trim().split('﻿').length :  str.split` `.filter(String).length
}

const countWordsUp = str => (str.match(/[^\s]+/g) || []).length

console.log(countWords("  Hello     Bart  "));
console.log(countWordsUp("  Hello     Bart  "));