function reverseWords(str){
    str = str.split(' '); // reverse those words
    return str.length==1 ? str[0] : str.reverse().join(' ')
}

function reverseWords(str){
    return str.split(' ').reverse().join(' ');
  }

console.log(reverseWords("yoda doesn't speak like this"));