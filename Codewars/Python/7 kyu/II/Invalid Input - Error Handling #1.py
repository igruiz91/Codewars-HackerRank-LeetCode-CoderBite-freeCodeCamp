def get_count(words=0):
    dic = {"vowels":0, "consonants":0}
    if words==0 or type(words).__name__!='str': return dic
    v="aeiou"
    co="bcdfghjklmnpqrstvwxy"
    for c in words.lower():
        if c in v: dic["vowels"]+=1
        if c in co: dic["consonants"]+=1
    return dic





def get_count_up(words=""):
  vowels = "aeiou"
  consonants = "bcdfghjklmnpqrstvwxyz"
  a,b = 0,0
  try:
    for c in words.lower():
      if c in vowels: a+=1
      elif c in consonants: b+=1
    return {"vowels":a,"consonants":b}
  except:
    return {"vowels":0,"consonants":0}



print(get_count("Test"))
print(get_count_up("Test"))
