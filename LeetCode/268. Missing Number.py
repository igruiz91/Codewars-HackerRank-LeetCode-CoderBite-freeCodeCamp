class Solution:
    def missingNumber(self, nums: list[int]) -> int:
      l = len(nums)
      summation = l*(l+1)/2
      for n in nums:
        summation-=n
      return summation

    def missingNumberUp(self, nums: list[int]) -> int:
      res = len(nums)
      for i in range(res):
        res+=(i - nums[i])
      return res






test = Solution()


print(test.missingNumber([3,0,1]))
print(test.missingNumberUp([3,0,1]))
