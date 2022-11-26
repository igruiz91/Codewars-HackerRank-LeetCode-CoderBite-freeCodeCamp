import math
from typing import Tuple


def aspect_ratio(x: int, y: int) -> Tuple[int, int]:
    return (math.ceil(y*1.77777), y)


def aspect_ratio_up(x, y):
  return (math.ceil(y*16/9), y)

test  = [(640, 480, (854, 480)),
(960, 720, (1280, 720)),
(1440, 1080, (1920, 1080)),
(1920, 1440, (2560, 1440)),]


for t in test:
  print(aspect_ratio(t[0], t[1]))
  print(aspect_ratio_up(t[0], t[1]))
