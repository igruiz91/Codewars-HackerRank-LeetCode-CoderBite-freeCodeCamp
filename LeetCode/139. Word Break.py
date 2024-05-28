def wordBreak(s: str, wordDict: list[str]) -> bool:
  dp = [False] * (len(s)+1)
  dp[len(s)] = True

  for i in range(len(s)-1,-1,-1):
    for word in wordDict:
      if (i+len(word))<=len(s) and s[i:i+len(word)]==word:
        dp[i] = dp[i+len(word)]
      print(dp)
      if dp[i]:
        break
  return dp[0]


print(wordBreak("leetcode", ["leet","code"]))
# print(wordBreak("catsandog", ["cats","dog","sand","and","cat"]))
