def decode_pass(pass_list, bits):
    old_pass = "".join([chr(int(b,2)) for b in  bits.split()])
    return  old_pass if old_pass in pass_list else False



binary_code= '01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011'
print(decode_pass(["password123", "admin", "admin1"], binary_code))
