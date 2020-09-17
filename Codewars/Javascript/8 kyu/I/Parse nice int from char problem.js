function getAge(inputString){
    return Number(inputString.slice(0,1))
}

function getAge2(inputString){
    return parseInt(inputString)
}

const getAge3 = parseInt;

const getAge4 = s => +s[0];

console.log(getAge4('4 years'));