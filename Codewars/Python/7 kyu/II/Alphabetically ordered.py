def alphabetic(s):
    return "".join(sorted(s)) == s


print(alphabetic("ant"))
print(alphabetic("kata"))
