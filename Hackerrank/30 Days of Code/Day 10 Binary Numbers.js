function toBinary(n) {
    n = n.toString(2).split('0')
    let max = `` + Math.max(...n);
    console.log(max.length);
}

console.log(toBinary(150));