def ensure_question(s):
    return s if s[len(s) - 1:] == "?" else s + "?"


def ensure_question_up(s):
    return s.rstrip("?")+"?"

print(ensure_question("ce"))
print(ensure_question_up("ce?"))
