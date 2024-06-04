def scoreOfString(s: str) -> int:
    ans = 0
    for i in range(0, len(s)-1):
        ans += abs(ord(s[i]) - ord(s[i + 1]))
    return ans


print(scoreOfString("hello"))
