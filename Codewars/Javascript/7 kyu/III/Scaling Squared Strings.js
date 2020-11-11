function scale(strng, k, n) {
    let resp = []
    let converted = strng.split('\n').map(s => s.split('').map(a => a.repeat(k)).join(''))
    for(let i=0; i<converted.length; i++){
        for(let j=0; j<n; j++){
            resp.push(converted[i])
        }
    }
    return resp.join('\n')
}

const scaleUp = (strng, k, n) => {
    let r;
    return ( r = strng.split('\n').map(s => s.split('').map(c => c.repeat(k)).join('')).map(r => r ? (r+'\n').repeat(n) : '').join('')).slice(0,r.length-1)
}

const scaleUp2 = (strng, k, n) => {
    return (strng + '\n').replace(/[^\n]/g, '$&'.repeat(k)).replace(/([^\n]+\n)/g, '$&'.repeat(n)).trim()
}

var a = "abcd\nefgh\nijkl\nmnop";


//console.log(scale(a, 2, 3));
//console.log(scaleUp(a, 2, 3));
console.log(scaleUp2(a, 3, 3));