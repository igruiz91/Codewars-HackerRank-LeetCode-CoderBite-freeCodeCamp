function position(letter){
    let abc ='abcdefghijklmnopqrstuvwxyz';
    return `Position of alphabet: ${abc.indexOf(letter)+1}`
}

const positionUp = l => `Position of alphabet: ${l.charCodeAt(0)-96}`

console.log(positionUp('z'));