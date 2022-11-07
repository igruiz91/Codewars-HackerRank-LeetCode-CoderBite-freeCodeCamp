def bin_rota(arr):
  resp = []
  for i,v in enumerate(arr):
    if i%2==0: resp+=v
    else: resp+=list(reversed(v))
  return resp


def bin_rota_up(arr):
  return [name for i, row in enumerate(arr) for name in row[::-1 if i%2 else 1]]



print(bin_rota([["Stefan", "Raj",    "Marie"],
                ["Alexa",  "Amy",    "Edward"],
                ["Liz",    "Claire", "Juan"],
                ["Dee",    "Luke",   "Katie"]]))
print(bin_rota_up([["Stefan", "Raj",    "Marie"],
                ["Alexa",  "Amy",    "Edward"],
                ["Liz",    "Claire", "Juan"],
                ["Dee",    "Luke",   "Katie"]]))


