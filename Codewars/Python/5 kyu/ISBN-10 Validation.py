import re

def valid_ISBN10(isbn):
    if re.search(r"^[0-9]{9}[0-9X]{1}$", isbn):
        sum = 0
        for i,c in enumerate(isbn):
            if c=="X":
                sum+=100
            else:
                sum+= int(c)*(i+1)
        if sum%11==0:
            return True
    return False
