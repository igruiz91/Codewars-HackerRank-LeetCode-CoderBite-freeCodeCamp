function compare(s1 = "", s2 = "") {
    let reg = /\W/g
    if (s1 == "" || s2 == "" || reg.test(s1 + s2)) return true
    return convert(s1) == convert(s2)
}

const convert = str => [...str.toUpperCase()].map(c => c.charCodeAt(0)).reduce((a, b) => a + b)


//console.log(parseInt('c', 16)

console.log(convert('ZzZz'));
console.log(convert('ffPFF'));
console.log(compare("gf", "FG"));