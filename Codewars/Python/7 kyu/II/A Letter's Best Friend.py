def best_friend(txt, a, b):
    if txt[-1]==a: return False
    for i in range(len(txt)-1):
        if txt[i]== a and txt[i+1] != b:
            return False
    return True



def best_friend_up(txt, a , b):
    return txt.count(a) == txt.count(a+b)

print(best_friend_up("ax taxest", "a", "x"))
print(best_friend("ax taxest", "a", "x"))
print(best_friend("a test", "t", "e"))
print(best_friend_up("a test", "t", "e"))
