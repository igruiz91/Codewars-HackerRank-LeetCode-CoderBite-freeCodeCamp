function correct(string) {
    return string.split(' ').map(c => dividirLetras(c)).join(' ')
}

function dividirLetras(string) {
    return string.split('').map(c => {
        if (c == 5) {
            c = 'S'
        } else if (c == 0) {
            c = 'O'
        } else if (c == 1) {
            c = 'I'
        }
        return c
    }).join('')
}

correct = s => s.replace(/0/g, 'O').replace(/1/g, 'I').replace(/5/g, 'S')

const corrections = {
    '5': 'S',
    '0': 'O',
    '1': 'I',
};

const correct = string => (
    string.replace(/[501]/g, character => corrections[character])
);


console.log(correct('L0ND0N'));