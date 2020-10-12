from functools import reduce


def joinWord(a, b):
  try:
    if ((len(a) & len(b)) & (len(a)+len(b) <= 7)):
        return " ".join([a, b])
  except:
    return None


def feedbackReview(feedback, size):
    arr = feedback.split()
    return reduce(joinWord, arr)


#print(joinWord('as', 'pes'))

print(feedbackReview('This is an example feedback', 8))
