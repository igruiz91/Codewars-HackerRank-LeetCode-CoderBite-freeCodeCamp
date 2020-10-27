import re


def is_letter(s):
    r = re.findall("[a-zA-Z]", s)
    if r == []:
        return False
    return "".join(r) == s


def is_letter_up(s):
    return len(s) == 1 and s.isalpha()


def is_letter_up_2(s):
    return bool(re.fullmatch("[a-zA-Z]", s))


def is_letter_try(s):
    if s == '' or len(s) > 1:
        return False
    return ord(s) in range(65, 122)


print(is_letter(''))
print(is_letter("a\n"))
print(is_letter("s"))
print(is_letter_up_2("s"))
print(is_letter_up("s"))
