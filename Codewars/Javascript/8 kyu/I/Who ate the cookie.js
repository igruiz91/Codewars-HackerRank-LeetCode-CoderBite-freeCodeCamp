function cookie(x){
    let resp = "Who ate the last cookie? It was";
    return typeof x=="number" ? resp+" Monica!" : typeof x=="string" ? resp+ " Zach!" : resp + " the dog!";
}

const cookieUp = x => `Who ate the last cookie? It was ${typeof x == 'string' ?  'Zach!' : typeof x == 'number' ? 'Monica!' : 'the dog!'}`


console.log(cookieUp(12));

console.log(cookieUp("Ryan"));