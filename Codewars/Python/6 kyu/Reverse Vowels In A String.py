def reverse_vowels(s):
    vowels = "aeiouAEIOU"
    v = []
    for c in s:
      if c in vowels:
        v.append(c)
        s = s.replace(c, "🤝", 1)

    if len(v) == 0: return s

    for c in s:
      if c == "🤝":
        s =s.replace(c, v.pop(), 1)
    return s


def reverse_vowels_up(s):
  v = [c for c in s if c.lower() in "aeiou"]
  return "".join(v.pop() if c.lower() in 'aeiou' else c for c in s)



print(reverse_vowels("Hello"))
print(reverse_vowels_up("Hello"))
