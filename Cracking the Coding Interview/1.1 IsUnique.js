function isUnique(str) {
    let str2 = [...new Set(str)].join('')
    return str2.length == str.length
}

function isUnique2(str) {
    return str.split('').filter((c, i, self) => self.indexOf(c) == i && self.lastIndexOf(c) != -1).join('').length == str.length
}

console.log(isUnique2('abcd'));