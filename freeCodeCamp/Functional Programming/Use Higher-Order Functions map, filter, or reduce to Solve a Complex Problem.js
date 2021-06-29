const squareList = (arr) => {
  // Only change code below this line
  return arr.filter((n) => Number.isInteger(n) && n>0).map(n => n**2);
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
