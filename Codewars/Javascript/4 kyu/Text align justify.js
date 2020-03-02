var justify = function(str, len) {
    let resp = ""
    let cont = 0
    str.split(' ').map(w => {
        cont+=w.length+1
        if(cont+1<len){
            resp+=w+" "
        }else{
            cont=w.length+2
            resp+='\n'+w+ " "
        }
        
    })
    return resp.split('\n').map(str => espaceado(str,len)).join('\n')
}


const espaceado = (str, len) =>{
    let strLen = str.length-1;
    str = str.trim().split(' ') 
    let espaciosDisponibles = len-strLen //longitud del justificado - caracteres del string
    let espacios = str.length-1 //cantidad de elementos del string -1
    let r =  Math.floor(espaciosDisponibles/espacios)
    let m = espaciosDisponibles%espacios
    console.log(len, espaciosDisponibles, espacios, r, m)
    for (let i = 0; i < espacios; i++) {
        str[i]=str[i]+" ".repeat(r)
        if(m>0){
            str[i]=str[i]+" "
            m--
        }
    }
    str = str.join('')
    console.log(str);
    console.log(str.length );
    return str

}

//let test = 'Además del significado, '
//[ 'Además', 'del', 'significado,' ]

//console.log(espaceado(test));
let txt = 'Además del significado, sinónimos y antónimos de la palabra "cesó", se buscó inversamente en significados, sinónimos y antónimos de otras palabras y en los glosarios gauchesco, criollo, lunfardo, de jergas y modismos de Argentina.'

console.log(justify(txt, 30));