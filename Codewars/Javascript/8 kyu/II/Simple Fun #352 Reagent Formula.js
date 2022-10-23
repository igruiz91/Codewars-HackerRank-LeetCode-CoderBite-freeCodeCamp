function isValid(arr) {
  const one = !(arr.includes(1) && arr.includes(2));
  const two = !(arr.includes(4) && arr.includes(3));
  const three = arr.includes(5) === arr.includes(6);
  const forth = arr.includes(7) || arr.includes(8);
  return one && two && three && forth;
}

console.log(isValid([1, 3, 7]));
