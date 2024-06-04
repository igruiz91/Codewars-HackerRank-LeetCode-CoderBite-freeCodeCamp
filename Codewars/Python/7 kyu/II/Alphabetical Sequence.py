def alpha_seq(strng):
    res = []
    for c in strng.lower():
        res.append(c.upper() + c.lower() * (ord(c) - 97))
    res.sort()
    return ",".join(res)


def alpha_seq_up(s):
    return ",".join((c * (ord(c) - 96)).capitalize() for c in sorted(s.lower()))


print(alpha_seq("BfcFAA"))
print(alpha_seq_up("BfcFAA"))
