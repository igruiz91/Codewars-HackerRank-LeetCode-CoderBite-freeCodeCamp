function isPangram(string) {
    let abc = {}
    string = string.replace(/[^a-z]/gi, '').toLowerCase()
    string.split('').map(c => abc[c] ? abc[c] = 1 : abc[c] = 1)
    return Object.keys(abc).length == 26 ? true : false
}

function isPangram(string) {
    string = string.toLowerCase();
    return 'abcdefghijklmnopqrstuvwxyz'.split('').every(x => string.indexOf(x) !== -1)
}


function isPangram(string) {
    return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
}

console.log(isPangram('ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ'));