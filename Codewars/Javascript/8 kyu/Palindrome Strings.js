function isPalindrome(line) {
    return ''+line === [... `${line}`].reverse().join('')
}

let words = ['anna', 'walter', 12321, 123456]

for(let i=0; i<words.length; i++){
    console.log(isPalindrome(words[i]));
}