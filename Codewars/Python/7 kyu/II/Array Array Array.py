def explode(arr):
    if len( [c for c in arr if isinstance(c, (str))]) == 2 : return "Void!"
    return [arr]*sum(n for n in arr if isinstance(n,(int)))


print(explode([9, 3]))
print(explode(["a", 3]))
print(explode(["a", "b"]))
