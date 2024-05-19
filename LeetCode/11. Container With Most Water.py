class Solution:
    def maxArea(self, height: list[int]) -> int:
        left = 0
        rigth = len(height)-1
        max_area=0
        while left<rigth:
            area = (rigth - left) * min(height[rigth], height[left])
            max_area = max(max_area, area)
            if height[left]<height[rigth]:
                left+=1
            else:
                rigth-=1
        return max_area


tests = Solution()
max_area = tests.maxArea

case1 = [1,8,6,2,5,4,8,3,7]
case2 = [1,1]


print(max_area(case1))
print(max_area(case2))


