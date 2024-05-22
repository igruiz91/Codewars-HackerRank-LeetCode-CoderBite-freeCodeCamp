class Solution:
    def maxProduct(self, nums: list[int]) -> int:
        resp = max(nums)
        minimum, maximum = 1, 1

        for n in nums:
          if n == 0:
            minimum, maximum=1,1
            continue
          temp = maximum * n
          maximum = max(n*maximum, n*minimum, n)
          minimum = min(temp, n*minimum, n)
          resp = max(resp, maximum)
        return resp


test = Solution()
print(test.maxProduct([2,3,-2,4]))
# print(test.maxProduct([2,3,5,-1,4,-1]))
print(test.maxProduct([-2,0,-1]))
