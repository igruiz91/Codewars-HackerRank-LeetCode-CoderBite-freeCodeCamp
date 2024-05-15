Array.prototype.even = function () {
  return this.filter((n) => Number.isInteger(n) && n % 2 == 0);
};

Array.prototype.odd = function () {
  return this.filter((n) => Number.isInteger(n) && n % 2 != 0);
};

Array.prototype.under = function (x) {
  return this.filter((n) => Number.isInteger(n) && n < x);
};

Array.prototype.over = function (x) {
  return this.filter((n) => Number.isInteger(n) &&  n > x);
};

Array.prototype.inRange = function (min, max) {
  return this.filter((n) => min <= n && n <= max);
};

// let array = [1, 2, 3, 4, 5];
let array =  [2,"0",1,7,8,123.2,11,"b",0.1,4,1.2,"9",6,9,"1","c",3,5,"a",12.01]
;
console.log(array.even());
console.log(array.odd());
// console.log(array.under(4));
// console.log(array.inRange(1, 3));
