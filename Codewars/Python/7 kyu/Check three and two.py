def check_three_and_two(array):
    resp = filter(lambda x: array.count(x)>=2, array)
    return True if len(list(resp))>3 else False

print(check_three_and_two(["a", "x", "a", "b", "b"]))