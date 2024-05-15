def solve(st):
  for c in range(len(st)//2, 0,-1):
    prefix = st[0:c]
    if prefix in st[-c:]:
      return len(prefix)
  return 0

print(solve("abcabca"))
# print(solve("abcdabc"))
# print(solve("aaaa"))
