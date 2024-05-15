function sortByArea(array) {
  array = array.slice();
  function circ(a) {
    if (Array.isArray(a)) {
      return a.reduce((a, b) => a * b, 1);
    }
    return Math.PI * Math.pow(a, 2);
  }
  return array.sort((a, b) => circ(a) - circ(b));
}

// console.log(sortByArea([[4.23, 6.43], 1.23, 3.444, [1.342, 3.212]]));

console.log(
  sortByArea([
    [8.47, 6.31],
    [3.49, 9.78],
    [6.68, 6.93],
    [5.52, 8.66],
    [2.5, 9.72],
  ])
);
