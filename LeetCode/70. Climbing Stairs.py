class Solution:
    def climbStairs(self, n: int) -> int:
      one, two, temp = 1,1, 0
      for i in range(n-1):
        temp = one+two
        one, two = two, temp
      return two



test = Solution()

print(test.climbStairs(5))
