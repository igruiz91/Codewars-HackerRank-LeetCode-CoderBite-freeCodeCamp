var countBits = function(n) {
    return n.toString(2).split('').filter(Number).length
};

function countBits2(n) {
    return n.toString(2).split('0').join('').length
}

console.log(countBits2(1234));