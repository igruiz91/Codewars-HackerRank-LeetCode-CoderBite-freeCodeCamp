#preloaded variable: "dictionary"
dictionary = {"D": "disturbing", "G": "gregarious", "M": "mustache"}


def make_backronym(acronym):
  return " ".join(list(map(lambda w: dictionary[w], list(acronym.upper()))))


def make_backronym_up(acronym):
  return " ".join(dictionary[c.upper()] for c in acronym)

print(make_backronym("dgm"))
print(make_backronym_up("dgm"))
