import sys

def get_min_max(seq):
  min = sys.maxsize
  max = -sys.maxsize
  for x in seq:
    if x<min: min = x
    if x>max: max = x
  return min, max


def get_min_max_up(seq):
  return min(seq), max(seq)

print(get_min_max([1, 2]))
print(get_min_max_up([1, 2]))
