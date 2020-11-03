function chained(functions) {
  return param => functions.reduce((acc, curr) => curr(acc), param)
}




function f1(x) {
  return x * 2;
}
function f2(x) {
  return x + 2;
}
function f3(x) {
  return Math.pow(x, 2);
}

function f4(x) {
  return x.split("").concat().reverse().join("").split(" ");
}
function f5(xs) {
  return xs.concat().reverse();
}
function f6(xs) {
  return xs.join("_");
}

console.log(chained([f1, f2, f3])(2));



