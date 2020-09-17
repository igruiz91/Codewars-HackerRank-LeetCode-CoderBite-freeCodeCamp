import functools

def average(array):
    sum = functools.reduce(lambda a,b: a+b, array)
    return round(sum/len(array))


def average_up(arr):
    return round(sum(arr)/len(arr))

print(average([5, 78, 52, 900, 1]))
print(average_up([5, 78, 52, 900, 1]))