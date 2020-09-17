def split_and_merge(string_, separator):
    s = string_.split(' ')
    resp=''
    for x in s:
        resp+=separator.join(x)+" "
    return resp[:len(resp) -1]

def split_and_merge_up(s, sp):
    return ' '.join(sp.join(i) for i in s.split())


print(split_and_merge("My name is John","="))
print(split_and_merge_up("My name is John","."))