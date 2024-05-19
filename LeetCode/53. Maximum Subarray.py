class Solution:
    def maxSubArray(self, nums: list[int]) -> int:
      max_sum = nums[0]
      curr_sum = 0
      for n in nums:
        if curr_sum<0:
          curr_sum = 0
        curr_sum+=n
        max_sum= max(max_sum, curr_sum)
      return max_sum

    def maxSubArrayUp(self, nums):
      resp = float('-inf')
      curr = float('-inf')

      for n in nums:
        curr = max(n,curr+n)
        resp = max(resp,curr)
      return resp

tests = Solution()
arr1 = [-2,1,-3,4,-1,2,1,-5,4]



print(tests.maxSubArray(arr1))
print(tests.maxSubArrayUp(arr1))


