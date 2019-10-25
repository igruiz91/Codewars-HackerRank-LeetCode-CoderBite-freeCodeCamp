function lowestProduct(input) {
    let min = 0
    input = input.split('')
    if (input.length < 4) return "Number is too small";
    let resp = input.slice(0, 4);
    min = resp.reduce((a, b) => a * b)
    if (input.length === 4) return min;
    else {
        for (let i = 4; i < input.length; i++) {
            resp.push(input[i])
            let a = resp.slice(1).reduce((a, b) => a * b)
            if (a < min) {
                min = a
            }
            resp.shift()
        }
    }
    return min
}

function lowestProduct2(input) {
    let resp = [];
    input = input.split``;
    if (input.length < 4) return "Number is too small";
    for (let i = 0; i < input.length - 3; i++) {
        resp.push(input[i] * input[i + 1] * input[i + 2] * input[i + 3])
    }
    return Math.min(...resp)
}

//console.log(['1', '1', '1', '1'].reduce((a, b) => a * b));
console.log(lowestProduct2('2345611117899'));