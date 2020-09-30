var palindromeChainLength = function(n) {
    let count=0
    while(palindrome(n)!=true){
        n=`${n}`
        n=Number(n.split('').reverse().join(''))+Number(n)
        count++
    }
    return count
};
const palindrome=(n) =>{
    return `${n}`.split('').reverse().join('') == `${n}`
}

//console.log(palindrome(87878));

console.log(palindromeChainLength(87));
