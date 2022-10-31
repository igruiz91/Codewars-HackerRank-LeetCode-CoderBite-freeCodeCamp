def binary_to_string(binary):
  codes = [binary[i:i+8] for i in range(0, len(binary), 8)]
  return "".join(list(map(lambda x: chr(int(x,2)), codes)))


def binary_to_string_up(bin):
  return "".join(chr(int(bin[i:i+8], 2)) for i in range(0, len(bin), 8))

print(binary_to_string("0100100001100101011011000110110001101111"))
print(binary_to_string_up("0100100001100101011011000110110001101111"))
