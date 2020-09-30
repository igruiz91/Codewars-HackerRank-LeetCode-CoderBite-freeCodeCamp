function getEvenNumbers(numbersArray) {
  return numbersArray.filter((n) => !(n % 2));
}

console.log(getEvenNumbers([2, 4, 5, 6]));
