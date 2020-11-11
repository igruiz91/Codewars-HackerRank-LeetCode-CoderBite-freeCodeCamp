function isFlush(cards) {
    cards = cards.map(e => e=e.slice(-1))
    for(let i=1; i<cards.length; i++){
        if(cards[i]!=cards[i-1]) return false
    }
    return true;
}

function isFlushUp(cards){
    return cards.every(e => cards[0].slice(-1)==e.slice(-1))
}

console.log(isFlush(["AS", "3S", "9S", "KS", "4S"]));