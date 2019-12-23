function remove(s){
    s= [...s].reverse()
    for(let i =0; i<s.length; i++){
        if(s[i]=='!') s[i]=''
        break
    }
    return s.reverse().join('')
}

function removeUp(s) {
    return s.replace(/!$/, '')
}

console.log(remove('!Hi!'));