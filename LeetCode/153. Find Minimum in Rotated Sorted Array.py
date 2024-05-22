class Solution:
    def findMin(self, nums: list[int]) -> int:
      l,r = 0, len(nums)-1
      resp = nums[0]
      while l<=r:
        if nums[l] < nums[r]:
          resp = min(resp, nums[l])
          break

        mid = (l + r)//2
        resp = min(resp, nums[mid])
        if nums[mid] >= nums[l]: l = mid+1
        else: r=mid-1
      return resp




test = Solution()
print(test.findMin([11,13,15,17]))
print(test.findMin([3,4,5,1,2]))
print(test.findMin([4,5,6,7,0,1,2]))
