def cat_mouse(x):
    spaces = 0
    for e in x:
        if e==".":
            spaces+=1
    return "Caught!" if spaces<=3 else "Escaped!"

def cat_mouse_up(x):
    return "Escaped!" if x.count(".")>3 else "Caught!"

print(cat_mouse('C...m'))
print(cat_mouse_up('C....m'))