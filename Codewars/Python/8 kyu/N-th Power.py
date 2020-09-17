def index(array, n):
    return array[n]**n if len(array)-1>=n else -1

def index_up(array, n):
    try: return array[n]**n
    except: return -1

print(index([1, 2, 3, 4],10))
print(index_up([1, 2, 3, 4],2))