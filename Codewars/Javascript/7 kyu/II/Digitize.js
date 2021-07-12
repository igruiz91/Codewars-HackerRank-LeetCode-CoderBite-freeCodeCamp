const digitize = (n) => `${n}`.split("").map(n=>+n);

const digitizeUp = (n) => [...String(n)].map(Number)


console.log(digitize("1230"));
console.log(digitizeUp("1230"));
