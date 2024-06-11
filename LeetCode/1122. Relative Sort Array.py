class Solution:
    def relativeSortArray(self, arr1: list[int], arr2: list[int]) -> list[int]:
        nums = {}
        for n in arr2:
            if n in arr1 and n not in nums:
                    nums[n]=arr1.count(n)
        other_nums = sorted([n for n in arr1 if n not in arr2])
        return [x for k,v in nums.items() for x in [k]*v ]+ other_nums


tests1 = Solution()

arr1 = [2,3,1,3,2,4,6,20,9,2,19]
arr2 = [2,1,4,3,9,6]

abc = {2:1,
       3:1}
print(tests1.relativeSortArray(arr1, arr2))
