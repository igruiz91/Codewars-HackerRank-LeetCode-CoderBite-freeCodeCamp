def get_nice_names(people):
  return [p["name"] for p in list(filter(lambda x: x["was_nice"], people))]

def get_nice_names_up(people):
  return [p["names"] for p in people if p["was_nice"]]


def get_naughty_names(people):
  return [p["name"] for p in list(filter(lambda x: not x["was_nice"], people))]
def get_naughty_names_up(people):
  return [p["name"] for p in people if not p["was_nice"]]

lst = [
    {'name': 'Warrior reading this kata', 'was_nice': True},
    {'name': 'xDranik', 'was_nice': False},
    {'name': 'Santa', 'was_nice': True}
]

print(get_nice_names(lst))
print(get_naughty_names(lst))
