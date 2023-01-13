def golf_score_calculator(par_string, score_string):
  calc = 0
  for i in range(len(par_string)):
    calc += int(par_string[i]) - int(score_string[i])
  return calc*-1


def golden_score_calculator_up(par_string, score_string):
  return sum(int(b)-int(a) for a,b in zip(par_string, score_string))


print(golf_score_calculator('443454444344544443', '353445334534445344'))
print(golf_score_calculator('443454444344544443', '353445334534445344'))
