class Solution:
    def productExceptSelf(nums: list[int]) -> list[int]:
      resp = [1]* len(nums)
      prefix = 1
      for i in range(len(nums)):
        resp[i] = prefix
        prefix *= nums[i]
      postfix = 1
      for i in range(len(nums)-1, -1, -1):
        resp[i] *= postfix
        postfix *= nums[i]
      return resp


    arr1=[1,2,3,4]
    print(productExceptSelf(arr1))

test = Solution()



