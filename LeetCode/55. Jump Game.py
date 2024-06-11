def canJump(nums: list[int]) -> bool:
    goal = len(nums)-1
    for i in range(len(nums)-2, -1,-1):
        print(i, nums[i])
        if i+nums[i]>=goal:
            goal = i
    return goal == 0




print(canJump([3,2,1,1,4]))
print(canJump([3,1,1,0,4]))
