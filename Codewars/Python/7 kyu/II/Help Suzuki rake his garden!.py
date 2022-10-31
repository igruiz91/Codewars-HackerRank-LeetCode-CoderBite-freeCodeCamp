def rake_garden(garden):
  resp = ""
  for x in garden.split(" "):
    if x not in ["rock", "gravel"]: resp+= " gravel"
    else: resp+= " "+x
  return resp.strip()


def rake_garden_up(garden):
  return " ".join(e if e=="rock" else "gravel" for e in garden.split(" "))


def rake_garden_up_two(garden):
  valid = {"gravel", "rock"}
  return " ".join(e if e in valid else "gravel" for e in garden.split())

garden1 = 'slug spider rock gravel gravel gravel gravel gravel gravel gravel'

print(rake_garden(garden1))
print(rake_garden_up(garden1))
print(rake_garden_up_two(garden1))
