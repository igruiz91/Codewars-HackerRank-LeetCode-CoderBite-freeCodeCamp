def binary_cleaner(seq):
    arr1, arr2 = [], []
    for i, n in enumerate(seq):
        if n < 2:
            arr1.append(n)
        else:
            arr2.append(i)
    return arr1, arr2


print(binary_cleaner([0, 1, 2, 3, 4]))  # Expected output: ([0,1], [ 2, 3, 4])
