def encryptor(key, message):
  key %=26
  abcd="abcdefghijklmnopqrstuvwxyz"
  for c in message:
    # if ord(c)+key >122:
    #   print(chr(ord(c)-122+98))
    if ord(c)-key < 97:
      print(chr(122-(ord(c)-98)))


  return ""



print(encryptor(2,"abc"))
