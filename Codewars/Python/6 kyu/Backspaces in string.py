import re
def clean_string(s):
    reg = re.sub(r'.#',"", s)
    return reg

print(clean_string('#######'))