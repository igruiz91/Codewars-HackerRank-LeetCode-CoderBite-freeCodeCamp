decodeMorse = function (morseCode) {
    let abc = { '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E', '..-.': 'F', '--.': 'G', '....': 'H', '..': 'I', '.---': 'J', '-.-': 'K', '.-..': 'L', '--': 'M', '-.': 'N', '---': 'O', '.--.': 'P', '--.-': 'Q', '.-.': 'R', '...': 'S', '-': 'T', '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X', '-.--': 'Y', '--..': 'Z', '-----': '0', '.----': '1', '..---': '2', '...--': '3', '....-': '4', '.....': '5', '-....': '6', '--...': '7', '---..': '8', '----.': '9', '-.-.--': '!', '.-.-.-': '.', '': ' ', '···−−−···': 'SOS' }
    return morseCode.trim().split(' ').map(c => abc[c]).join('').replace(/  /g, ' ')
}

//'SOS! THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG',  
//'SOS! THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.'

console.log(decodeMorse('... --- ...'));

