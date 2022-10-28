function elevatorDistance(array) {
  return array.slice(1).map((n,i) => Math.abs(array[i]-n)).reduce((a,b) => a + b)
}

const elevatorDistanceUp = (arr) => {
  return arr.slice(1).reduce((a,b,i) => a + Math.abs(arr[i]-b), 0)
 }

console.log(elevatorDistance([5,2,8,]))
console.log(elevatorDistanceUp([5, 2, 8]));
