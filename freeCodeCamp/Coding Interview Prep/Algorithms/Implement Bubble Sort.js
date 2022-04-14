function bubbleSort(array) {
  let len = array.length;
  for (let i = len - 1; i >= 0; i--) {
    for (let j = 1; j <= i; j++) {
      if (array[j - 1] > array[j]) {
        let temp = array[j - 1];
        array[j - 1] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

const bubbleSortDown = (arr) => {
  for (let i = 0, len = arr.length; i < len; i++)
    for(let j= len-1; j>i; j--)
      if(arr[j]<arr[j-1])[arr[j], arr[j-1]] = [arr[j-1], arr[j]]
  return arr;
}

console.log(bubbleSort([1, 4, 2, 3, 0, 5]));
console.log(bubbleSortDown([1, 4, 2, 3, 0, 5]));
