var findInArray = function (array, iterator) {
  for (var i = 0; i < array.length; i++){
    if( iterator(array[i], i) == true) return i
  }
  return -1
};

const findInArrayUp = (array, iterator) => {
  return array.findIndex(iterator)
}

var trueIfEven = function (value, index) {
  return value % 2 === 0;
};


console.log(findInArray([1,3,5,6,7], trueIfEven))
console.log(findInArrayUp([1,3,5,6,7], trueIfEven))
