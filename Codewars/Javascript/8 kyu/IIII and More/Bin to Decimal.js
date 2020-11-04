function binToDec(bin){
    return parseInt(bin, 2)
}

function binToDecUp(bin) {
    return [...bin].reduce((dec, bit)=> dec << 1|bit, 0);
}
console.log(binToDecUp('1001001'));