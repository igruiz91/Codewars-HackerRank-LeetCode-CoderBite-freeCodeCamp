const short = arr => {
    return arr.filter(n => (typeof n=='string')).sort((a,b)=>b.length-a.length)[0]
}

var valores = [true, 5, false, "hola", "adios", 2];

console.log(short(valores));