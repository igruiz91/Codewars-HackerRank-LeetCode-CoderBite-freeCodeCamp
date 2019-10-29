function firstNonRepeatingLetter(s) {
let test = s.toLowerCase().split('').filter((c,i,s) => {
    return s.indexOf(c) == i && s.lastIndexOf(c) == i;
})[0]

let x= s.toLowerCase().split('')
let a= x.indexOf(test)

return test ? s.split('')[a] : ''
}

function primerNoRepetido(s) {
    for(var i of s){
        if(s.match(new RegExp(s[i], 'gi')).length==1){
            return s[i];
        }
    }
    return '';
}

function primeroNoRepetido2(str) {
    let t=str.toLowerCase();
    for(let i=0; i<t.length; i++){
        if(t.indexOf(t[i]) === t.lastIndexOf(t[i]))
            return str[i]
    }
    return ''
}

console.log(primeroNoRepetido2('sTreress'));