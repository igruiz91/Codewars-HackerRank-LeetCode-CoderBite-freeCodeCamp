class Solution:
    def minSubArrayLen(self, target: int, nums: list[int]) -> int:
        start = 0
        min_len=0
        sum_nums=0
        for end in range(len(nums)):
            sum_nums+=nums[end]
            while sum_nums>=target:
                if min_len==0:
                    min_len=end-start+1
                min_len= min(min_len, end-start+1)
                sum_nums-=nums[start]
                start+=1
        return min_len




test = Solution()
print(test.minSubArrayLen(7, [2,3,1,2,4,3]))
