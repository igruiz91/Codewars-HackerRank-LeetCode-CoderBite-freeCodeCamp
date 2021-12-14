const squareList = arr => {
  // Only change code below this line
  return arr.filter(x => Number.isInteger(x) && x>0).map(n => n**2);
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
const squaredIntegers2 = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
console.log(squaredIntegers);
console.log(squaredIntegers2);