var add = (n) => {
    const f = x => add(n + x);
    f.valueOf = () => n;
    return f
}

let i = add(1)(2);

console.log(i);