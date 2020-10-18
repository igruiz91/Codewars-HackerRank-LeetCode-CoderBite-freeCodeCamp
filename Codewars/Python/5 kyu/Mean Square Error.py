def solution(array_a, array_b):
    l = len(array_a)
    dif = []
    for i in range(l):
        n = abs(array_a[i]-array_b[i])
        if not n == 0:
            dif.append(n**2)
        else:
            dif.append(0)
    return sum(dif)/l


def solution_up(a, b):
    return sum((x-y)**2 for x, y in zip(a, b))/len(a)


def solution_test(a, b):
  z = []
  for x, y in zip(a, b):
    z.append((x-y)**2)
  return sum(z)/len(a)


print(solution_test([1, 2, 3], [4, 5, 6]))
# print(solution([10, 20, 10, 2], [10, 25, 5, -2]))
# print(solution_up([10, 20, 10, 2], [10, 25, 5, -2]))
