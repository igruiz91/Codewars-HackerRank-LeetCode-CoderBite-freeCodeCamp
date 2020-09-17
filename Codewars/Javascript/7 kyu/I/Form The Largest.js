function maxNumber(n){
    return Number(`${n}`.split('').sort((a,b)=>b-a).join(''))
}

console.log(maxNumber(213));