import re


def double_check(s):
    for i in range(1, len(s)-1):
        if s[i]==s[i-1]:
            return True
    return False


def double_check_up(s):
    return bool(re.search(r"(.)\1", s.lower()))


def double_check_up_two(s):
    return any(i*2 in s.lower() for i in s)

print(double_check("aabca"))
print(double_check_up("aabca"))
print(double_check_up_two("aabca"))
print(double_check_up_two("abca"))

