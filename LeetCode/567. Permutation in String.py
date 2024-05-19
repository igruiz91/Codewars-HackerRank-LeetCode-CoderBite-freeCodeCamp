class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        start = 0
        substr = ""
        k = len(s1)
        s1_sorted = "".join(sorted(s1))
        for end in range(len(s2)):
            if end-start+1 == k:
                substr+=s2[end]
                if s1_sorted == "".join(sorted(substr)):
                  return True
                else:
                  substr=substr[1:]
                  start+=1
            else:
              substr+=s2[end]
        return False





tests = Solution()
s1 = "ab"
s2 = "eidbaooo"
s3 =  "eidboaoo"
s4 = "dcda"
s5 = "adc"
# print(tests.checkInclusion(s1, s2))
# print(tests.checkInclusion(s1, s3))
print(tests.checkInclusion(s5, s4))
