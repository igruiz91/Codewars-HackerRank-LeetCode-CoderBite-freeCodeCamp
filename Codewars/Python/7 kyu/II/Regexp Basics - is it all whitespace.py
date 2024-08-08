import re


def whitespace(string):
    pattern = r"^\s*$"
    return re.match(pattern, string) is not None


def whitespace_up(string):
    return string.strip() == ""


print(whitespace(""))
