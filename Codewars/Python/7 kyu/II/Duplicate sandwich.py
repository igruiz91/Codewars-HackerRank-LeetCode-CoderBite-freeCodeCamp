def duplicate_sandwich(arr):
    lib= {}
    for i, e  in enumerate(arr):
        if e in lib:
            return arr[lib[e]+1: i]
        else: lib[e]=i
    return []





print(duplicate_sandwich([0, 1, 2, 3, 4, 5, 6, 1, 7, 8]))
print(duplicate_sandwich(["None", "Hello", "Example", "hello", "None", "Extra"]))
print(duplicate_sandwich([0, 0]))

