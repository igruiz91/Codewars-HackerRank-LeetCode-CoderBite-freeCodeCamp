import random
from art import logo,vs
from data import data

def game():
  compare = [random.choice(data) for _ in range(2)]
  correct = True
  while correct:
    print(logo)
    print(f"Compare A: {compare[0]}, a , from ")
    print(vs)
    print(f"Compare B: {compare[1]}, a , from ")
    answer = input("Who has more followers? Type 'A' or 'B':")
    #check_answer(answer)
  pass


def check_answer(answer_a, answer_b):
  if answer_a["follower_count"] > answer_b["follower_count"]:
    return answer_a
  else:
    return answer_b



game()
