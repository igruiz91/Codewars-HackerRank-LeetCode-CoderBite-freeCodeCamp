class Solution:
    def containsDuplicate(self, nums: list[int]) -> bool:
        hash_map = {}
        for n in nums:
            if n not in hash_map:
                hash_map[n]=True
            else:
              return True
        return False

    def containsDuplicateUp(self,nums):
      l = len(nums)
      s = len(set(nums))
      return s != l



tests = Solution()
print(tests.containsDuplicate([1,2,3]))
print(tests.containsDuplicateUp([1,2,3,1]))
