from itertools import accumulate


def spacey(array):
  resp = []
  w = ""
  for word in array:
    w+=word
    resp.append(w)
  return resp


def spacey_up(array):
  return list(accumulate(array))

def spacey_up_two(array):
  return ["".join(array[:i+1]) for i in range(len(array))]

print(spacey(['kevin', 'has', 'no', 'space']))
print(spacey_up(['kevin', 'has', 'no', 'space']))
print(spacey_up_two(['kevin', 'has', 'no', 'space']))
