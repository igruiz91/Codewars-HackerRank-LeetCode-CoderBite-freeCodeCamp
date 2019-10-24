function sumStrings(a,b){
    var num1 =a, num2=b, acumulado='';
    var arr1= num1.split(''),
        arr2= num2.split(''),
        decena=0,
        maxLength = Math.max(arr1.length, arr2.length);

    var sumaDigitos = (a,b,c)=>{
        var suma=Number(a)+Number(b)+Number(c),
        nuevoNumero=suma%10,
        segundaCifra = Math.floor(suma/10);
        acumulado = String(nuevoNumero)+acumulado;
        return segundaCifra;
    }

    for(let i=0; i< maxLength; i++){
        var val1 = arr1.length ? arr1.pop() : 0,
            val2 = arr2.length ? arr2.pop() : 0;
            decena= sumaDigitos(val1, val2, decena);
    }
    if(decena>0){
        acumulado=String(decena)+acumulado;
    }
return acumulado.replace(/^[0]+/g, '')
}

function sumStrings2(a,b){
    let v= [a,b]
    return v.reduce((a,b)=>a+~~b)
    //return ``+v.map(n=>+n).reduce((a,b)=>a+b)
}

console.log(sumStrings('712569312664357328695151392','8100824045303269669937'));

console.log(sumStrings2('712569312664357328695151392','8100824045303269669937'));

console.log(sumStrings('123','456'));