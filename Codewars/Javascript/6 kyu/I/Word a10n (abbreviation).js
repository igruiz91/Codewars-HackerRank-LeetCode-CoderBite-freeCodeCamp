function abbreviate(str) {
    str=str.replace(/[^a-zA-z0-9\-, ]/g, '').split(' ')
    return str.map(w => w.length>4 ? w=dword(w) : w ).join(' ')
}

const dword = w=>  w.split('').includes('-') ? w = w.split('-').map(w=> w=cut(w)).join('-') : cut(w)
     
const cut = w => w[w.length-1] !=',' ? `${w[0]}${w.slice(1,-1).length}${w[w.length-1]}` : `${w[0]}${w.slice(1,-2).length}${w.slice(-2)}`

function abbreviateUp(str) {
  return str.replace(/\w{4,}/g, w => w[0]+(w.length-2)+ w.slice(-1))  
}

let word = "You need, need not want, to complete this code-wars mission"
console.log(abbreviateUp(word));
//'You n2d, n2d not w2t, to c6e t2s c2e-w2s m5n'
//'You n2d, n2d not w2t, to c6e t2s c2e-w2s m5n
//'You n2d n2d not w2t to c6e t2s c2e-w2s m5n'