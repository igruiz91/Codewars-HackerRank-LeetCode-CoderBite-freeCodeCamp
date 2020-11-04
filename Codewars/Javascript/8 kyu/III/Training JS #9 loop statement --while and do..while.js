function padIt(str,n){
    str=[...str]
    while(n>0){
        if(n%2!=0){
            str.unshift('*')
        }else str.push('*')
        n--
    }
    return str.join('')
}

function padItUp(str, n){
    while(n>0) str = n--%2 ? '*'+str : str+'*'
    return str
}

console.log(padIt("a",5));
console.log(padItUp("a",5));