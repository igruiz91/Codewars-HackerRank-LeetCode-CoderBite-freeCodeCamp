function selectionSort(arr) {
  for (let len = arr.length, i = 0; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    if (min != i) [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
}


console.log(
  selectionSort([
    1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
  ])
);
