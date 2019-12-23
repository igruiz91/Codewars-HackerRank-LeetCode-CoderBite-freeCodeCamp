function vowelIndices(word){
    let reg = new RegExp(/[aeiouyAEIOUY]/)
    return [...word].map((c,i) => {
        if(reg.test(c)) return i+1
    }).filter(Number)
}

console.log(vowelIndices('super'));