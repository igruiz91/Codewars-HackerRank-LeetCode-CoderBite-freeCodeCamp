def derive(c, e):
    return str(c*e)+'x^'+str(e-1 if e != 2 else e)


def derive_up(coef, expo):
  return f'{coef * expo}x^{expo-1}'


def derive_up_2(c, e):
  return ("{}x^{}".format(c*e, e-1))

print(derive(7, 8))
print(derive_up(7, 8))
print(derive_up_2(7, 8))
