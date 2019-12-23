var repeater = (s, n) => s.repeat(n)

var repeaterUp = Function.call.bind(''.repeat)

let s='Na', n=16;
console.log(repeaterUp(s,n));