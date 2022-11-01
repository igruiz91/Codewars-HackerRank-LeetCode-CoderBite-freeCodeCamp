def nickname_generator(name):
  if len(name) <4: return "Error: Name too short"
  return name[:3] if name[2] not in ["a", "e", "i", "o", "u"] else name[:4]

def nickname_generator_up(name):
  return "Error: Name too short" if len(name) < 4 else name[:3+ (name[2] in "aeiou")]


print(nickname_generator("Jimmy"))
print(nickname_generator("Sam"))
print(nickname_generator("Douglas"))
print("================================================")
print(nickname_generator_up("Jimmy"))
print(nickname_generator_up("Sam"))
print(nickname_generator_up("Douglas"))
