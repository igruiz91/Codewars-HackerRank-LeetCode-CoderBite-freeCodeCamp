import random
from art import logo,vs
from data import data
import os

def clear():
  os.system("cls" if os.name == "nt" else "clear")


def game():
  compare = [random.choice(data) for _ in range(2)]
  points = 0
  correct = True
  while correct:
    answer = question(compare)
    if compare[selection(answer)] != check_answer(compare):
      correct = False
    else:
      points+=1
      compare = generate_vs(answer,compare)
      clear()
  print(f"Sorry, that's wrong. Final score: {points}")


def check_answer(compare):
  [answer_a, answer_b] = [compare[0], compare[1]]
  if answer_a["follower_count"] > answer_b["follower_count"]:
    return answer_a
  else:
    return answer_b

def generate_vs(answer, arr):
  new_compare = random.choice(data)
  if new_compare["name"] == arr[1]["name"]:
    generate_vs(answer, arr)
  return [arr.pop(1), new_compare]

def selection(str):
  return 0 if str =="a" else 1

def question(compare):
  [compare_a, compare_b] = [compare[0], compare[1]]
  print(logo)
  print(f"Compare A: {compare_a['name']}, a {compare_a['description']}, from {compare_a['country']}.")
  print(vs)
  print(f"Compare B: {compare_b['name']}, a {compare_b['description']}, from {compare_b['country']}.")
  print(f"pssss... {compare_a['follower_count']}, {compare_b['follower_count']}")
  answer = input("Who has more followers? Type 'A' or 'B': ").lower()
  return answer


game()
