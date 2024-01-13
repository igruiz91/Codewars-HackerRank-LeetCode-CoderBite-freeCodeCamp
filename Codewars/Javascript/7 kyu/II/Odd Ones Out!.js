function oddOnesOut(nums) {
  return nums.filter((n, i, arr) => arr.filter(x => x==n).length%2 == 0);
}


console.log(oddOnesOut([1, 1, 2, 2, 3, 3, 3]));
