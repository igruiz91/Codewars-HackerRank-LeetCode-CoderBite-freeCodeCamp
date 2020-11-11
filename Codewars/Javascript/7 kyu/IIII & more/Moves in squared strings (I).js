function vertMirror(strng) {
    return strng.split('\n').map(c => c.split('').reverse().join('')).join('\n')
}
function horMirror(strng) {
    return strng.split('\n').reverse().join('\n')
}
function oper(fct, s) {
    return fct(s)
}

const vertMirrorUp = s=> s.map(s => [...s].reverse().join(''))
const horMirrorUp =s=> s.reverse();
const operUp = (f, s) => f(s.split('\n')).join('\n');

let str = "abcd\nefgh\nijkl\nmnop"

// console.log(vertMirror(str));
//console.log(horMirror(str));
console.log(oper(vertMirror, str));