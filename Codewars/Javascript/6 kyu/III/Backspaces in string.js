function cleanString(s) {
    return ~s.indexOf`#` ? cleanString(s.replace(/[^#]?#/, "")) : s
}

function cleanStringAutomedon(s) {
    s= s.split``
    for(let i = 0; i<s.length; i++)
        if(s[i]=== "#"){
            s[i] = ""
            s[i-1]=""
            i-=2
            s = s.filter(c => c !=="")
        }
    return s.join``
}

console.log(cleanString('abc#d##c'));
console.log(cleanStringAutomedon('abc#d##c'));