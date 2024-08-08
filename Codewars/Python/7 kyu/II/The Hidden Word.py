def hidden(num):
    keys = {
        "6": "a",
        "1": "b",
        "7": "d",
        "4": "e",
        "3": "i",
        "2": "l",
        "9": "m",
        "8": "n",
        "0": "o",
        "5": "t",
    }
    return "".join([keys[n] for n in str(num)])


def hidden_up(num):
    return str(num).translate(str.maketrans("6174329805", "abdeilmnot"))


print(hidden(637))
print(hidden_up(637))
print(hidden(942547))
print(hidden_up(942547))
