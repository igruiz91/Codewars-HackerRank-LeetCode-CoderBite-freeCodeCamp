import random
import uuid

def generateName():
    abc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    resp = ""
    for i in range(6):
      x = random.randint(0,52)
      resp+=abc[x]
    return resp

def generateNameUp():
   return str(uuid.uuid4())[:6]


print(generateName())
print(generateNameUp())
