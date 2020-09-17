function fakeBin(x){
    return [...x].map(n => n<5 ? n=0 : n=1 ).join('')
}

console.log(fakeBin(45385593107843568));