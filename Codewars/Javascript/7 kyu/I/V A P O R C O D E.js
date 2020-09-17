function vaporcode(string) {
    return string.replace(/ /g, '').split('').map(s => s.toUpperCase()).join(' ')
}

function vaporcode2(s) {
    return s.toUpperCase().match(/[^ ]/g).join`  `
}

function vaporcode3(string) {
    return string.toUpperCase().split(" ").join("").split("").join("  ");
}

function vaporcode4(string) {
    return string.match(/\S/g).map(x => x.toUpperCase()).join('  ')
}

console.log(vaporcode2("Why isn't my code working?"));