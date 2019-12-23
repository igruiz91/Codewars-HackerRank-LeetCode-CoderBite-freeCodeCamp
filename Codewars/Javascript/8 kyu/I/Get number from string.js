function getNumberFromString(s) {
    return Number(s.match(/[1234567890]/g).join(''));
}

const getNumberFromStringUp = s => parseInt(s.replace(/[^\d]+/g, ''))

console.log(getNumberFromStringUp("this is number: 7"));