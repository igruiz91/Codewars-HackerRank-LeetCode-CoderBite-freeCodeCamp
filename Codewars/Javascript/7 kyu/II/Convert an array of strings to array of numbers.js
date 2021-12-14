const toNumberArray = (s) => s.map((n) => +n);

const toNumberArrayUp = (s) => s.map(parseFloat);

const toNumberArrayUp2 = (s) => s.map(Number);



console.log(toNumberArray(["1", "2", "3"]));
console.log(toNumberArrayUp2(["1", "2", "3"]));
console.log(toNumberArrayUp(["1", "2", "3"]));