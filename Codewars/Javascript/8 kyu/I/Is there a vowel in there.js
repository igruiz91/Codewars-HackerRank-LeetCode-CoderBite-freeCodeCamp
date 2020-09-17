function isVow(a){
    let vowel = [97,101,105,111,117];
    return a.map(e=> (vowel.indexOf(e) != -1) ? String.fromCharCode(e) : e)
}

const isVowUp = a => a.map(x => 'aeiou'.includes(y = String.fromCharCode(x)) ? y : x)

// let a='aeiou';
// for(let i=0; i<a.length; i++){
//     console.log(a.charCodeAt(i));
// }

console.log(isVowUp([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]));