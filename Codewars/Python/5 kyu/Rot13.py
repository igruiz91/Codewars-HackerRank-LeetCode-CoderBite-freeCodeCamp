def rot13(message):
    abc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    ans = []
    for c in message:
        if c not in abc:
            ans.append(c)
            continue
        ans.append(abc[ord(c)-84].lower() if ord(c) >= 97 else abc[ord(c)-52].upper() )
    return "".join(ans)


def rot13_up(message):
    return message.translate(
        message.maketrans(
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
            "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm",
        )
    )

print(rot13("abc"))
print(rot13("ABC"))
print(rot13_up("abc"))
print(rot13_up("ABC"))
