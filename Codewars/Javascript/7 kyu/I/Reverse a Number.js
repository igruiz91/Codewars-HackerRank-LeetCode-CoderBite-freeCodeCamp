function reverseNumber(n) {
    let negativo=false;
    if(n<0){
        negativo = true;
        n = n*-1
    }
    n= Number(`${n}`.split('').reverse().join(''))
    return negativo ? n*-1 : n
}

function reverseNumberUp(n) {
    let negativo = n<0;
    let reversed= Number(Math.abs(n).toString().split('').reverse().join(''))
    return negativo ? -reversed : reversed
}
console.log(reverseNumberUp(154));