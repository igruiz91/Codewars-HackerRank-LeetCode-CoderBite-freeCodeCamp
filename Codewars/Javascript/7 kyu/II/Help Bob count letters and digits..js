function countLettersAndDigits(input) {
    let regx = new RegExp(/\d|[a-z]/i)
    let cout=0
    for(let i=0; i< input.length; i++){
        if(regx.test(input[i])) cout++
    } 
    return cout;
}

const countLettersAndDigitsUp = input => input.replace(/[^a-z\d]/gi, '').length

const countLettersAndDigitsUp2 = str =>{
    let s = str.match(/[a-z\d]/gi)
    return s !==null ? s.length : 0
}


let a = "n!!_ice!!123"

console.log(countLettersAndDigits(a));
console.log(countLettersAndDigitsUp(a));
console.log(countLettersAndDigitsUp2(a));