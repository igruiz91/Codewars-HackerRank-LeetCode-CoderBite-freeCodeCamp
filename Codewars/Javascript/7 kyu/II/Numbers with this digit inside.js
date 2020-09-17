function numbersWithDigitInside(x, d) {
    for(var i=1, digits =[]; i<=x; i++)
        if((''+i).includes(d))digits.push(i)
    return digits.length = 0 ? [0,0,0] : [digits.length, digits.reduce((a,b) => a+b), digits.reduce((a,b)=>a*b)];
}

console.log(numbersWithDigitInside(11,1));