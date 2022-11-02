var twoSum = function(nums, target) {
  for(let n of nums){
    let pair = target - n;
    if(nums.includes(pair)){
      if(nums.indexOf(n) != nums.lastIndexOf(pair)) return [nums.indexOf(n), nums.lastIndexOf(pair)];
    }
  }
  return -1
};
// Runtime 274 ms Beats 11.29% Memory 43.3 MB Beats 25.76%


var twoSumUp = function (nums, target) {
  let values = {};
  for (let i = 0, len = nums.length, pair = 0; i < len; i++) {
    if (target - nums[i] in values) return [values[target - nums[i]], i];
    else values[nums[i]] = i;
  }
  return -1;
};
// Runtime 69 ms Beats 96.70% Memory 42.8 MB Beats 45.18%


console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([2, 7, 11, 15], 9));


console.log(twoSumUp([3, 2, 4], 6));
console.log(twoSumUp([ 2, 7, 11, 15], 9));
