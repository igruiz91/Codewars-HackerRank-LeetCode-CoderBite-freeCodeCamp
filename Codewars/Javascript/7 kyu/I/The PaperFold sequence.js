function* paperFold(n) {
    let str = ''
    let arr = [1]
    for (let i = 0; i < n; i++) {
        arr.push(arr[i])
        str = arr.map(n => n)

    }
    return str
}

let gen = paperFold(10)

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

