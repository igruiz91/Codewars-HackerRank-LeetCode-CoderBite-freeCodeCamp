def shuffle_it(lst,*args):
  for l in args:
    a,b = l
    aux=lst[a]
    lst[a] = lst[b]
    lst[b] = aux
  return lst


def shuffle_it_up(l, *pairs):
  for x,y in pairs:
    l[x], l[y] = l[y], l[x]
  return l


print(shuffle_it([1, 2, 3, 4, 5], [1, 2]))
print(shuffle_it_up([1, 2, 3, 4, 5], [1, 2]))
