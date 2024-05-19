class Solution:
    def missingNumber(self, nums: list[int]) -> int:
      l = len(nums)
      summation = l*(l+1)/2
      for n in nums:
        summation-=n
      return summation






test = Solution()


print(test.missingNumber([3,0,1]))
