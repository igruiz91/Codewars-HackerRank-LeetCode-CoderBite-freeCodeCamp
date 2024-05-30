def check_vowel(strng, position):
  if position<0: return False
  try:
    return True if strng.lower()[position] in  "aeiou" else False
  except:
    return False



def check_vowel_up(s, i):
  return 0 <= i <len(s) and s[i] in "aeiouAEIOU"


print(check_vowel('cAt', 1))
print(check_vowel_up('cAt', 1))
