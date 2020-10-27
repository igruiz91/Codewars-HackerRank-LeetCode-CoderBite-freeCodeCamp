def spacify(string):
  resp = ''
  for c in string:
    resp+= c + ' '
  return resp[:-1]


def spacify_up(string):
  return " ".join(string)


def spacify_up_2(string):
  return string.replace('', ' ')[1: -1]

print(spacify('hello world'))
print(spacify_up('hello world'))
print(spacify_up_2('hello world'))
