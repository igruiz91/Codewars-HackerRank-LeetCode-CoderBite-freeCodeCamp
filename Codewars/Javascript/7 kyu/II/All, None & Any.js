Array.prototype.all = function (p) {
  for (let i = 0; i < this.length; i++) {
    let element = this[i];
    if (p(element) == false) return false;
  }
  return true;
};

Array.prototype.none = function (p) {
  for (let i = 0; i < this.length; i++) {
    let element = this[i];
    if (p(element) == true) return false;
  }
  return true;
};

Array.prototype.any = function (p) {
  for (let i = 0; i < this.length; i++) {
    let element = this[i];
    if (p(element) == true) return true;
  }
  return true;
};

function isGreaterThanZero(num) {
  return num > 0;
}

let arr = [-1, 0, 2];
let arr2 = [1, 2, 3];
let arr3 = [-1, -2, -3];

console.log(arr.all(isGreaterThanZero));
console.log(arr2.all(isGreaterThanZero));
console.log(arr3.all(isGreaterThanZero));

console.log(arr.none(isGreaterThanZero));
console.log(arr2.none(isGreaterThanZero));
console.log(arr3.none(isGreaterThanZero));
