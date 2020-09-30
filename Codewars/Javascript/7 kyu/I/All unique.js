function hasUniqueChars(str){
    for(let i=0; i<str.length; i++)
        if(str.lastIndexOf(str[i]) != i) return false
    return true
}

const hasUniqueCharsUp = str => str.length == new Set(str).size

const hasUniqueCharsUp2 = str =>

console.log(hasUniqueCharsUp(" nAa"));