function dontFive(s, e) {
    let resp = []
    for (let i = s; i <= e; i++) {
        if (i % 5 == 0 || haveFive(i)) continue;
        resp.push(i)
    }
    return resp
}

function haveFive(n) {
    let have = false;
    `${n}`.split('').map(n => +n % 5 == 0 ? have = true : null)
    return have
}

const dontFiveNew = (s,e) => {
    let resp = []
    for(let i=s; i<=e; i++){
        if(have(i)) continue;
        else resp.push(i)
    }
    return resp.length
}
const have = n => {
    (n<0) ? n= `${n}`.split('').filter(Number) : n= `${n}`.split('')
    return n.includes('5')
}

const dontGiveMeFiveUp = (s,e)=>{
    for(var count=0; s<=e; s++)
        (s+"").includes('5') || count++
    return count
}

//console.log(have(-15));

//console.log(haveFive(12346));

console.log(dontGiveMeFiveUp(4, 17));