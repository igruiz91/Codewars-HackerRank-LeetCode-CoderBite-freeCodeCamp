from math import ceil
from typing import Tuple
weapons = {"PT92": 17,
           "M4A1": 30,
           "M16A2": 30,
           "PSG1": 5}

def mag_number(info: Tuple[str, int]) -> int:
  b_need = info[1]*3
  w_bullets = weapons[info[0]]
  return b_need//w_bullets if b_need % w_bullets ==0 else b_need//w_bullets+1

def mag_number_up(info: Tuple[str, int]) -> int:
  return ceil(info[1]*3/weapons[info[0]])


print(mag_number(("PT92", 6)))
print(mag_number(("M4A1", 8)))
print(mag_number(("M16A2", 19)))
print(mag_number(("PSG1", 31)))
print(mag_number(('PT92', 425)))
print(":::::::::::::::::::::::")
print(mag_number_up(("PT92", 6)))
print(mag_number_up(("M4A1", 8)))
print(mag_number_up(("M16A2", 19)))
print(mag_number_up(("PSG1", 31)))
print(mag_number_up(('PT92', 425)))

#1335
