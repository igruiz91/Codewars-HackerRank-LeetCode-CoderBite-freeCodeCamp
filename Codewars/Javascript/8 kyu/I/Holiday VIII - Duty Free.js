function dutyFree(normPrice, discount, hol){
    let perc = normPrice*discount/100;
    return parseInt(hol/perc)
}

const dutyFreeUp = (p, d, h) => Math.floor(h/p/d*100)

console.log(dutyFree(12, 50, 1000));