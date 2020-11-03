function encrypt(str) {
    let even = [], odd = []
    str = [...str];
    str.map((c, i) => i % 2 == 0 ? even.push(c) : odd.push(c))
    return even.concat(odd).join('')
}

console.log(encrypt('Simple text'));