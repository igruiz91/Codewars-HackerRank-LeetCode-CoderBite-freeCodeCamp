var runningSum = function (nums) {
  return nums.map((n, i) => i!=0 ? nums[i] = n + nums[i-1] : n)
}

console.log(runningSum([1, 2, 3, 4]));
