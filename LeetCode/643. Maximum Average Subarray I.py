class Solution:
    def findMaxAverage(self, nums: list[int], k: int) -> float:
        max_sum = curr = sum(nums[:k])
        for i in range(len(nums)-k):
            curr=curr-nums[i]+nums[i+k]
            max_sum = max(curr, max_sum)
        return max_sum/k




    def findMaxAverageUp(self, nums, k):
      max_sum = float("-inf")
      start = 0
      curr = 0
      for i in range(len(nums)):
          curr+=nums[i]
          if i-start+1==k:
              max_sum = max(curr, max_sum)
              curr-=nums[start]
              start+=1
      return max_sum/k

test1 = Solution()
# print(test1.findMaxAverage([1,12,-5,-6,50,3], 4))
print(test1.findMaxAverageUp([1,12,-5,-6,50,3], 4))
