def alternate_sq_sum(arr):
    return sum([arr[i]**2 if i%2!=0 else arr[i] for i in range(len(arr))])


print(alternate_sq_sum([11, 12, 13, 14, 15]))
