function findLongestWordLength(str) {
    return str.split(' ').sort((a,b)=> b.length-a.length)[0].length
}
  
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));