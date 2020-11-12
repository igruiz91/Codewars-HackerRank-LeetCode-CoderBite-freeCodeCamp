import re
def sum_nested(lst):
  resp = 0
  for x in lst:
    if type(x) == list:
      resp+=sum_nested(x)
    else:
      resp+=x
  return resp


def sum_nested_up(lst):
  return sum(sum_nested_up(x) if isinstance(x, list) else x for x in lst)

def sum_nested_up_regex(lst):
  return sum(map(int, re.findall('\d+', str(lst))))

print(sum_nested([1, [2, [3, [4]]]]))
print(sum_nested_up([1, [2, [3, [4]]]]))
print(sum_nested_up_regex([1, [2, [3, [4]]]]))
