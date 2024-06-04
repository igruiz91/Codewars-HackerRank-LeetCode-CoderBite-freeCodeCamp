def rob( nums: list[int]) -> int:
  return max(nums[0], helper(nums[1:]), helper(nums[:-1]))

def helper(nums):
  rob1, rob2 = 0 , 0
  for n in nums:
    temp = max(rob1+n,rob2)
    rob1 = rob2
    rob2 = temp
  return rob2



print(rob([2,3,4,5]))
