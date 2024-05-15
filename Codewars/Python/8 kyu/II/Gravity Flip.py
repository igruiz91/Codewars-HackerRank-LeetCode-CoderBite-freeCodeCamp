def flip(d, a):
    return sorted(a) if d=='R' else sorted(a, reverse=True)




def flip_up(d, a):
  return sorted(a, reverse = d=="L")


print(flip('R', [3, 2, 1, 2] ))
print(flip_up("R",[3, 2, 1, 2] ))

print(flip("L",[1, 4, 5, 3, 5 ]))
print(flip_up("L",[1, 4, 5, 3, 5 ] ))
