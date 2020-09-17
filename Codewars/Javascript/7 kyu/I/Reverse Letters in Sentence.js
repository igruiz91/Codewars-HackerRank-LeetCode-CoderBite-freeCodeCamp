function reverser(sentence) {
    return sentence.split(' ').map(w=> w.split('').reverse().join('')).join(' ')
}

console.log(reverser(' A fun little challenge! '));