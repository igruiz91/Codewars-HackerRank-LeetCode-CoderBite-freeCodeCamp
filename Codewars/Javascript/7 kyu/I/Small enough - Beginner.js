function smallEnough(a, limit){
    for(let e of a)
        if(e>limit) return false
    return true
}

function smallEnoughUp(a, limit) {
    return Math.max(...a)<=limit
}

const smallEnoughUp2 = (a, limit) => a.every(x =>x<=limit)

console.log(smallEnoughUp2([78, 117, 110, 99, 104, 117, 107, 115], 100));