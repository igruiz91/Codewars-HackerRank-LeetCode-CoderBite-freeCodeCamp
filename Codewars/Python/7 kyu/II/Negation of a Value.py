def negation_value(s, val):
    val = bool(val)
    if len(s) % 2 == 0: return val
    else: return not val


def negation_value_up(s, val):
  return len(s) % 2 ^ bool(val)




print(negation_value("!", False))
print(negation_value("!!!!!", True))
print(negation_value("!!", []))
print(negation_value('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', -1))



print(negation_value_up("!", False))
print(negation_value_up("!!!!!", True))
print(negation_value_up("!!", []))
print(negation_value_up('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', -1))
