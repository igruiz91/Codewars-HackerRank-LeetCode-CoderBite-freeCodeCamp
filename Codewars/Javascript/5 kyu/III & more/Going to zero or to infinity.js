function going(n) {
    let cons = 0.000036, max = 1.005917, aum = 0.000001
    return n<171 ? trunc((1/factorial(n))*(sumatoria(n)), 6) : trunc((max-(cons+(n-max)*aum)),6)
}

const factorial = (n) => {
    if(n!=1) n*=factorial(n-1)
    return n
}
const sumatoria = n => {
    for(var i=1, resp =0; i<=n; i++)
        resp+=factorial(i)
    return resp
}

const trunc = (n, c=0) => {
    let s = `${n}`,
        decimales = s.indexOf('.')+1,
        numStr= s.substr(0, decimales+c)
        return Number(numStr)
}

//console.log(factorial(5));
console.log(going(172));

//1.005917
//1.005952  0.000036‬
//1.005988