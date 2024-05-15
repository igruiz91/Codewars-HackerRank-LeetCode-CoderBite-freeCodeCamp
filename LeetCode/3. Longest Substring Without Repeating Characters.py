class Solution:
    def lengthOfLongestSubstring(self, s: str):
        char_set = set()
        i = j = 0
        max_substring =float('-inf')
        for i in range(len(s)):
          char = s[i]
          while char in char_set:
            char_set.remove(s[j])
            j+=1
          else:
            char_set.add(char)
            max_substring = max(max_substring, i-j+1)
        return max_substring




test1 = Solution()

print(test1.lengthOfLongestSubstring("abcabcbb"))
# print(test1.lengthOfLongestSubstring("anviaj"))
# print(test1.lengthOfLongestSubstring("dvdf"))
# print(test1.lengthOfLongestSubstring("pwwkew"))
# print(test1.lengthOfLongestSubstring("abcabcbb"))
