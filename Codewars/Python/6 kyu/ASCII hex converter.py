class Converter():
    @staticmethod
    def to_ascii(h):
      return "".join([hex(ord(x))[2:] for x in h])


    @staticmethod
    def to_hex(s):
      resp =""
      for i in range(0,len(s),2):
        resp+= "0x"+s[i:i+2]+" "
      return ''.join(chr(int(h, 16)) for h in resp.split())


s = "Look mom, no hands"


a = Converter.to_ascii(s)
b = Converter.to_hex(a)

print(a)
print(b)
