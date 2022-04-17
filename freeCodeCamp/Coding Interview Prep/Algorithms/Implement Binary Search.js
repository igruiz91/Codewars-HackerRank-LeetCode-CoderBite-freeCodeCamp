function binarySearch(list, value) {
  let arrayPath = [];
  let left = 0, right = list.length - 1, mid = Math.floor(right / 2);
  if(list[mid] === value) arrayPath.push(list[mid]);
  while(list[mid]!==value){
    if(left>right) return "Value Not Found";
    arrayPath.push(list[mid])
    if(list[mid]>value){
      right=mid-1
      mid = left+ Math.floor((right-left)/2)
    }else{
      left= mid+1
      mid = left + Math.floor((right-left)/2)
    }
    if(list[mid]===value){
      arrayPath.push(list[mid])
      break
    }
  }
  return arrayPath;
}
const testArray = [
  0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 49, 70,
];
const testArray2 = [
  0, 1, 2, 3, 4, 5
];

// console.log(binarySearch(testArray2, 0));
console.log(binarySearch(testArray2, 2));
