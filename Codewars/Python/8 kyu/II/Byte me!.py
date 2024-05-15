def total_bytes(obj):
  for c in obj:
    print(ord(c).to_bytes(10))
print(total_bytes("123"))
