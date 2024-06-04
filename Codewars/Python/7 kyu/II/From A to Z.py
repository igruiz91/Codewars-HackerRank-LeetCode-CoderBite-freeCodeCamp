def gimme_the_letters(sp):
    ans = ""
    for i in range(ord(sp[0]), ord(sp[-1])+1):
        ans+=chr(i)
    return ans


def gimme_the_letters_up(s):
    a, b = map(ord, s.split('-'))
    return "".join(map(chr, range(a,b+1)))

print(gimme_the_letters("a-z"))
print(gimme_the_letters_up("a-z"))
