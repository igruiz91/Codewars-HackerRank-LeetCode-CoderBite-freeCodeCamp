function remove(s){
    s = s.split('').reverse();
    for(let i=0; i<s.length; i++){
        if(s[i]=='!') s[i]=''
        else break
    }
    return s.reverse().join('')
}

const removeUp = s => s.replace(/!+$/, '')


console.log(removeUp("Hi! Hi!"));