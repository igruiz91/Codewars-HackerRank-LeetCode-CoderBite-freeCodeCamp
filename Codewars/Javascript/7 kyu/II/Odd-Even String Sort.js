function sortMyString(S) {
    let odds =[], even=[]
    for(let i=0; i<S.length; i++)
        if(i%2) odds.push(S[i])
        else even.push(S[i])
    return `${even.join('')} ${odds.join('')}`;
}

function sortMyStringUp(s) {
    return [...s].reduce((a,c,i)=> {
        a[i&1]+=c
        return a
    },['', '']).join(' ')
}


console.log(sortMyString('CodeWars'));
console.log(sortMyStringUp('CodeWars'));