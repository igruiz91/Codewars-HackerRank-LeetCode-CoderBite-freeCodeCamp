def fix(paragraph):
    return ". ".join(s.capitalize() for s in paragraph.split('. '))


print(fix("hello. my name is inigo montoya. you killed my father. prepare to die."))
