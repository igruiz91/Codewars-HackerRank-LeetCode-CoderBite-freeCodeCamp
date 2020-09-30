function duplicateCount(text) {
    let duplicates = []
    text = text.toLowerCase()
    let textarr = text.split('')
    for (let i = 0; i < textarr.length; i++) {
        if (text.lastIndexOf(textarr[i]) == i) {
            duplicates.push(textarr[i])
        }
    }
    return duplicates
}

function duplicateCount2(txt) {
    return (txt.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length
}

function duplicates(text) {
    return text.toLowerCase().split('').filter((c, i, self) => {
        return self.indexOf(c) !== i && self.lastIndexOf(c) == i
    })
}

// let a = ['a', 'c', 'a', 'a']
// console.log(a.indexOf('a'));

console.log(duplicates("Indivisibilities"));