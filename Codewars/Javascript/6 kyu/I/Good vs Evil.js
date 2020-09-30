function goodVsEvil(good, evil){
    let legendGoods = [1,2,3,3,4,10]
    let legendBads = [1,2,2,2,3,5,10]
    let powerOfGoods = good.split(' ').map(n=> +n).reduce((a,b,i) => a + b*legendGoods[i])
    let powerOfBads = evil.split(' ').map(n=> +n).reduce((a,b,i) => a + b*legendBads[i])
    return `Battle Result: ${powerOfGoods>powerOfBads ? 'Good triumphs over Evil':powerOfBads>powerOfGoods ? 'Evil eradicates all trace of Good' : 'No victor on this battle field'}`
}

const goodVsEvilUp = (good, evil) =>{
    var getWorth = (side, worth) => side.split(' ').reduce((a,b,i) => a+ (worth[i]*b),0)
    var result = getWorth(good, [1,2,3,3,4,10])-getWorth(evil, [1,2,2,2,3,5,10]);
    return result>0 ? "Battle Result: Good triumphs over Evil" : result < 0 ? "Battle Result: Evil eradicates all trace of Good" : "Battle Result: No victor on this battle field"
}

console.log(goodVsEvil('1 2 1 1 1 1', '1 1 1 1 1 1 1'));
console.log(goodVsEvilUp('1 2 1 1 1 1', '1 1 1 1 1 1 1'));