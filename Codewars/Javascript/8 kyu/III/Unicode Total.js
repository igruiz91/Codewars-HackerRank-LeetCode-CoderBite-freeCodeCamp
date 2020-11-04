function uniTotal(str){
    return str.split('').map(n => n=n.charCodeAt(0)).reduce((a,b) => a+b)
}

function uniTotalUp(s){
    return [...s].reduce((a,b) => a+ b.charCodeAt(0), 0)
}


function uniTotalNormal(s){
    for(var i =0, sum = 0; i<s.length; i++)
        sum+=s.charCodeAt(i)
    return sum
}

console.log(uniTotal('aa'));
console.log(uniTotalUp('c'));
console.log(uniTotalNormal('ca'));