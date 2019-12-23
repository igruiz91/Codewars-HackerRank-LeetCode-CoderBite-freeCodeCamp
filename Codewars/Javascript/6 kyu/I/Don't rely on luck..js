var guess = 101
Math.random = () => 1;


var lucky_number = Math.floor(Math.random() * 100 + 1);

console.log([guess, lucky_number]);