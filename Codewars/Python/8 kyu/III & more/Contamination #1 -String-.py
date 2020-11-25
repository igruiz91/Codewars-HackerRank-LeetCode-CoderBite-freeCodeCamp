import re
def contamination(text, char):
    resp = re.sub(r'.', char, text)
    return resp

def contamination_up(t, c):
    return c*len(t)

print(contamination('abc', 'z'))
print(contamination_up('abc', 'z'))