import re

def consonant_count(s):
    consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ'
    return len(re.findall("["+consonants+"]", s))


def consonant_count_up(s):
  return sum(1 for c in s if c.isalpha() and c.lower() not in "aeiou")


def consonant_count_up_two(s):
  return len([c for c in s.lower() if c in "bcdfghjklmnpqrstvwxyz"])

print(consonant_count("XaeiouX"))
print(consonant_count_up("XaeiouX"))
print(consonant_count_up_two("XaeiouX"))
