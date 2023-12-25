function findNextPower(val, pow_) {
  let a = Math.pow(val, 1/pow_)
  let r = Math.ceil(a)
  let resp = Math.pow(r, pow_);
  return resp == val ? Math.pow(r+1, pow_) : resp;
}


// console.log(Math.pow(1419857, 1/5));

console.log(findNextPower(8, 3));
console.log(findNextPower(12385, 3));
console.log(findNextPower(1245678, 5));
