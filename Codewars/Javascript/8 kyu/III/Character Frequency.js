function charFreq(message) {
    let counts={}
    message.split('').map(e => counts[e] ? counts[e]++ : counts[e]=1)
    return counts
}

let charFreqUp = (message) => [...message].reduce((obj,s) => (obj[s] ? obj[s]++ : obj[s]=1, obj),{})



//console.log(charFreq('I like cats'));
console.log(charFreqUp('I like cats'));