import re

pattern = "(a)(b(?:c)(d)(?:e))"
word = "abcdef"

m = re.match(pattern, word)
print(m.groups())
print(len(m.groups()))
