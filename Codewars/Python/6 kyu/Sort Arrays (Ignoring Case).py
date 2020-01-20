def sortme(words):
    return sorted(words, key=str.casefold)

def sortme_up(words):
    return sorted(words, key=str.lower)

print(sortme(["C", "d", "a", "B"]))
print(sortme_up(["C", "d", "a", "B"]))