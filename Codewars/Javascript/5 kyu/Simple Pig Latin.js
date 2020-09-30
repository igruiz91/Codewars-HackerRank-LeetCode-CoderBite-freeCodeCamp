function pigIt(str) {
    return str.split(' ').map(word => {
        return /[a-zA-Z]/g.test(word)
            ? word = `${word.slice(1)}${word.slice(0, 1)}ay`
            : word
    }).join(' ')
}

function pigIt2(str) {
    return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}

console.log(pigIt('Hello world !'));