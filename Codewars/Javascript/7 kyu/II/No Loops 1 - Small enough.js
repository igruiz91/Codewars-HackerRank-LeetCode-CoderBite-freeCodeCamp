function smallEnough(a, limit) {
  return a.every(n => n<limit)
}

const smallEnoughUp = (arr, l) => {
  return Math.max(...arr)<=l
};

console.log(smallEnough([66, 101], 200));
console.log(smallEnoughUp([66, 101], 200));
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100));
console.log(smallEnoughUp([78, 117, 110, 99, 104, 117, 107, 115], 100));
