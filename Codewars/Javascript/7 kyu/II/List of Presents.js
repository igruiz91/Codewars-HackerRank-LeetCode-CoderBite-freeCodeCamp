function howManyGifts(maxBudget, gifts) {
  sortedGift = gifts.sort((a, b) =>a-b)
  for(var i = 0; i < sortedGift.length; i++) {
    maxBudget-=sortedGift[i]
    if (maxBudget < 0 ) return i
  }
  return i
}

const howManyGiftsUp = (budget, gifts) => {
  return gifts.sort((a, b) => a - b).filter((item) => (budget -= item) >= 0).length;
}


console.log(howManyGifts(90,[10, 10, 10, 10, 10, 10, 5, 5, 5, 5, 5, 5]));
console.log(howManyGiftsUp(90,[10, 10, 10, 10, 10, 10, 5, 5, 5, 5, 5, 5]));

// console.log(howManyGifts(20, [13, 2, 4, 6, 1]));
// console.log(howManyGifts(0, [1]));
