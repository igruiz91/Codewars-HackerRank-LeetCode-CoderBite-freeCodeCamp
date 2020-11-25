import math
def wallpaper(l, w, h):
    resp = ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty"
  ]
    area = l*w*h
    return 0 if area == 0 else resp[math.ceil(((l * h * 2 + w * h * 2) * 1.15) / 5.2)]

print(wallpaper(6.3, 4.5, 3.29))

#((l * h * 2 + w * h * 2) * 1.15) / 5.2)