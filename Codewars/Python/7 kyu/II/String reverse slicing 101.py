
import timeit

def reverse_slice(s):
    s = s[::-1]
    res = [s[i:] for i in range(len(s))]
    return res



def reverse_slice_up(s):
  return [s[i::-1] for i in range(len(s)-1,-1,-1)]


def reverse_slice_up_two(s):
  return [s[::-1][i:] for i in range(len(s))]

time_reverse_slice = timeit.timeit('reverse_slice("abcdefghijklmopqrstewnbsjkldsajflkjaslkdfjlaksd")', globals=globals(), number=1000)
time_reverse_slice_up = timeit.timeit('reverse_slice_up("abcdefghijklmopqrstewnbsjkldsajflkjaslkdfjlaksd")', globals=globals(), number=1000)
time_reverse_slice_up_two = timeit.timeit('reverse_slice_up_two("abcdefghijklmopqrstewnbsjkldsajflkjaslkdfjlaksd")', globals=globals(), number=1000)


print(reverse_slice("abcdefg"))
print(reverse_slice_up("abcdefg"))
print(reverse_slice_up_two("abcdefg"))

print(print(f"Execution time for function1: {time_reverse_slice:.6f} seconds"))
print(print(f"Execution time for function1: {time_reverse_slice_up:.6f} seconds"))
print(print(f"Execution time for function1: {time_reverse_slice_up_two:.6f} seconds"))

