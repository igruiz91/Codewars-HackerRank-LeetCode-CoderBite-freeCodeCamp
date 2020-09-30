var repeatIt = function(str, n) {
    return (typeof str== 'string') ? str.repeat(n) : "Not a string"
}

console.log(repeatIt('Hi',2));