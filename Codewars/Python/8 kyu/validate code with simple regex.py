import re
def validate_code(code):
    if re.match(r"^(1|2|3)\d+", str(code)):
        return True 
    else: 
        return False

def validate_code_up(code):
    return str(code).startswith(('1','2','3'))

def validate_code_up2(code):
    return str(code)[0] in '123'

print(validate_code(164))
print(validate_code_up(464))