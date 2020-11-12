import re
def solve(s):
  return max([int(n) for n in (re.findall("\d+", s))])

print(solve('gh12cdy695m1'))
