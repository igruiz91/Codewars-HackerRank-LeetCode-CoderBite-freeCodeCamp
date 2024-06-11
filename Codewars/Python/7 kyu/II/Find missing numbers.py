def find_missing_numbers(arr):
    if not len(arr): return []
    a, b = min(arr), max(arr)
    return [ i for i in range(a, b) if i not in arr]

print(find_missing_numbers([-3, -2, 1, 5]))

