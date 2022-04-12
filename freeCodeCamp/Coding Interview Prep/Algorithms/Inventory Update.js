function updateInventory(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    const item = arr2[i];
    let updateItem = arr1.filter((arr) => arr[1] === item[1]);
    if (updateItem.length > 0) updateItem[0][0] += item[0];
    else arr1.push(item);
  }
  return arr1.sort((a, b) => a[1].localeCompare(b[1]));
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"],
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];

console.log(updateInventory(curInv, newInv));
