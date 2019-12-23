function wordsToMarks(string) {
    let diccionary = 'abcdefghijklmnopqrstuvwxyz';
    return string.split('').map(c => c = diccionary.indexOf(c) + 1).reduce((a, b) => a + b)
}

function wordsToMarksUp(s) {
    return [...s].reduce((res, c) => res += c.charCodeAt() - 96, 0)
}

console.log(wordsToMarksUp('abcd'));