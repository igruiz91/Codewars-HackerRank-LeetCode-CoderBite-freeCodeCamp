function calculator(a,b,sign){
    if(!(/\*|\/|\+|\-/.test(sign))) return 'unknown value'
    let calc = eval(`${parseInt(a)}${sign}${parseInt(b)}`)
    return isNaN(calc) ? 'unknown value' : calc
}

function calculatorUp(a,b,sign) {
    try {
        return eval(a+sign+b);
    } catch (e) {
        return 'unknown value'
    }
}

console.log(calculatorUp(6,'2',"&"));