def array(string):
    word = string.split(",")
    cut = slice(1,-1)
    resp = " ".join(word[cut])
    return None if resp == ""  else resp

def array_up(string):
    return " ".join(string.split(',')[1:-1]) or None


print(array('1, 3'))
