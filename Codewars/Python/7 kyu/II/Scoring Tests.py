#returns test score
def score_test(tests, right, omit, wrong):
  r =  tests.count(0)
  o =  tests.count(1)
  i =  tests.count(2)
  return r*right+o*omit-wrong*i

print(score_test([0, 0, 0, 0, 2, 1, 0], 2, 0, 1))
