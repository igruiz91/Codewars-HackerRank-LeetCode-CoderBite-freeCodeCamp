class Solution:
    def threeSum(self, nums: list[int]) -> list[list[int]]:
        resp = []
        nums.sort()

        for i, num in enumerate(nums):
          if i >0 and num== nums[i-1]:
            continue

          l, r = i+1, len(nums)-1
          while l<r:
            threeSum = nums[l] + nums[r] +num
            if threeSum >0:
              r-=1
            elif threeSum<0:
              l+=1
            else:
              resp.append([num, nums[l], nums[r]])
              l+=1
              while nums[l] == nums[l-1] and l<r:
                l+=1
        return resp




test = Solution()

print(test.threeSum([-1,0,1,2,-1,-4]))
