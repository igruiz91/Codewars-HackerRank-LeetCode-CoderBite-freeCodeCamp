function getSumOfDigits(integer) {
  var sum = 0;
  var digits = integer.toString();
  for(var i = 0; i < digits.length; i ++) {
    sum += +digits[i];
  }
  return sum;
}


console.log(getSumOfDigits(123))