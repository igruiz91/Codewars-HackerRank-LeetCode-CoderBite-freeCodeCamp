def move_vowels(input):
    vowels, consonants = [], []
    for c in list(input):
      if c in "eaiou":
        vowels.append(c)
      else: consonants.append(c)
    return "".join(consonants+vowels)


def move_vowels_up(s):
  return ''.join(sorted(s, key=lambda x: x in "aeiou"))

print(move_vowels('pelace'))
print(move_vowels_up('pelace'))
# print(move_vowels('day'))
# print(move_vowels('apple'))
