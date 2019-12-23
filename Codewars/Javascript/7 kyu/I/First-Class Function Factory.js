function factory(x) {
    const mult = (f) => f.map(n => n * x);
    mult.valueOf = () => x
    return mult
}

function factoryUp(x) {
    return array => array.map(a => a * x)
}

var three = factoryUp(3)
console.log(three([1, 2, 3]));