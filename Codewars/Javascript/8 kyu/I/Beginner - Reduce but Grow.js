function grow(x) {
    return x.reduce((a, b) => a * b)
}

const grow2 = x => eval(x.join("*"))

console.log(grow([2, 2, 2, 2, 2, 2]));