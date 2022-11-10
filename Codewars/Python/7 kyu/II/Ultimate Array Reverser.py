def reverse(a):
    copy_a = list(reversed("".join(a)))
    resp = []
    for i in a:
      resp.append("".join(copy_a[:len(i)]))
      del copy_a[:len(i)]
    return resp


def reverse_up(a):
  s = reversed("".join(a))
  return ["".join(next(s) for _ in w) for w in a]

print(reverse(["I", "like", "big", "butts", "and", "I", "cannot", "lie!"]))
print(reverse_up(["I", "like", "big", "butts", "and", "I", "cannot", "lie!"]))
