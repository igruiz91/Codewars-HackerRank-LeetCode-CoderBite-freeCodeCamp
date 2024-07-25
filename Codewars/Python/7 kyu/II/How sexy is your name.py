SCORES = {
    "A": 100,
    "B": 14,
    "C": 9,
    "D": 28,
    "E": 145,
    "F": 12,
    "G": 3,
    "H": 10,
    "I": 200,
    "J": 100,
    "K": 114,
    "L": 100,
    "M": 25,
    "N": 450,
    "O": 80,
    "P": 2,
    "Q": 12,
    "R": 400,
    "S": 113,
    "T": 405,
    "U": 11,
    "V": 10,
    "W": 10,
    "X": 3,
    "Y": 210,
    "Z": 23,
}


def sexy_name(name):
    s = 0
    resp = "THE ULTIMATE SEXIEST"
    for c in name.upper():
        if c in SCORES:
            s += SCORES[c]
        else:
            continue
    if s <= 60:
        resp = "NOT TOO SEXY"
    elif s >= 61 and s <= 300:
        resp = "PRETTY SEXY"
    elif s >= 301 and s <= 599:
        resp = "VERY SEXY"
    return resp


def sexy_name_up(name):
    n = sum(SCORES.get(x, 0) for x in name.upper())
    return ["NOT TOO SEXY", "PRETTY SEXY", "VERY SEXY", "THE ULTIMATE SEXIEST"][
        sum([n >= 61, n >= 301, n >= 600])
    ]


print(sexy_name("BOB"))
print(sexy_name_up("BOB"))
print(sexy_name("GUV"))
print(sexy_name_up("GUV"))
