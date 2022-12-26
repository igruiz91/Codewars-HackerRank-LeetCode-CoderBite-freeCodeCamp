def convert_hash_to_array(hash):
  resp = []
  for k, v in hash.items():
    resp.append([k, v])
  return list(sorted(resp))



def convert_hash_to_array_up(hash):
  return sorted(map(list, hash.items()))

print(convert_hash_to_array({"name": "Jeremy", "age": 24}))
print(convert_hash_to_array_up ({"name": "Jeremy", "age": 24}))
