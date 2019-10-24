function checkForFactor (base, factor) {
    return base%factor ? false  :true
}

function checkForFactor2 (base, factor) {
    return base % factor == 0;
}

const checkForFactor3 = (base, factor) => !(base % factor);

console.log(checkForFactor(10,2));