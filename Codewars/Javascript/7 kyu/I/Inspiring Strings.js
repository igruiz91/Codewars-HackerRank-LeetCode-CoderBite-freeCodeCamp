function longestWord(stringOfWords) {
    let spaced = stringOfWords.split(' ');
    let len = spaced.sort((a, b) => b.length - a.length)[0].length
    let longest = spaced.filter(w => w.length == len);
    return longest[longest.length - 1]
}

const longestWordUp = str => str.split(' ').reduceRight((a, b) => (b.length > a.length) ? b : a)

console.log(longestWordUp('one two three'));