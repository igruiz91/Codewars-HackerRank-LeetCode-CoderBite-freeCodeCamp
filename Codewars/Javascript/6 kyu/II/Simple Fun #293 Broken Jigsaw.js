function brokenJigsaw(p) {
    for(let i=0; i<p.length; i++){
        p[i] = p[i].replace(/OOO/g, "O")
        p[i] = p[i].replace(/OO/g, "")
    }
    return p
}


let p = ["XXXXOOOXXXXX", "XXXOOXXXXXXX", "XXXXXOOOXXXX", "XXXXOOOOXXXX"]

console.log(brokenJigsaw(p));

/*
XXXXOOOXXXXX
XXXOOXXXXXXX
XXXXXOOOXXXX
XXXXOOOOXXXX

XXXXOXXXXX
XXXXXXXXXX
XXXXXOXXXX
XXXXOOXXXX

XXXXOXXXXX 
XXXOOXXXXXXX 
XXXXXOXXXX 
XXXXOOXXXX
*/