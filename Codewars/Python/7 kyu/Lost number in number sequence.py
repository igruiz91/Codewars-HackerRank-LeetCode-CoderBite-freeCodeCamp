def find_deleted_number(arr, mixed_arr):
    for i in arr:
        if(i in mixed_arr):
            pass
        else:
            return i
    return

def find_deleted_number_up(arr, mixed_arr):
    return sum(arr)-sum(mixed_arr)

def find_deleted_number_up2(arr, mixed_arr):
    for i in arr:
        if i not in mixed_arr:
            return i
    return 0

print(find_deleted_number([1,2,3,4,5], [3,4,1,5]))
print(find_deleted_number_up([1,2,3,4,5], [3,4,1,5]))
print(find_deleted_number_up2([1,2,3,4,5], [3,4,2,1,5]))