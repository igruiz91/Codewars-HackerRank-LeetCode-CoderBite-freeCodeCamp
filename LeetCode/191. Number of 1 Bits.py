class Solution:
    def hammingWeight(self, n: int) -> int:
        return bin(n).count("1")





tests = Solution()

print(tests.hammingWeight(11))
print(tests.hammingWeight(128))
