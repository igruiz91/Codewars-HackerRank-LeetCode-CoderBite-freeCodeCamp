def same_case(a, b):
    if a.isupper() and b.isupper() or a.islower() and b.islower(): return 1
    if a.isupper() and b.islower() or a.islower() and b.isupper(): return 0
    return -1


def same_case_up(a, b):
  return a.isupper() == b.isupper() if a.isalpha() and b.isalpha() else -1

print(same_case("a", "g"))
print(same_case("A", "B"))
print(same_case("a", "B"))
print(same_case("A", "b"))
print(same_case("1", "b"))
print("-----------------")
print(same_case("a", "g"))
print(same_case("A", "B"))
print(same_case("a", "B"))
print(same_case("A", "b"))
print(same_case("1", "b"))






