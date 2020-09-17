function vowelBack(s){
    let reg = new RegExp(/[^aeiou]/gi);
    return s.replace(reg, c => c = String.fromCharCode((c.charCodeAt(0)+9)%122+96) )
}

let a= 'c'.charCodeAt(0)+9

//console.log(a);
//console.log(String.fromCharCode(a%122+96));
//
console.log(108%122)



console.log(vowelBack('codewars'));