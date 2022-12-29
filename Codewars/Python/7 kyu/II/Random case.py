from random import choice

def random_case(x):
  return ''.join(choice((str.upper, str.lower))(char) for char in x)

def random_case_up(x):
  return "".join([choice([c.lower(), c.upper()]) for c in x])


print(random_case("Lorem ipsum dolor sit amet, consectetur adipiscing elit"))
print(random_case_up("Lorem ipsum dolor sit amet, consectetur adipiscing elit"))
