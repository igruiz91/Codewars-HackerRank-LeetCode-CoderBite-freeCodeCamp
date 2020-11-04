function sumStr(a,b) {
    return String(eval(a+'+'+b))
}

const sumStrUp = (a,b)=> String(Number(a)+Number(b))

const sumStrUp2 = (a,b)=> (+a + +b)+''

console.log(sumStrUp2("4","5"));