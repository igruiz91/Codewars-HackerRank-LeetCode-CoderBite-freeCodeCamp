function anagrams(word, words) {
    word = word.split('').sort().join('')
    return words.filter(p => {
        return word == p.split('').sort().join('')
    })
}

String.prototype.sort = function () {
    return this.split("").sort().join("");
};

function anagrams2(word, words) {
    return words.filter(function (x) {
        return x.sort() === word.sort();
    });
}

function anagrams(word, words) {
    const longitud = word.length

    return words.filter(str => {
        if (str.length != longitud) {
            return false
        }

        const map = {}
        let char;

        for (let i = 0; i < longitud; i++) {
            char = str[i]
            map[char] = (map[char] || 0) + 1
            char = word[i]
            map[char] = map([char] || 0) - 1
        }
        for (char in map) {
            if (map[char] != 0) {
                return false
            }
        }
        return true
    })
}

//console.log(esAnagrama('Israel'));

console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
