function strong(n) {
    return `${n}`.split('').map(Number).reduce((a,b) => a + factorial(b))==n ?"STRONG!!!!" : "Not Strong !!" 
}

const factorial = n => {
    for(var i=1, resp =1; i<=n; i++)
        resp*=i
    return resp
}


console.log(strong(145));