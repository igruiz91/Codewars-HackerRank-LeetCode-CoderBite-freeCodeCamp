function processData(input) {
    input = input.split('\n').slice(1)
    return input.map(word => {
        let odd = '', even = '';
        for (let i = 0; i < word.length; i++) {
            i % 2 == 0 ? even += word[i] : odd += word[i]
        }
        return even + ' ' + odd
    }).join('\n')
    //en hacker rank debes devolver un console.log();
}

console.log(processData('2\nHacker\nRank'));