var reverse = function (x) {
    let negativo = false;
    if (x < 0) {
        negativo = true
        x *= -1
    }
    if (x > 999999999) {
        return 0
    }

    let transform = (`${x}`.split('').reverse().join(''))
    return negativo ? transform * -1 : transform
};

// maximo numero int 2147483647 


console.log(reverse(1534236469));