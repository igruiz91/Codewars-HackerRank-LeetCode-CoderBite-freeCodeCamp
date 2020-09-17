function letterCount(s){
    let abc={}
    s.replace(/[^a-z]/g, '').split('').sort().map(c => abc[c] ? abc[c]++ : abc[c]=1)
    return abc
}

const letterCountUp = s=> s.split('').reduce((accum, value)=> {
    accum[value] = accum[value] ? accum[value]+1 : 1
    return accum;
},{})

console.log(letterCount('arithmetics'));