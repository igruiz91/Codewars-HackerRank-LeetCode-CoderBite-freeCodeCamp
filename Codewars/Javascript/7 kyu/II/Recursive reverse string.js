function reverse(str) {
    if(str === "") return ""
    else return reverse(str.substr(1))+str.charAt(0)
}

const reverseUp = str => str.length > 1 ? reverse(str.slice(1))+str[0] : str

console.log(reverse('hello world'));
console.log(reverseUp('hello world'));