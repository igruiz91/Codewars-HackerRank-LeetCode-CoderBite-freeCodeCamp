import re
def area_code(text):
    return "".join(re.findall(r"\((\d+)\)", text))


def area_code_up(text):
  return text[text.index("(")+1:text.index(')')]

def area_code_up_two(text):
  return text.split()





message = "The supplier's phone number is (555) 867-5309"

print(area_code(message))
print(area_code_up(message))
print(area_code_up_two(message))
