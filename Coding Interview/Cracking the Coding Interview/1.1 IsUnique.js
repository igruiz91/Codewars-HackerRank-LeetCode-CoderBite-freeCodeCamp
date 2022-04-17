function isUnique(str) {
    let str2 = [...new Set(str)].join('')
    return str2.length == str.length
}

function isUnique2(str) {
    return str.split('').filter((c, i, self) => self.indexOf(c) == i && self.lastIndexOf(c) != -1).join('').length == str.length
}

function isUniqueChars(str) {
    if (str.length > 128) return false;
    let charSet = []
    for (let i = 0; i < str.length; i++) {
        let c = str[i]
        if (charSet[c]) return false;
        charSet[c] = true;
    }
    return true
}

function isUniqueChars2(str) {
    let checker = 0;
    for (let i = 0; i < str.length; i++) {
        let val = str.charCodeAt(i) - 97;
        if ((checker & (1 << val)) > 0) return false;
        checker |= (1 << val);
    }
    return true;
}

// let x = 'abc'.charCodeAt(0) - 97;
// let y = 1 << 18
// console.log(y);

console.log(isUniqueChars2('acda'));