import re
def make_acronym(phrase):
  resp =''
  if type(phrase) != str: return 'Not a string'
  elif len(re.findall('[a-zA-Z]|\s', phrase)) != len(phrase):
    return 'Not letters'
  else:
    for x in (phrase.split()):
      resp+=x[0]
    return resp.upper()


def make_acronym_up(phrase):
  try:
    return ''.join(word[0].upper if word.isalpha() else 0 for word in phrase.split())
  except AttributeError:
    return 'Not a string'
  except TypeError:
    return 'Not letters'


print(make_acronym('Hello codewarrior'))
print(make_acronym_up('Hello codewarrior'))
print(make_acronym('a42'))
print(make_acronym([2, 12]))
