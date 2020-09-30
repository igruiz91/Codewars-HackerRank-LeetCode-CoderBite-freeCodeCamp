let enc = ['10', '11', '0110', '0111', '001100', '001101', '001110', '001111', '00011000', '00011001'];



function code(str) {
    str = [...str].map(n => parseInt(n))
    return str.map(n => {
        let f = n.toString(2);
        let flen = `${f}`.length - 1
        return flen == 0 ? `1${f}` : `${0 * flen}1${f}`
    }).join('')
}




function decode(str) {
    reg = new RegExp(enc.join('|'), 'g')
    return str.replace(reg, n => enc.indexOf(n))
}

// for (let i = 0; i <= 9; i++) {
//     console.log(i.toString(2));
// }

// "111011111101101 10 1 11"

function codeUp(str) {
    return [...str].map(n => enc[n]).join('');
}

console.log(codeUp('10111213'));
console.log(decode("11101111110110110111"));