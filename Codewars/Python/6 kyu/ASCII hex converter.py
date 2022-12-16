class Converter():
    @staticmethod
    def to_ascii(h):
      return "".join([hex(ord(x))[2:] for x in h])
    
    def to_ascii_up(h):
      return h.decode("hex")

    @staticmethod
    def to_hex(s):
      resp =""
      for i in range(0,len(s),2):
        resp+= "0x"+s[i:i+2]+" "
      return ''.join(chr(int(h, 16)) for h in resp.split())

    def to_hex_up(s):
      return s.encode("hex")

s = "Look mom, no hands"


a = Converter.to_ascii(s)
a = Converter.to_ascii_up(s)
b = Converter.to_hex(a)
a = Converter.to_hex_up(a)

print(a)
print(b)
