function findMissingLetter(array){
    let auxiliar=[]
    let abc ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    abc=abc.split('')
    for(let i=abc.indexOf(array[0]); i<=abc.indexOf(array[array.length-1]);i++){
        auxiliar.push(abc[i])
    }
    return auxiliar.filter(c => !array.includes(c) ).join('')
}

function findMissingLetter2(array)
{
   var i=array[0].charCodeAt();
   console.log(i);
   array.map(x=>  x.charCodeAt()==i?i++:i);
   return String.fromCharCode(i);
}

console.log(findMissingLetter2(['O','Q','R','S']));