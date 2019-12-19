def merge_arrays_n(first, second):
    return sorted(set(first+second))

print(merge_arrays_n([2, 4, 8], [2, 4, 6]))