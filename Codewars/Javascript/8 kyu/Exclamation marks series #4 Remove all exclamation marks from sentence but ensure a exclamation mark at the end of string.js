function remove(s) {
    let resp = ''
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '!') continue
        resp += s[i]
    }
    return `${resp}!`
}

const removeUp = (s) => s.replace(/!/g, '') + '!';

const removeUp2 = (s) => s.split('!').join('') + '!'

console.log(removeUp2("!Hi!"));