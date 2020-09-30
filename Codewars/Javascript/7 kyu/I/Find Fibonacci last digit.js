function getLastDigit(index) {
    let n1 = 1;
    let n2 = 1;
    for (let i = 2; i < index; i++) {
        let aux = n1;
        n1 = n2
        n2 = (aux + n1) % 10
    }
    return n2
}

function getLastDigitUp(num) {
    let [a, b] = [1, 1];
    for (let i = 2; i < num; i++) {
        [a, b] = [b, (a + b) % 10]
    }
    return b
}

console.log(getLastDigitUp(15));