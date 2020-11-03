function stringTransformer(str) {
    let resp = []
    let inicioWords = true;
    if(str[0]===" ") inicioWords = false
    let spaces = str.match(/(\s)+/g).reverse()
    let words =  str.match(/\w+/g).reverse().map(w => {
        return w.split('').map(c => c.toLowerCase()==c ? c.toUpperCase() : c.toLowerCase()).join('')})
    while(spaces.length || words.length){
        if(inicioWords) ordenador(words, spaces, resp)
        else ordenador(spaces, words, resp)
    }
    return resp.join('')
}
const ordenador = (arr1, arr2, resp) => {
    resp.push(arr1.shift())
    resp.push(arr2.shift())
}

const stringTransformerUp = str => {
    return str.split(' ').map(w => w.replace(/./gi, c=>{
        if(c == c.toLowerCase()) return c.toUpperCase()
        else return c.toLowerCase()
    })).reverse().join(' ')
}

const stringTransformerUp2 = str => str.split(' ').reverse().join(' ').split('').map(invertCase).join('')
const invertCase = c => /[a-z]/.test(c) ? c.toUpperCase() : c.toLowerCase()


console.log(stringTransformerUp(' Example   string '));
console.log(stringTransformerUp2(' Example   string '));