function chain(input, fs) {
  return fs.reduce((res, val) => val(res), input)
}

function add(num) {
  return num + 1;
}

function mult(num) {
  return num * 30;
}

console.log(chain(2, [add, mult]))
