// a front vowel (e, é, i, í, ö, ő, ü, ű) the suffix is -nek
// a back vowel (a, á, o, ó, u, ú) the suffix is -nak

function dative(word) {
    let front = ['e', 'é', 'i', 'í', 'ö', 'ő', 'ü', 'ű'];
    let back = ['a', 'á', 'o', 'ó', 'u', 'ú'];
    let reversedWord = word.split('').reverse()
    for(let i = 0; i<reversedWord.length; i++){
        let char = reversedWord[i];
        if(front.includes(char)) return word+'nek' 
        else if(back.includes(char)) return word+'nak'
    }
}

const dativeUp = (word) => {
    return /[aáoóuú]/.test(word) ? word + "nak" : word + "nek";
}


console.log(dative("ablak"));
console.log(dative("szék"));
console.log(dative("otthon"));
console.log(dativeUp("otthon"));
console.log(dativeUp("virábög"));


