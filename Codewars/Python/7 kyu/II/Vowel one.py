def vowel_one(s):
    return "".join(list(map(lambda x: '1' if x in "aeiou" else '0',list(s.lower()))))

def vowel_one_up(s):
  return "".join("1" if v in "aeiou" else "0" for v in s.lower())


print(vowel_one("vowelOneeiu"))
print(vowel_one_up("vowelOneeiu"))
