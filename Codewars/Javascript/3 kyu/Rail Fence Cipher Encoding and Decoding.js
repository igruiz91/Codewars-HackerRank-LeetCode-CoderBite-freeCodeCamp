function encodeRailFenceCipher(string, numberRails) {
    let resp=[];
    let rail = numberRails;
    while(rail>0){
        for(let i=0; i<string.length; i+=numberRails+1){
            resp.push(string[i])
        }
        i++
        numberRails--
    }
}

function decodeRailFenceCipher(string, numberRails) {
}

console.log(encodeRailFenceCipher('WEAREDISCOVEREDFLEEATONCE'));