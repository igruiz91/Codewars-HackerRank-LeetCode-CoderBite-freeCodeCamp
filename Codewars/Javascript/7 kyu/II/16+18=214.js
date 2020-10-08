function add(num1, num2) {
    let a = `${num1}`.split("").reverse();
    let b = `${num2}`.split("").reverse();
    let len = Math.max(a.length, b.length);
    let resp = [];
    for (let i = 0; i < len; i++) {
        const x = a[i] ? a[i] : 0;
        const y = b[i] ? b[i] : 0;
        resp.push(Number(x) + Number(y));
    }
    return Number(resp.reverse().join(""));
}
const addUp = (x, y) => {
    return x * y
        ? +String(
              addUp((x / 10) | 0, (y / 10) | 0) + String((x % 10) + (y % 10))
          )
        : x + y;
};

const addUp2 = (a, b) => {
    return Number(
        String(addUp2(Math.floor(a / 10) | 0, Math.floor(b / 10) | 0)) +
            String(a % 10, b % 10)
    );
};

//console.log(add(248,208));
//console.log(addUp2(248, 2080));
console.log(addUp(248, 2080));
