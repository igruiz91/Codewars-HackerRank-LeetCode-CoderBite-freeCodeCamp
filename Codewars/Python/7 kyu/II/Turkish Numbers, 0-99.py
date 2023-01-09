t = {"0": "sıfır",
"1" : "bir",
"2" : "iki",
"3" : "üç",
"4" : "dört",
"5" : "beş",
"6" : "altı",
"7" : "yedi",
"8" : "sekiz",
"9" : "dokuz",
"10" : "on",
"20" : "yirmi",
"30" : "otuz",
"40" : "kırk",
"50" : "elli",
"60" : "altmış",
"70" : "yetmiş",
"80" : "seksen",
"90" : "doksan"}

def get_turkish_number(num):
  resp = []
  while(num>10):
    n = num//10*10
    num-=n
    print(n, num)
    resp.append(t[str(n)])
    resp.append(t[str(num)])
  return " ".join(resp)


#print(10%10)

print(get_turkish_number(27))
print(get_turkish_number(20))
#print(get_turkish_number(27))
#print(get_turkish_number(38))
#print(get_turkish_number(90))
