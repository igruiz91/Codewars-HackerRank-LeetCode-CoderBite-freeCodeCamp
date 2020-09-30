function doubleChar(str) {
    return str.split('').map(c => c + c).join('')
}

function doubleChar2(str) {
    return str.replace(/(.)/g, '$1$1')
}

function doubleCharForOf(str) {
    str = str.split('')
    let resp = []
    for (let c of str) {
        c = c + c
        resp.push(c)
    }
    return resp.join('')
}

console.log(doubleCharForOf('casa'));