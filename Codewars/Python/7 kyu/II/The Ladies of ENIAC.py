import re

def rad_ladies(name):
  return re.sub(r'[^A-Z\s!]', '', name.upper())


def rad_ladies_up(name):
    return "".join(re.findall(r"[A-Z\s!]+", name.upper()))

print(rad_ladies("k?%35a&&/y@@@£5599 m93753&$$$c$n///79u??@@%l?975$t?%5y%&$3$1!"))
print(rad_ladies_up("k?%35a&&/y@@@£5599 m93753&$$$c$n///79u??@@%l?975$t?%5y%&$3$1!"))
