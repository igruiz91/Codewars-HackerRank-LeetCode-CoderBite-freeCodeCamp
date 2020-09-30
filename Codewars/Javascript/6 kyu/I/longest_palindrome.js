var longestPalindrome=function(s){
    const isPalindrome = str => str == str.split('').reverse().join('') && str.length>1;
    if(isPalindrome(s)) return s.length
    let resp =[]
    for(let i=0; i<s.length-1; i++)
        for(let j=i+1; j<s.length; j++){
            let sub = s.slice(i,j)
            if(isPalindrome(sub))resp.push(sub)
        }
    console.log(resp);
    return resp.length != 0 ? resp.sort((a,b) => b.length-a.length)[0].length : 1
}

console.log(longestPalindrome('baa'));

