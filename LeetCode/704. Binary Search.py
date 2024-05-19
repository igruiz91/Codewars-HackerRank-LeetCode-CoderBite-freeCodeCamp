class Solution:
    def search(self, nums, target):
      start = 0
      end = len(nums)-1
      while start <= end:
        mid = end-start//2
        if(nums[mid]==target):
          return mid

        if nums[mid] < target:
          start = mid + 1
        else:
          end = mid - 1
      return -1



test1 = Solution()
nums = [-1,0,3,5,9,12]
a = test1.search(nums, 9)
print(a)




