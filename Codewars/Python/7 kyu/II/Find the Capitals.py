def capital(capitals):
  resp = []
  for c in capitals:
    if "state" in c.keys(): x= "state"
    else: x="country"
    resp.append(f'The capital of {c[x]} is {c["capital"]}')
  return resp


def capital_up(capitals):
  return [f'The capital of {c.get("country") or c["state"]} is {c["capital"]}' for c in capitals]


def capital_up_two(capitals):
  return ["The capital of {} is {}".format(*x.values()) for x in capitals]


print(capital([{"state" : 'Maine', 'capital': 'Augusta'}, {'country': 'Spain', "capital" : "Madrid"}]))
print(capital_up([{"state" : 'Maine', 'capital': 'Augusta'}, {'country': 'Spain', "capital" : "Madrid"}]))
print(capital_up_two([{"state" : 'Maine', 'capital': 'Augusta'}, {'country': 'Spain', "capital" : "Madrid"}]))
